const display = document.getElementById ('display');

function appendToDisplay(chafiha){
    display.value += chafiha ;
}

function clearDisplay (){
    display.value='';
}

function calculater(){
    try {display.value= eval(display.value);
        
    } catch (error) {
        display.value='error'
    }
    
}