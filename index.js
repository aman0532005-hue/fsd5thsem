// console.log("hello world ")
// console.log("using js")
// var a = 34;
// console.log("a = " + a)
// if (a > 10) {
//     var a=40;
//     console.log("hi a insidethe block = " + a )
// }
// console.log("hi a outside the block = " + a )

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))

// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(12,30))

// const date=function(msg){
//     return "hello,i am aman"+msg;
// }
// data(" and node")

//iife
// (()=>{
//     console.log("hello i am aman")
// })()

//callback fn
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("hey,your result is " + result + msg  )
// }
// sumWithMsg(sum," and i am aman")

function login(msg,error){
    if(error){
        console.log("error is " + error)
    }else{
        console.log("msg is " + msg)
    }
}
function loginhandler(username,password,callback){
    if(username == "ptomer40" && password == "123"){
        callback(" success",null)
    }else{
        callback(null,"login failed")
    }
}
loginhandler("ptomer0","123",login)