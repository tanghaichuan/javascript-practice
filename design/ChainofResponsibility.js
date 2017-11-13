/*
* 职责链模式 Responsibility
* 请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接受者之间的强联系。
*/
const chain = fn =>{
	this.fn = fn;
	this.successor = null;
}
chain.prototype.setNextSuccessor = successor => {
	this.successor = successor;
}
chain.prototype.next = ()=> this.successor && this.successor.passRequest(...arguments);

chain.prototype.passRequest = () => {
	let ret = this.fn(...arguments);
	if(ret === 'setNextSuccessor'){
		return this.successor && this.successor.passRequest(this.successor,...arguments);
	}
}
const fn1 = () => {};
const fn2 = () => {};

/*fn1.setNextSuccessor(fn2).setNextSuccessor(fn3);
fn1.passRequest();*/
