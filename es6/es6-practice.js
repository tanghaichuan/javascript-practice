//类
class Animal {
	//构造函数
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	getMessage(){
		console.log(this.name+' is '+this.age+' years old');
	}
	static showInfo(){
		console.log("show-info");
	}
}

class Dog extends Animal{
	constructor(name,age,color){
		//继承父级元素的属性
		super(name,age);
		this.color=color;
	}
	getName(){
		console.log(" name is "+this.name+" age is "+this.age+"  color is "+this.color);
	}
}

//var cat=new Animal('cat','1');
//cat.getMessage();

//console.log(cat.__proto__);

Animal.showInfo();

var dog=new Dog("dog","2","black");
dog.getName();




//箭头函数
var others={data:"other data"};

var obj={
	__proto__:others,
	name:'箭头函数',
	course:["react","node","es6"],
	getMessage(){
		//共享父作用域的关键字this
		this.course.forEach((item)=>{
			console.log(this.name+" teach "+item );
		})
	}
}
console.log(obj.data);
obj.getMessage();

//模板字符串
var name="cat";
var age="1";

var str=`${name} is ${age} years old`;
var htmlStr=`
		<div>
			<h1>${name} is ${age} years old</h1>
		</div>		
`;
console.log(htmlStr);
console.log(str);


// 展开操作 其余 不依赖apply/call调用函数传参 
// 合并数组
// 拷贝数组

var arr=[18,19,20];
var newArr=[...arr,1000];
let arr2 = [...newArr];
console.log(arr2)
console.log(newArr)
console.log(Math.max(1,2,3000,...newArr));
