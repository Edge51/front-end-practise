function draw() {
	// 画布
	var cvsTransporterAndStation = document.getElementById("cvsTransporterAndStation");
	var context = cvsTransporterAndStation.getContext("2d");

	//槽位和飞巴
	var imgTankNotUseFBOffBlue = document.getElementById("imgTankNotUseFBOffBlue");
	var imgTankNotUseFBOffColourless = document.getElementById("imgTankNotUseFBOffColourless");
	var imgTankNotUseFBOffPurple = document.getElementById("imgTankNotUseFBOffPurple");
	var imgTankNotUseFBOnBlue = document.getElementById("imgTankNotUseFBOnBlue");
	var imgTankNotUseFBOnColourless = document.getElementById("imgTankNotUseFBOnColourless");
	var imgTankNotUseFBOnPurple = document.getElementById("imgTankNotUseFBOnPurple");
	var imgTankUseFBOffBlue = document.getElementById("imgTankUseFBOffBlue");
	var imgTankUseFBOffColourless = document.getElementById("imgTankUseFBOffColourless");
	var imgTankUseFBOffPurple = document.getElementById("imgTankUseFBOffPurple");
	var imgTankUseFBOnBlue = document.getElementById("imgTankUseFBOnBlue");
	var imgTankUseFBOnColourless = document.getElementById("imgTankUseFBOnColourless");
	var imgTankUseFBOnPurple = document.getElementById("imgTankUseFBOnPurple");

	//天车
	var imgTransporterDown = document.getElementById("imgTransporterDown");
	var imgTransporterUp = document.getElementById("imgTransporterUp");

	try {
		var row1FirstXPostion = 30;
		var row1YPosition = 50;
		var tankWidth = 31;
		
		context.fillStyle = "#000000";//设置颜色
		context.textAlign = "left";//设置水平对齐方式
		context.textBaseline = "middle"; //设置垂直对齐方式

		for(var tank = 0, tankIndex = 0; tank < 14; tank++, tankIndex++){
			var xPostion = row1FirstXPostion + tankWidth * tankIndex;
			context.drawImage(imgTankNotUseFBOffBlue, xPostion, row1YPosition);
		}
	} catch (error) {
		console.log(error.message);
	}

	//天车
	try {
		var row1FirstXPostion = 30;
		var tankWidth = 31;
		var index = 10;

		var yPosition = 9;
		var xPosition = row1FirstXPostion + tankWidth * index;
		context.drawImage(imgTransporterDown, xPosition, yPosition);
	} catch (error) {
		
	}
}