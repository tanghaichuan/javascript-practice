// 手写jsonp
// 1.ajax直接请求有跨域问题
// 2.web页面调用js文件不受跨域影响(凡是拥有src属性的标签都拥有跨域的能力)，如script img iframe
// 3.通过纯web端跨域，只能在服务器上将数据装进js格式的文件里。
// 4.jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。 
// 5.只支持get请求，只支持跨域http请求，不能解决不同域下两个页面js连调

class Jsonp {
    constructor() {

    }
    // 或区当前时间戳
    now() {
        return (new Date()).getTime();
    }
    // 获取随机数
    rand() {
        return Math.random().toString().substr(2);
    }

    removeElem(elem) {
        let parent = elem.parentNode;
        if (parent && parent.nodeType !== 11) {
            parent.removeChild(elem);
        }
    }
    // url组装
    parseData(data) {
        let ret = '';
        if (typeof data === "string") {
            ret = data;
        } else if (typeof data === "object") {
            for (let item in data) {
                ret += "&" + item + "=" + encodeURIComponent(data[item]);
            }
        }

        // 加时间戳，防止缓存
        ret += "&_time=" + this.now();
        ret = ret.substr(1);
        return ret;
    }

    getJSON(url, data, func) {
        let name; //函数名称
        // 拼装url
        url = url + (url.indexOf("?") === -1 ? "?" : "&") + this.parseData(data);
        // 检测callback函数名是否定义
        let match = /callback=(\w+)/.exec(url);
        if (match && match[1]) {
            name = match[1];
        } else {
            // 如果未定义函数名的话随机生成一个函数名
            // 随机生成的函数名通过时间戳拼16位随机数的方式，防止重命名
            name = "jsonp_" + this.now(); + '_' + this.rand();
            // 把callback中的?替换成函数名
            url = url.replace("callback=?", "callback=" + name);
            // ?不被encode
            url = url.replace("callback=%3F", "callback=" + name);
        }

        // 创建script元素
        let script = document.createElement("script");
        script.type = "text/javascript";
        // 设置远程url
        script.src = url;
        // id
        script.id = "id_" + name;

        //把传进来的函数重新组装，并设置为全局函数，远程可以调用这个函数
        window[name] = function (json) {
            // 执行后销毁该函数
            window[name] = undefined;
            // 获取该script元素
            let elem = document.getElementById("id_" + name);
            // 删除head里面插入的script,避免影响整个dom
            JSON.removeElem(elem);
            // 执行传进来的函数
            func(json);
        }

        // head里面插入script元素
        let head = document.getElementsByTagName("head");
        if (head && head[0]) {
            head[0].appendChild(script);
        }
    }
}

export default new Jsonp();
// let JSONP = new Jsonp();

// const data = {
//     form: '北京',
//     age: 22,
//     output: 'json',
//     callback: "?"
// }
// JSONP.getJSON("http://api.qunar.com/cdnWebservices.jcp", data, json => {
//     console.log(json);
// })