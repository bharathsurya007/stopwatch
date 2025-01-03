let todoList = [];

function getList(){
    console.log("TODO LIST :" ,todoList);
    document.getElementsByName("todoList")[0].value= todoList.join();
    return todoList();
}

function additeam(iteam){
    todoList.push(iteam);
    console.log("iteam add :",todoList);
    getList();
}
function getItem(iteam)
{
    let index =todoList.indexOf(iteam);
    if(index === -1) {  
        return 'not found';
}else{
    return todoList[index];
}
}
