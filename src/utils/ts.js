/* 定义数据单元类型 */
var isBoolean = false;
var isNumber = 1000;
var isString = 'i is string';
isString = 'to do string';
/* 拼接加入string类型，自动转换为字符串类型 */
var all = "" + isString + isNumber;
/* 定义数组 */
var list = [1, 2, 3];
/* 定义数值数组 */
var listNumber = [1, 2, 3];
/* 定义元组 对应所在索引位置类型 读取当前索引不能使用该类型外的方法*/
var x = ['string', 1];
//console.log(x[0].substr(1)) ok
//console.log(x[1].substr(1)) error
x[2] = 'new string'; //ok
x[3] = 'new string1'; //ok
x[4] = 12; //ok
//x[5] = false;//error 数组里面的类型只能是定义x里面的类型
console.log(x); //["string", 1, "new string", "new string1", 12]
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //打印的是编号 1
/* 改变枚举编号 */
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
; //可以全部手动赋值编号
var a = Color1.Green;
var colorName = Color[2];
console.log(a); //打印的是索引 2
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var prettySure = 4;
// prettySure.toFixed();//error
var any = [1, true, "free"];
any[1] = 100;
console.log(any);
//void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
var u = undefined;
var n = null;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(msg) {
    while (true) {
    }
}
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length;
console.log(someValue);
/* 定义函数传参类型 */
var printLabel = function (labelledObj) {
    console.log(labelledObj.label);
};
var myObj = { size: 10, label: "Size 10 Object" };
// 定义一个函数 接送的参数里面必须遵守接口中的类型定义
var createSquare = function (config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
