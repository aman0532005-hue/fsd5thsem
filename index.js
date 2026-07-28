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

// function login(msg,error){
//     if(error){
//         console.log("error is " + error)
//     }else{
//         console.log("msg is " + msg)
//     }
// }
// function loginhandler(username,password,callback){
//     if(username == "ptomer40" && password == "123"){
//         callback(" success",null)
//     }else{
//         callback(null,"login failed")
//     }
// }
// loginhandler("ptomer0","123",login)



// console.log("one")
// // for(i=1;i<=1000;i++){
// setTimeout(() => {
//     console.log("two")
    
// },100);

// console.log("three")



// setTimeout(() => {
//     console.log("one")
//     setTimeout(() => {
//         console.log("two")
//         setTimeout(() => {
//             console.log("three")
//             setTimeout(() => {
//                 console.log("four")
//                 setTimeout(() => {
//                     console.log("five")
//                     setTimeout(() => {
//                         console.log("six")
//                     }, 100);
//                 }, 100);
//             }, 100);
//         }, 100);
// }, 100);

// }, 100);
    const Mypromise=new Promise((resolve,reject)=>{
    const username="aloksingh055";
    const password="123456";
    if(username=="aloksingh055" && password=="123456"){
        resolve("Logine Success");

    }else{
        reject("username or password are incorrect ")
    }
})
const Mypromis=new Promise((resolve,reject)=>{
    const usernam="aloksingh055";
    const passwor="123456";
    if(usernam=="aloksingh055" && passwor=="123456"){
        resolve("order accept");

    }else{
        reject("order decline ")
    }
})

// const Mypromise=new Promise((resolve,reject)=>{
//     const num =12;
    
//     if(num%2==0 ){
//         resolve("succes");

//     }else{
//         reject("failed ")
//     }
// })




// Mypromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All done")
// })
async function handledata(){
    try{ 
      console.log("data")
      const msg= await Mypromise;
       console.log(msg)
       if (msg === "Logine Success") {
            const ms = await Mypromis;
            console.log(ms);
        }

    }catch(err){
        console.log(err)
    }
    finally{
        console.log("All done")
    }
}
handledata();