function fibonacci(num) {
// your code here
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
	let prev1 = 0, prev2 = 1;
	let fib = prev1;//0
	for(let i = 3; i<=num; i++){//4
		fib = prev1 + prev2;//0+1,1+1,
		prev1 = prev2;//1
		prev2 = fib;//2
	}
	return prev2;
}

// let res = fibonacci(6);
// alert(res);

module.exports = fibonacci;
