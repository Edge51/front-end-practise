//Number:要格式化的数; Digit:位数
function IntegerFormate(Number, Digit) {
    var Temp = Number;
    try {
        var Length = Number.toString().length;
        while (Length < Digit) {
            Temp = "0" + Temp;
            Length++;
        }
    }
    catch (ex) {
        var Error = {
            ErrorIP: "xxx.xxx.xxx.xxx",
            ErrorSource: "PublicScript.js_IntegerFormate",
            ErrorInfomation: ex.message,
        }
        $.post("../BLL/ErrorLog.ashx?Action=0001", Error, function (ReceiveData) { });
    }
    return Temp;
}

//转换日期格式,将DMS DateTable里的日期时间转换为"yyyy-mm-dd hh:mm:ss"
function ChangeDateFormat(DateTime) {
    var Temp = "";
    try {
        if (DateTime != null) {
            var TempDate = new Date(parseInt(DateTime.replace("/Date(", "").replace(")/", ""), 10));
            var Year = TempDate.getFullYear();
            var Month = TempDate.getMonth() + 1 < 10 ? "0" + (TempDate.getMonth() + 1) : TempDate.getMonth() + 1;
            var Day = TempDate.getDate() < 10 ? "0" + TempDate.getDate() : TempDate.getDate();
            var Hour = TempDate.getHours() < 10 ? "0" + TempDate.getHours() : TempDate.getHours();
            var Minute = TempDate.getMinutes() < 10 ? "0" + TempDate.getMinutes() : TempDate.getMinutes();
            var Second = TempDate.getSeconds() < 10 ? "0" + TempDate.getSeconds() : TempDate.getSeconds();
            Temp = Year + "-" + Month + "-" + Day + " " + Hour + ":" + Minute + ":" + Second;
        }
    }
    catch (ex) {
        var Error = {
            ErrorIP: "xxx.xxx.xxx.xxx",
            ErrorSource: "PublicScript.js_ChangeDateFormat",
            ErrorInfomation: ex.message,
        }
        $.post("../BLL/ErrorLog.ashx?Action=0001", Error, function (ReceiveData) { });
    }
    return Temp;
}
