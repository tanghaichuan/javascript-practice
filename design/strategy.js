
/*
* 1、策略模式 strategy
* 定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
* 一个基于策略模式的程序至少由两部分构成，策略类：封装具体的算法，并负责具体的计算过程。
* 环境类（Context）：Context接受客户的请求，随后把请求委托给某一个策略类。Context要维持对某个策略对象的引用。
* 本质：封装一系列算法或规则
*/
// es5
var strategies = {
	a:function (s) {
		return s*2;
	}
}

var ca = function (l,s){
	return strategies[l](s);
}
console.log( ca('a',1) )

//es6
class strategy {
	constructor(){}
	a(s) {
		return s*2;
	}
}
let b = new strategy;

let cb = function(l,s) {
	return b[l](s);
}
console.log( cb('a',1) )


/*
* 1、策略模式利用组合、委托和多态等技术思想，可以有效地避免多重条件选择语句。
* 2、策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，理解，扩展
* 3、策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
* 4、在策略模式中利用组合和委托让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案。
*/


