//操作权限(与DMS设定一致)
function UserSetRight() { return 0x0001; }//用户设定
function DataEditRight() { return 0x0002; }//资料编辑
function DataLoadRight() { return 0x0004; }//资料装载
function DosingSetRight() { return 0x0008; }//加药设定
function TankSelectRight() { return 0x0010; }//槽位选择
function ExitSystemRight() { return 0x0020; }//退出系统
function TemperatureSetRight() { return 0x0040; }//温度设定
function TimeSetRight() { return 0x0080; }//震动时间，抖动时间
function FBNubmerSetRight() { return 0x0100; }//飞巴设定
function ProcessEditRight() { return 0x0200; }//流程编辑
function ClearAllRight() { return 0x0400; }//清除全部
function MaintainRight() { return 0x0800; }//设备维护
function RackManagerRight() { return 0x1000; }//挂具管理
function ManagerRight() { return 0x8000; }//全部权限

