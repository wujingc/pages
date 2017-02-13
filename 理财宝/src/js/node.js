var fs =require("fs");
fs.readFile("src/js/ceshi.txt","utf-8",function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data);
	}
})