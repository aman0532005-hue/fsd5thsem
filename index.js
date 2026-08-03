
// // console.log("hello ");
// // console.log("using js");
// // let a=34;
// // console.log("a="+a)
// // if(a>10){
// //    let a=40;
// //     console.log("hi a inside the block:"+a);
// // }
// // // console.log("hey... a is now outside"+a)
// // function sum(a,b){
// //     return a+b;
// // }
// // console.log(sum(230,30))
// // const sum=(a,b)=>{return a+b};
// // console.log(sum(12,30));

//  //   const data=function(msg){
// //     return "Hello ,i am js"+msg
// // }
// // data("and node")
// //IIFE
// //(()=>{console.log("Hi.. using and calling by IIFE")})();


// // callback
// // function sum(a,b){
// //     return a+b;
// // }
// // function sumWithMsg(clbk,msg){
// //     const result=clbk(2,6);
// //     console.log("Hey, your result ="+result+"!! Well Done "+msg)
// // }
// // sumWithMsg(sum,"Alok")
// // function login(msg,error){
// //     if(error){
// //      console.log("Error is "+error)
// //     }
// //     else{
// //         console.log(msg)
// //     }
// // }
// //  function loginHandler(username,password,clbk){
// //     if(username=="ptomer40"&& password=="12345"){
// //         clbk("success",null);
// //     }else{
// //         clbk(null,"username or password is incorrect ")
// //     }
// //  }
// //  loginHandler("ptomer40","12345",login)
// // console.log("one")
// // for(i=1;i<100 ;i++){
// //     console.log("Two")
// // }

// // console.log("Three")
// // // console.log("One")
// // // setTimeout(()=>{
// // //     console.log("Two")
// // // },1000)
// // // console.log("Three")      
// // setTimeout(()=>{
// //     console.log("One")
// //     setTimeout(()=>{
// //         console.log("Two")
// //         setTimeout(()=>{
// //             console.log("Three")
// //             setTimeout(()=>{
// //                 console.log("Four")
// //                 setTimeout(()=>{
// //                     console.log("Five")
// //                     setTimeout(()=>{
// //                     console.log("six")
// //                        setTimeout(()=>{
// //                        console.log("seven")
// //                             setTimeout(()=>{
// //                             console.log("eight")
// //                                     setTimeout(()=>{
// //                                      console.log("nine")
// //                              },1000)
// //                          },1000)
// //                       },1000)
// //                    },1000)
// //                 },1000)
// //             },1000)
// //         },1000)
// //     },1000)
// // },1000)
// const Mypromise = new Promise((resolve, reject) => {
//     const username = "aloksingh055";
//     const password = "123456";

//     if (username === "aloksingh055" && password === "123456") {
//         resolve("Login Success");
//     } else {
//         reject("Username or password are incorrect");
//     }
// });

// const orderrecive = new Promise((resolve, reject) => {
//     const username = "aloksingh055";
//     const password = "123456";

//     if (username === "aloksingh055" && password === "123456") {
//         resolve("Order accepted");
//     } else {
//         reject("Order declined");
//     }
// });

// // const Mypromise=new Promise((resolve,reject)=>{
// //     const num =12;
    
// //     if(num%2==0 ){
// //         resolve("succes");

// //     }else{
// //         reject("failed ")
// //     }
// // })




// // Mypromise.then((msg)=>{
// //     console.log(msg)
// // }).catch((msg)=>{
// //     console.log(msg)
// // }).finally(()=>{
// //     console.log("All done")
// // })
// async function handledata() {
//     try {
//         const msg = await Mypromise;
//         console.log(msg);

//         if (msg === "Login Success") {
//             const ms = await orderrecive;
//             setTimeout(() => {
//                 console.log(ms);
//             }, 1000);
//         }
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("All done");
//     }
// }

// handledata();

// function orderreciveFunction() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promise resolved");
//         }, 1000);
//     });
// }

// async function orderhandeler() {
//     try {
//         const status = await orderreciveFunction();
//         console.log(status);
//     } catch (err) {
//         console.log(err);
//     }
// }

// orderreciveFunction()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Finally Done");
//     });
// fetch data from API

const button=document.getElementById('fetchData')
const container=document.getElementById('container')

console.log(button)
async function fetchData(){
    const serverData= await fetch('https://fakestoreapi.com/products')
    const jsondata= await serverData.json()
    console.log(jsondata)
    container.innerHTML= JSON.stringify(`${jsondata}`)
}
button.addEventListener('click', fetchData)