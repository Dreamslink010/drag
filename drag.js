function drag(id){
	var obj = document.getElementById("id");
	obj.onmousedown = function(){
		console.log("我在版本库");
		console.log("我在暂存区");
		console.log("我在工作区");
		console.log("撤销");
		console.log("撤回本次操作");
		console.log("分支操作")
	}
}
