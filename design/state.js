/*
* 状态模式 state
* 状态模式定义了状态与行为之间的关系，并将它们封装在一个类里。
* 避免Context无限膨胀，状态切换的逻辑被分布在状态类里中，也去掉了Context中原本过多的条件分支。
* 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然。
* Context中的请求动作和状态类中封装的行为可以非常容易的独立变化而互不影响。
* 策略模式中各个策略类之间是平等又平行的，它们之间没有任何联系。
* 状态模式中状态和状态对应的行为早已被封装好。
*/

// 控制灯的状态
class state {
	
	constructor(){}

	pressButton(){
		throw new Error('pressButton必须被重写');
	}
}

class offState extends state{

	constructor(light){
		super();
		this.light = light;
	}

	pressButton(){
		console.log('offState');
		this.light.setState(this.light.weakLightState);
	}
}

class weakState extends state{
	constructor(light){
		super();
		this.light = light;
	}

	pressButton(){
		console.log('weakLightState');
	}
}

class light {
	constructor(){
		this.offLightState = new offState(this);
		this.weakLightState = new weakState(this);
		this.currState = null;
		this.button = null;
	}
	init(){
		const button = document.createElement('button');
		this.button = document.body.appendChild(button);
		this.button.innerHTML = '切换状态';
		this.currState = this.offLightState;
		this.button.onclick = () =>{
			console.log(this);
			this.currState.pressButton();
		};
	}
	setState(newState){
		this.currState = newState;
	}
}

const lights = new light;
lights.init();


