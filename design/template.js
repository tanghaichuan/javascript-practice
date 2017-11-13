/*
* 模板方法模式 template-mothod
* 模板方法模式是一种只需使用继承就可以实现的模式
* 构成：1.抽象父类 2.具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。
* 子类通过继承这个抽象类，也继承了整个算法结构并且可以选择重写父类的方法。
* 抽象类的主要作用就是为它的子类定义公共接口。
* 抽象方法被声明在抽象类中，抽象方法没有具体的实现过程。
* 当我们用模板方法编写一个程序时，就意味着子类放弃了自己的控制权，而是改为父类通知子类。
*/

class parent{
	constructor(){}
	a(){}
	b(){}
	c(){}
	init(){
		this.a();
		this.b();
		this.c();
	}
}
class child1 extends parent{
	constructor(){
		super();
	}
	a(){
		console.log('child1:a');
	}
	b(){
		console.log('child1:b');
	}
	c(){
		console.log('child1:c');
	}
}
class child2 extends parent{
	constructor(){
		super();
	}
	a(){
		console.log('child2:a');
	}
	b(){
		console.log('child2:b');
	}
	c(){
		console.log('child2:c');
	}
}

const childs1 = new child1;
const childs2 = new child2;
childs1.init();
childs2.init();