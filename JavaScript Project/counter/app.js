const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        if(btn.classList.contains("increase")){
            count++;
        }
        else if(btn.classList.contains("decrease")){
            count--;
        }
        else{
            count = 0;
        }

        value.textContent = count;

        if(count>0){
            value.style.color = "green"
        }
        else if(count<0){
            value.style.color = "red";
        }
        else{
            value.style.color="black";
        }
    })
})