// function sayhello(){
//     console.log("hello frind");

// }
// let success = (message) => {  
//        console.log(message); }; 
//  let failure = (message) => {  
//        console.log(message); }; 
//    let startMessaging = (fun1, func2) => {     
//     fun1("Success"); };  
//    startMessaging(success, failure);
let currentBall=1;
let success=(message)=>{
   console.log("start the over")
};
while(currentBall<=6)
{
    console.log("start bowling" );
try{
    console.log("hit the ball:",currentBall);

   }catch(e){
    console.log("caught!!")
   }finally{
    currentBall++;
   }
}

function failure(message) {
 
    console.log("end the over"); 
}

let over =(fun1,fun2)=>{
    fun1("susses");
};
over(success,failure);