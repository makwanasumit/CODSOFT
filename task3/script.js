let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        console.log(e.target)

        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('.input').innerHTML = string
            return
        }
        if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('.input').innerHTML = string
            return
        }

        if(e.target.innerHTML == '+/-'){
            string = string * -1
            document.querySelector('.input').innerHTML = string
            return
        }

        string = string + e.target.innerHTML;
        console.log(string)
        document.querySelector('.input').innerHTML = string
    })
})

 = string;
