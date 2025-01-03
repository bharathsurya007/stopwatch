// function add(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a)+ parseInt(b));
// }
// function sub(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a)- parseInt(b));
// }
// function multy(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a) * parseInt(b));
// }
// function div(){
//     let a =document.getElementsByName("first")[0].value;
//     let b =document.getElementsByName("second")[0].value;
     
//     alert(parseInt(a) / parseInt(b));
// }
function proccess(mode){
    let a =parseInt(document.getElementsByName("first")[0].value);
    let b =parseInt(document.getElementsByName("second")[0].value);
    let result=0;
    if( mode == "add"){
        result=a+b;}
        else if(mode=="sub"){
            result=a-b;
        }else if(mode =="multy"){
            result=a*b;
            
        } else if(mode=="div"){
            result=a / b;
        }
        alert(result);
    
    




}