//前端公有变量(与DMS设定一致)
function LanguageCn_Tw_En() { return "0"; }//"0":简体中文;"1"繁体中文;"2":英文
function TankQty() { return 106; }//106个槽
function TransporterQty() { return 11; }//天车数

function Row1StartTankNumber() { return 1; }//第1排开始槽号
function Row1EndTankNumber() { return 49; }//第1排结束槽号
function Row2StartTankNumber() { return 60; }//第2排开始槽号
function Row2EndTankNumber() { return 106; }//第2排结束槽号
function Row3StartTankNumber() { return 0; }//第3排开始槽号
function Row3EndTankNumber() { return 0; }//第3排结束槽号
function Row4StartTankNumber() { return 0; }//第4排开始槽号
function Row4EndTankNumber() { return 0; }//第4排结束槽号
function Row5StartTankNumber() { return 0; }//第5排开始槽号
function Row5EndTankNumber() { return 0; }//第5排结束槽号

var PlcOnlineOffline = "";//DMS与PLC连线状态(在线.../离线.../Online.../Offline...)
var PlcMode = "";//PLC模式(模式:自动(Mode:AUTO)/模式:手动(Mode:MANU)/模式:寸动(Mode:JOG))
