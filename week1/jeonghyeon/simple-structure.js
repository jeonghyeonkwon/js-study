const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " : ---------------------");

// 정수
line("정수");
let strNum = "1.1";

log("strNum type : ", typeof strNum);

let parseNum = parseInt(strNum);
log("parseInt 사용 : ", typeof parseNum);
log("parseInt 값 : ", parseNum);

let numberNum = Number(strNum);
log("Number 사용 : ", typeof numberNum);
log("Number 값 : ", numberNum);

let year = "2023년도 04월";

let parseYear = parseInt(year);
log("parseInt 사용 : ", typeof parseYear);
log("parseInt 값 : ", parseYear);

let numberYear = Number(year);
log("Number 사용 : ", typeof numberYear);
log("Number 값 : ", numberYear);

let year2 = "제 2023년도 04월";
let parseYear2 = parseInt(year2);
log("parseInt 사용 : ", typeof parseYear2);
log("parseInt 값 : ", parseYear2);

// 실수
line("실수");
let strDouble = "1.1";

log("strDouble type : ", typeof strDouble);
log("strDouble value : ", strDouble);

let parseDouble = parseFloat(strDouble);

log("parseFloat 사용 type : ", typeof parseDouble);
log("parseFloat 사용 value : ", parseDouble);

let temperature = "0.3도";

let parseTem = parseFloat(temperature);

log("parseFloat 사용 : ", typeof parseTem);
log("parseFloat 값 : ", parseTem);

// 문자열
line("문자열");
let number1 = 1;

log("num", typeof number1);

let strNumber1 = String(number1);

log("string 변환", typeof strNumber1);

// 논리
line("논리");
const boolLog = (tag, value) => log(tag, Boolean(value));

boolLog("1", 1);
boolLog("0", 0);
boolLog("true", true);
boolLog("false", false);
boolLog("문자열 값 있을 떄", "abc");
boolLog("문자열 값 없을 떄", "");
boolLog("undefined", undefined);
boolLog("null", null);
