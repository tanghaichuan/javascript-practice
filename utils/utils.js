/**
 * 解析url参数
 * 尽可能全面正确的解析一个任意url的所有参数为Object。
 */
export function parseParam(url) {
	let starIndex = url.indexOf('?');
	let str = url.substr(starIndex + 1);
	let arr = str.split("&");
	let obj = {};
	let tempArr = [];

	let a, b, c;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf("=") > -1) {
			a = arr[i].indexOf("=");
			b = arr[i].substring(0, a); // 属性
			c = arr[i].substr(a + 1); // 值

			if (obj.hasOwnProperty(b)) {
				tempArr.push(obj[b]);
				tempArr.push(c);
				obj[b] = tempArr;
			} else {
				obj[b] = decodeURI(c);
			}
		} else {
			if (!obj[arr[i]]) {
				obj[arr[i]] = true;
			}
		}
	}
	return obj;
}


/**
 * 实现一个简单的模板引擎
 */
export function render(template, obj) {

}


/**
 * 将一个任意长的数字变成逗号分割的格式
 */

/**
 * 数据绑定的最基本实现
 */

/**
 * 实现一个平滑改变改变数值大小的类
 */

/**
 * 递归找文件
 */

/**
 * Promise
 */

/**
 * 算法题，实现一个函数，可以判断a字符是否被包含在b字符中
 */

/**
 * 作用域
 */

/**
 * 正则题
 */


/**
 * 几何题，判断一个点是否在多边形内
 */