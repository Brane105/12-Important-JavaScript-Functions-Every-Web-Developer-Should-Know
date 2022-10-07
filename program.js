
//1. Shorten the console log
const log = console.log.bind(document)
log("1. shorten -->","console.log")

//2. Merge two arrays into one
const arr1  = ["apple","banana","cherry"]
const arr2  = ["mango","lime","carrot"]

const concatarrr = arr1.concat(arr2)
//printing it 
log("2. merge two arrs -->",concatarrr)

//3.  Merge two objects into one
const user = {
    name : 'Lucifer',
    gender : 'Male'
};
const article = {
    title : 'Java',
    date :'2021-02-12'
};
const mergedObjects = {...user,...article}
log("3. merge objects -->",mergedObjects)

//4. Shorten an array 
const big_arr = ["lucifer","lilith","Asmodeous","Bilial","Belphegor","Satan"]

big_arr.length = 3
log("4. shorten arr-->",big_arr)

//5.Shuffle an array
const sufflearr  = ["apple","banana","cherry","mango","lime","carrot"]
log("5. main arr",sufflearr)
sufflearr.sort(function(){
    return Math.random() - 0.5
})
log("suffle arrays -->",sufflearr)

//6. use isNum to verify a number 

function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
log("6. verify is number  -->")
log(" 1339-->",isNum(1339))
log(" 13.31-->",isNum(13.31))
log(" java-->",isNum("java"))

//7.  Use isStr to verify a string

const isStr = value => typeof value === 'string';
log("7. verify is String  -->")
log(" 1339-->",isStr(1339))
log(" 13.31-->",isStr(13.31))
log(" java-->",isStr("java"))

//8.  Use isStr to verify a string

const isNull = value => value === null || value === undefined;
log("8. verify is Is NULL  -->")
log(" null-->",isNull(null))
log(" -->",isNull())
log(" java-->",isNull("java"))

//9. calculate the performance of the function 
log("8. Pattern Function is used to check performance  -->")
const start = performance.now();
let n = 5; // row or column count
// defining an empty string
let string = "";
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
log(string);

const end = performance.now();
const total = start - end 
log("function takes"+total+"miliseconds")

//10. Remove duplicates from an array

log("10.Remove duplicates from an array   -->")
log(["lucifer","lilith","Asmodeous","Bilial","Belphegor","Satan",
"lucifer","lilith","Asmodeous","Bilial","Belphegor","Satan"])
const arrduplicates = array => [...new Set(array)]
log(arrduplicates(["lucifer","lilith","Asmodeous","Bilial","Belphegor","Satan",
"lucifer","lilith","Belphegor","Satan"]))

//11.  Use logical AND/OR for conditions
log("11.Use logical AND/OR for conditions  -->")
const input = 2 
input === 5 && log("1. it is 5")
input === 5 || log("2. it is 5")

function default1(arg){
arg = arg || 5
log(arg)
}

// 12. Ternary operator

log(" 12. Temperator measuring : Ternary operator is the best one  -->")
function temp(temp){
    return (temp > 39 || temp < 35.5 ) ? 'visit Doctor !'
    : (temp < 37.5 && temp > 36.5 ) ? 'Go out and PLay !'
    : (temp <= 39 || temp >= 35.5 ) ? 'Take some rest !' : ''
}
log("38",temp(38))
log("36",temp(36))
log("39.1",temp(39.1))
log("35.1",temp(35.1))
log("37",temp(37))
