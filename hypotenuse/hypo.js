var base = document.querySelector("#base");
var height = document.querySelector("#height");


var findBtn = document.querySelector("#find-btn");

function clickHandler(){

    document.getElementById("result").innerHTML = "Note : Base² + Height² = Hypotenuse² <br> A hypotenuse is the longest side of a right-angled triangle";
    if(base.value === "" || height.value === "" ){
        document.getElementById("result").innerText = "Fields cannot be empty";
    }

    else if(base.value < 0 || height.value < 0 ){
        document.getElementById("result").innerText = "Enter Positive values only";
    }
    
    else{
        var result = Math.sqrt(Math.pow(base.value,2)+Math.pow(height.value,2)).toFixed(2);
        console.log(result);
        document.getElementById("result").innerText = "Hypotenuse : " + result;
    }

}

findBtn.addEventListener("click",clickHandler);