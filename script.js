let output=document.getElementById("op");
function display(num){
    output.value +=num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        output.value="Invalid";
    }
}

function clr(){
    output.value="";
}

function del(){
    if(output.value=="Invalid"){
        output.value="";  
    }
    output.value= output.value.slice(0,-1);
    
}