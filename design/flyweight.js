/*
* 1、享元模式 flyweight
* 享元模式（共享元素）常用于性能优化，核心是运用共享技术来有效支持大量细粒度的对象。
* 享元模式将对象的属性划分为内部状态和外部状态。
* 1、内部状态存储于对象内部
* 2、内部状态可以被一些对象共享
* 3、内部状态独立于具体的场景，通常不会改变
* 4、外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享
* 可以被对象共享的属性通常被划分为内部状态，外部状态取决于具体的场景。
*/

const obj = type => {
	this.type = type;
}

const factory = (() => {
	const createdObj = {};
	return {
		create(type) {
			if(createdObj[type]){
				return createdObj[type];
			}
			return createdObj[type] = new obj(type);
		} 
	}
})();

const manager = (() => {
	let dataBase = {};
	return {
		// 提交创建请求
		add(id) {
			let flyweightObj = factory.create(type);
			// 保存外部状态
			dataBase[id] = {};
			return flyweightObj;
		},
		// 把外部状态放到共享状态里面
		setState(id,flyweightObj){
			let data = dataBase[id];
			for(let i in data){
				flyweightObj[i] = data[i];
			}
		}
	}
})();

// 对象池
class Factory{

	constructor(){
		this._pool = []; // 对象池
	}

	create(fn) {
		if(this._pool.length ===0){
			// 创建dom
			fn(...arguments);
		}else{
			return this._pool.shift();
		}
	}

	recover(Dom) {
		return this._pool.push(Dom); //对象池回收dom
	}
}