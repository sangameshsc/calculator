let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
let screenValue = '';
for(a of buttons) {
    a.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log('button text is ',buttonText);
        // if (buttonText == 'X') {
        //     buttonText = '*';
        //     screenValue+=buttonText;
        //     screen.value = screenValue;
        // }
     if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText == '='){
            screen.value=eval(screenValue);
            localStorage.setItem("Ans",screen.value);

        }
        else if(buttonText=='CL')
        {
            var number=screen.value;
            var len=number.length-1;
            var newnumber=number.substring(0,len);
            screen.value=newnumber;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue
        }

    })
    

}

