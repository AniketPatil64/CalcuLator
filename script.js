
function Calculator(val){
    document.getElementById("inp").value += val    
}


function ClearAll(){
    document.getElementById("inp").value = "";
}

function Answer(){
    let simplyfy = document.getElementById("inp").value;
    let res = eval(simplyfy);
    document.getElementById("inp").value = res
}