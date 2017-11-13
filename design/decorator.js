/*
* 装饰者模式 decorator
* 代理模式的目的是，当直接访问本体不方便或者不符合需要时，为这个本体提供一个替代者，本体定义了关键功能，而代理提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。
*   代理模式强调的一种关系（proxy与它实体之间的关系），这种关系一开始就会被确认，代理-本体的引用。
* 装饰者模式的目的是，为对象动态的加入行为。
*   装饰者模式用于一开始不能确定对象的全部功能，会形成一条长长的装饰链。
*/

Function.prototype.after = function(afterFn){
	var _self = this;                           // 保存原函数的引用。
	return function(){							// 返回包含原函数和新函数的“代理函数”。
		var ret = _self.apply(this,arguments);  // 执行原函数并返回原函数的执行结果，并保证this不被劫持。
		afterFn.apply(this,arguments);			// 执行新函数，保证this不被劫持，新函数接受参数也会被原封不动的传入原函数。
		return ret;
	}
}