/*
* 组合模式 composite
* 组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。
* 还可以通过对象的多态性表现，使得用户对单个对象和组合对象的使用具有一致性。 
* 1、组合模式不是父子关系
* 2、对叶对象操作的一致性
* 3、双向映射关系
* 4、用职责链模式提高组合模式性能
*/

class commond {
	constructor(){
		this._commondList=[];
	}
	add(commond){
		this._commondList.push(commond);
	}
	execute() {
		this._commondList.forEach(item => {
			item.execute();
		}); 
	}
}
