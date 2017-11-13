/*
* 观察者模式（发布订阅模式）observer
* 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
* 开发中，一般用事件模型来替代传统的发布-订阅模型
* 1.指定发布者
* 2.给发布者添加缓存列表，用于存放回调函数以便通知订阅者
* 3.发布消息时，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数
*/

class event {
	constructor() {
		// 缓存事件
		this._eventList = {};
	}
	// 订阅
	listen(key,fn) {
		// 函数列表存储
		if(!this._eventList[key]) {
			this._eventList[key] = [];
		}
		this._eventList[key].push( fn );
	}
	// 发布
	trigger() {
		let key = [...arguments].shift();
		let val = [...arguments].pop();
		let fns = this._eventList[key];
		if(!fns || fns.length === 0) {
			return false;
		}
		this._eventList[key].forEach((fn) => {
			fn(val);
		})
	}
	// 移除订阅
	remove(key,fn) {
		let fns = this._eventList[key];
		if(!fns) {
			return false;
		}
		if(!fn) {
			fns && (fns.length = 0);
		}else{
			for(let l=fns.length-1;l>=0;l--){
				if( fns[l] === fn ){
					fns.splice(l,1);
				}
			}
		}
	}
}

var Event = new event;

function a1() {
	console.log('listening'+arguments[0]);
}
function a2() {
	console.log('listen'+arguments[0]);
}
Event.listen('a',a1)
Event.listen('a',a2)
Event.remove('a',a1)
Event.trigger('a',1000)