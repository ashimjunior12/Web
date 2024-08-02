const btn = document.querySelector(".btn")
const colorCode = document.querySelector(".color-code")
let code = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
btn.addEventListener("click", function(){
    let hex = '#';
    for(let i=0;i<6;i++){
        hex += code[generateRandom()];
        document.body.style.backgroundColor = hex;
        colorCode.textContent = hex;
        colorCode.style.color = "lightblue";
    }    
    function generateRandom(){
        return Math.floor(Math.random()*code.length)
    }
    console.log(hex);
})