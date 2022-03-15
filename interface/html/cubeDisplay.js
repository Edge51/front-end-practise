
///* test data
var testDataCube = [];
for(let i = 0; i < 100; i++){
	testDataCube.push(7);
}
var testDataFB = [];
var poleStatus = [];
for(let i = 0; i < 10; i++){
	testDataFB.push(2 * i);
	poleStatus.push(0);
}
var items = [];
for(let i = 0; i < 2; i++){
	items.push(i);
}
var filename = new NativeFileSystem.FileEntry('../resources/output.txt');
var fileread = new FileReader();
var data = fileread.readAsText(filename);
console.log(data);

function sleep(time) {
	for (let index = Date.now(); Date.now() - index < time;) {
	}
}
//*/


function draw() {
	// 画布
	var cvsTransporterAndStation = document.getElementById("cvsTransporterAndStation");
	var context = cvsTransporterAndStation.getContext("2d");
	//天车

	for (let round = 0; round < 40; round++) {
		context.clearRect(0, 0, cvsTransporterAndStation.width, cvsTransporterAndStation.height)
		
		var operations = getOperations();
		execute(operations);
		//prompt(testDataFB[3]);
		try {
			var row1FirstXPostion = 30;
			var row1TankYPosition = 50;
			var tankWidth = 31;
			
			context.fillStyle = "#000000";//设置颜色
			context.textAlign = "left";//设置水平对齐方式
			context.textBaseline = "middle"; //设置垂直对齐方式

			
			for(let tankIndex = 0, count = 0; tankIndex< testDataCube.length; tankIndex++){
				if(count == 30){
					count = 0;
					row1TankYPosition += 130;
				}
				var xPostion = row1FirstXPostion + tankWidth * (tankIndex % 30);
				context.drawImage(cubeElement(testDataCube[tankIndex]), xPostion, row1TankYPosition);
				count++;
			}
		} catch (error) {
			console.log(error.message);
		}

		//天车
		try {
			var row1FirstXPostion = 30;
			var tankWidth = 31;

			var row1PoleYPosition = 9;
			for(let index = 0; index < testDataFB.length; index++){
				var xPosition = row1FirstXPostion + tankWidth * (testDataFB[index] % 30);
				var yPosition = row1PoleYPosition + 130 * (testDataFB[index] / 30);
				context.drawImage(FBElement(poleStatus[index]), xPosition, yPosition);
			}
		} catch (error) {
			
		}
		//await new Promise(res => { setTimeout(res, 1000); });
		
		prompt(Date.now());
		sleep(1);
		//alert(1)

	}
}

function cubeElement(cubeStatus) {
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

	switch (cubeStatus) {
		case 1:
			return imgTankNotUseFBOffBlue;
		case 2:
			return imgTankNotUseFBOffColourless;
		case 3:
			return imgTankNotUseFBOffPurple;
		case 4:
			return imgTankNotUseFBOnBlue;
		case 5:
			return imgTankNotUseFBOnColourless;
		case 6:
			return imgTankNotUseFBOnPurple;
		case 7:
			return imgTankUseFBOffBlue;
		case 8:
			return imgTankUseFBOffColourless;
		case 9:
			return imgTankUseFBOffPurple;
		case 10:
			return imgTankUseFBOnBlue;
		case 11:
			return imgTankUseFBOnColourless;
		case 12:
			return imgTankUseFBOnPurple;
	
		default:
			break;
	}
}

function FBElement(FBStatus){
	var imgTransporterDown = document.getElementById("imgTransporterDown");
	var imgTransporterUp = document.getElementById("imgTransporterUp");
	if(FBStatus === 0){
		return imgTransporterDown;
	}else if(FBStatus === 1){
		return imgTransporterUp;
	}
}

function getOperations(file){
	operations = [];
	operations.push([1, 'pole3', 'slot25', 'p1']);
	operations.push([2, 'slot4', 'p1']);
	return operations;
}

function execute(operations){
	for(let i = 0; i < operations.length; i++){
		if(operations[i][0] === 2){
			var index = Number(operations[i][1].substr(4));
			if(operations[i][-1] === 'empty'){
				testDataCube[index - 1] = 7;
			}else if(operations[i][-1] === 'notchanged'){

			}else {
				testDataCube[index - 1] = 10;
			}
		}else if(operations[i][0] === 1){
			var poleIndex = Number(operations[i][1].substr(4));
			testDataFB[poleIndex - 1] = Number(operations[i][2].substr(4));
			if(operations[i][-1] === 'empty'){
				poleStatus[poleIndex - 1] = 0;
			}else if(operations[i][-1] === 'notchanged'){

			}else{
				poleStatus[poleIndex - 1] = 1;
			}
		}
	}
}

function parseOperation(operation){
	if(operation[0] == 'move-pole-forward'){
		return [[1, operation[1], operation[-1], 'notchanged']];
	}
	else if(operation[0] == 'move-pole-inverse'){
		return [[1, operation[1], operation[-2], 'notchanged']];
	}
	else if(operation[0] == 'hangup-pole'){
		return [[1, operation[1], operation[-2], operation[-1]],[2, operation[-2], 'empty']];
	}
	else if(operation[0] == 'hangoff-pole'){
		return [[1, operation[1], operation[-2], 'empty'], [2, operation[-2], operation[-1]]];
	}
	else{
		console.log('error operation');
	}
}