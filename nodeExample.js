var colors = require ('colors');


var str = '***********';
function cDown(){
		
		
	console.log(colors.rainbow(str.slice(0,str.length - 1)));	

	str = str.slice(0,str.length - 1);
}

setInterval(cDown,1000)

