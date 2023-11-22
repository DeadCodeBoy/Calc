let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.button'));
display.innerText = 0;

buttons.map((button) => {
    button.addEventListener('click',(event)=>{
        switch(event.target.innerText)
        { case"C":
            display.innerText = '0';
            break;
          case"=":
            display.innerText = eval(display.innerText);
            break;  
          default:
                if (display.innerText ==="0")
                {
                    display.innerText = event.target.innerText;
                }
                else
                {
                    display.innerText += event.target.innerText;
                }
        }
    });
});

