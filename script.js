



function display(value){
    document.getElementById("result").value += value
}

function calculate(){
    document.getElementById("result").value = eval(document.getElementById("result").value)
}

function clearScreen(){
    document.getElementById("result").value = ""
}

function clearRecent(){
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p.substr(0, p.length-1)
    
}