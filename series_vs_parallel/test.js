const fs = require('fs');
const util = require('util');

const tic = function(){console.log('.')};

function wait(ms){
	//const iId = setInterval(tic, 1000);
	//setTimeout(()=>clearInterval(iId), ms);
	return new Promise((res) =>
		{
			setTimeout(res, ms);
		}
	);
}

const sleep = util.promisify(setTimeout);

async function serial(ms){
	let result1 = await wait(ms);
	let result2 = await wait(ms);
	let result3 = await wait(ms);

	console.log('serial is done');
}

async function parallel(ms){
	let result1 = sleep(ms);
	let result2 = sleep(ms);
	let result3 = sleep(ms);

	let r1 = await result1;
	let r2 = await result2;
	let r3 = await result3;

	console.log('parallel is done');
}

let ms = 1000;
const intervalId = setInterval(tic, 1000);
setTimeout(()=>{clearInterval(intervalId);}, ms*3+6);
serial(ms);
parallel(ms);

