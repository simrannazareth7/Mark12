var angle1 = document.querySelector("#input-1st");
var angle2 = document.querySelector("#input-2nd");
var angle3 = document.querySelector("#input-3rd");

var checkBtn = document.querySelector("#check-btn");

function clickHandler(){

    document.getElementById("result").innerText = "Note : Sum of the angles of sums to 180⁰";
    if(angle1.value === "" || angle2.value === "" || angle3.value === ""){
        document.getElementById("result").innerText = "Fields cannot be empty";
    }

    else if(angle1.value < 0 || angle2.value < 0 ||angle3.value < 0){
        document.getElementById("result").innerText = "Enter Positive values only";
    }
    
    else{
        var result = parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);
        console.log(result);
        if(result === 180){
            console.log("Yes Triangle is possible");
            document.getElementById("result").innerText = "Triangle is Possible ✔ ";
        }
        else
        document.getElementById("result").innerText = "Triangle is not possible ❌ ";
    }

}

checkBtn.addEventListener("click",clickHandler);