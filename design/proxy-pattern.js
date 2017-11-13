/*
* 1、代理模式 proxy-pattern
* 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问
* 代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，
* 客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象，
* 单一职责：就一个类而言，应该仅有一个引起它变化的原因。
*/

/*
* 1.1 保护代理和虚拟代理
*/ 

/*
* 1.1.1 虚拟代理实现图片预加载
*/
let myImg = (() => {
	let imgNode = {
		src:''
	}
	return {
		setSrc(src) {
			imgNode.src = src; 
			console.log(imgNode.src);
		}
	}
})();

let proxyImg = (() => {
	let img = new Image;
	img.onload = () => {
		myImg.setSrc( this.src );
	}
	return {
		setSrc( src ) {
			myImg.setSrc('loadingurl');
			img.src = src;
			console.log(img.src)
		}
	}
})();

//proxyImg.setSrc('imgurl');

/*
* 1.2 缓存代理
*/

let mult = () => {
	console.log('mult');
}

let proxyMult = (()=>{
	let cache = {};  //缓存
	()=>{
		let args = '';
		if(args in cache){
			return cache[args];
		}
		return cache[args] = mult(...arguments);
	}
})();