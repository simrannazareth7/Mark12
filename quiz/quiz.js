const quizForm = document.forms[0];
const questionBlocks = document.querySelectorAll(".question");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

const correctAns = ["a" , "c", "b", "a","b","b"];

var score = 0;

quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    var data = new FormData(quizForm);
    
    var index=0;
    for(let element of data){

        console.log(element);
       if(element[1] == correctAns[index]){
            questionBlocks[index].style.background = "linear-gradient(to bottom right, #4eb84c, #685cf0)";
            score++;
       }
       else{
        questionBlocks[index].style.background = "linear-gradient(to bottom right, #ff2b2b, #685cf0)";
       }
        index++;
    }

    console.log(score);
    document.getElementById("result").innerText = "Your Score is "+score;
    // submitBtn.style.visibility = "hidden";
    document.querySelector(".submit-btn-div").style.display = "none";

});

resetBtn.addEventListener("click", ()=>{
    document.getElementById("formQuiz").reset();
    document.querySelector(".submit-btn-div").style.display = "inline-block";
    score=0;
    for(var i=0;i<questionBlocks.length;i++)
    {
        questionBlocks[i].style.background = "#141414";
    }
  
    document.getElementById("result").innerText = "Note : Your Score will be displayed here";
   
});