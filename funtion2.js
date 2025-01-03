// function add(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a)+  parseInt(b));
    
// }
// function sub(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a) -  parseInt(b));
    
// }
// function multy(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a) *  parseInt(b));
    
// }
// function div(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a) /  parseInt(b));
    
// }
function proccess(mood){
    let a =parseInt(document.getElementsByName("first")[0].value);
    let b =parseInt(document.getElementsByName("second")[0].value);
    let result=0;
if(mood=="add"){
    result=a+b;
}else if(mood == "sub"){
    result=a-b;
}else if( mood =="multy"){
    result=a*b;
}else if(mood =="div"){
    result=a/b;
}
alert(result);
}

