function ConvertToCelsius(){
    const farInput=document.getElementById(" Farenheit");
    const celResult=document.getElementById("result");

    const farValue=parseFloat(farInput.value);
    if(!isNaN(farValue)){
        const celValue=(farValue-32) *(5/9);
        celResult.textContent= `Celsius:${celValue.toFixed(2)}"C`
    }
    else{
        celResult.textContent="Please enter a valid farenheit value"
    }
    
}
function ConvertToFarenheit(){
    const celInput=document.getElementById("celsius");
    const farResult=document.getElementById("result");

    const celValue=parseFloat(celInput.value);
    if(!isNaN(celValue)){
        const farValue=(celValue  * 9/5)+32;
        farResult.textContent= ` Farenheit:${farValue.toFixed(2)}"F`
    }
    else{
        farResult.textContent="Please enter a valid  celsius  value"
    }
    

}