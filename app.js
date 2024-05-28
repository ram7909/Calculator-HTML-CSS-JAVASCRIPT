let output = document.querySelector("#output")
let button = document.querySelectorAll('.numbers')
let arrbtn = Array.from(button)
let string  = '';
arrbtn.forEach(btn =>{
    btn.addEventListener('click',(element)=>{
        if(element.target.innerHTML == 'C'){
            string = string.substring(0,string.length-1)
            output.value = string;
        }
        else if(element.target.innerHTML == 'AC'){
            string = '';
            output.value = string;
        }
        else if(element.target.innerHTML == '='){
            string = eval(string)
            output.value = string;
        }
        else{
            string += element.target.innerHTML;
            output.value = string
        }
    })
})







