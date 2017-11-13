
/*
* 1、单例模式 singleton
* 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点
* 核心：确保只有一个实例，并提供全局访问
* 应用：单例模式可以应用在线程池、全局缓存、浏览器中window对象以及创建唯一的对象等。
*/

/*
* 1.2、es5 代理实现单例模式
*/
function createDiv(html) {
	this.html=html;
	this.init();
}
createDiv.prototype.init = function() {
	//节点操作
	console.log(this.html);
}
//代理类
var proxySingleton = (function(){
	var instance;
	return function(html){
		if(!instance){
			instance=new createDiv(html);
		}
		return instance;
	}
})();
//相同对象只初始化一次
var a = new proxySingleton('a');
var	b = new proxySingleton('b');
console.log(a===b);
// 全局变量 var a={} 也可起到单例模式的作用，需要加命名空间


/*
* 1.3、es5 惰性单例
*/
//可以通过事件驱动触发代理单例


/*
* 1.4、通用惰性单例
* 提高代码复用性
*/
// getSingle对传入函数进行改造，若已存在则返回result中保存的对象，否则对result进行初始化
// 闭包、高阶函数
var getSingle = function(fn) {
	var result;
	return function(){
		return result || (result = fn.apply(this,arguments));//调用fn,改造的函数继承父级this指向
	}
}
