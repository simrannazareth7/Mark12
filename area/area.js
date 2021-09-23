var baseInput = document.querySelector("#input-base");
var heightInput = document.querySelector("#input-height");
var calcBtn = document.querySelector("#calc-btn");

function clickHandler(){

    document.getElementById("result").innerText = "Area of triangle = 1/2 * Base * Height";
    if(baseInput.value === "" || heightInput.value === ""){
        document.getElementById("result").innerText = "Fields cannot be empty";
    }

    else if(baseInput.value < 0 || heightInput.value < 0){
        document.getElementById("result").innerText = "Enter Positive values only";
    }
    
    else{
        var result = 0.5 * baseInput.value * heightInput.value;
        console.log("area : "+result);
        document.getElementById("result").innerText = "Area of this triangle is "+result;
    }

}

calcBtn.addEventListener("click",clickHandler);