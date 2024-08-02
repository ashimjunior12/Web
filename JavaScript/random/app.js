const buttons = document.querySelectorAll(".btn")
const input = document.querySelector("#input")
// console.log(buttons);
let string = "";
buttons.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const button = event.target.innerHTML;
        
        if(button == "="){
            string = eval(string);
            input.value = string;
        }
        else if(button == "C" || button == "AC"){
            string = ""
            input.value = string
        }
        else{
            string += button
            input.value = string
        }
        
        
    })
})