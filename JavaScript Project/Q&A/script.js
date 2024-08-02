let btns = document.querySelectorAll(".question-btn");
let questions = document.querySelectorAll(".question")

btns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        let show = event.currentTarget.parentElement.parentElement;
        show.classList.toggle("show-text");
    })
})