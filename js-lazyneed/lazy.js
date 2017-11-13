								
const over = Symbol();			//这里Symbol作为一个独一无二的标志
//console.log(over);			//来判断函数链是否完成。	
const isOver = function (_over){
	return _over===over;
}

//生成函数range，接受一个起始和终止参数，返回一个求值函数
//运行求值函数返回一个值，终止的时候返回终止值
const range = function (from,to){
	let i = from;
	return function () {
		if(i < to){
			i++;
			console.log('range\t',i);
			return i;
		}
		return over;
	}
}

//转换函数map,接受一个求值函数和处理函数，获取求值函数流中的数据
//对数据进行处理，返回一个流。
const map=function(flow,transform){
	return function(){
		const data=flow();
		console.log('map\t',data);
		return isOver(data)?data:transform(data);
	}
}

//过滤函数filter，接受一个求值函数，对求值函数流中的数据进行过滤
//找到符合的数据并且返回
const filter=function(flow,condition){
	return function(){
		while(true){
			const data=flow();
			if(isOver(data)){
				return data;
			}
			if(condition(data)){
				console.log('filter\t',data);
				return data;
			}
		}
	}
}

//中断函数stop,接受一个求值函数，当达到某个条件的时候中断
//可以用闭包函数加上stop函数接着实现一个take函数。
const stop=function(flow,condition){
	let _stop=false;
	return function(){
		if(_stop) return over;
		const data=flow();
		if(isOver(data)){
			return data;
		}
		_stop=condition(data);
		return data;
	}
}
const take=function(flow,num){
	let i=0;                          //i与闭包内i的作用域分开，不影响闭包内i的递增。
	return stop(flow,function(data){
		return ++i>=num;
	});
}

//收集函数join,因为返回的都是一个函数
//最后使用一个join函数来收集所有的值并返回一个数组
const join=function(flow){
	const arry=[];
	while(true){
		const data=flow();
		if(isOver()){
			break;
		}
		arry.push(data);
	}
	return arry;
}
//range接受起始参数0，终止参数20并返回一个求值函数；map对每个数据进行*10处理；filter接受函数流，过滤其中取余为3的数字，stop中断函数求值次数。
const nums = join(take(filter(map(range(0, 20), n => n * 10), n => n % 3 === 0), 2));
console.log(nums);
//join调用take,take返回stop，stop返回filter,filter返回map,map返回range，range返回求值函数,最终join将得到的值压入堆栈。
//直到stop中断次数或得到终止参数。