let string = "";
btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector(".input").value = string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector(".input").value = string;
        }
    })
});