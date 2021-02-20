"use strict";



function playAudio() {
    let music = document.querySelector("#audi");
    music.play();
 
}


document.querySelector("#email").addEventListener("blur", checkMail)


function checkMail()
{
    let emailInput = document.querySelector("#email").value
        if (emailInput=="")
        {
            sayLoudly("no email")
            // is required. Please press shift + tab, type in you email and press enter, then tab."
        }
        else 
        {
            sayLoudly(`yes email `)
            // typed in the following email: ${emailInput}. If you want to change
            // the email, press shift + tab, and type in the new email. To continue press enter and type in your password
        }
}
document.querySelector("#password").addEventListener("blur", checkPass)


function checkPass()
{
    let passInput = document.querySelector("#password").value
        if (passInput=="")
        {
            sayLoudly("no password")
            // s required. Please press shift + tab, type in you password and press enter, then tab.
        }
        // else 
        // {
        //     sayLoudly(`You typed in the following email: ${emailInput}. If you want to change
        //     the email, press shift + tab, and type in the new email. To continue press enter and type in your password`)
        // }
}

function logIn ()
{
    let passInput = document.querySelector("#password").value
    let emailInput = document.querySelector("#email").value

    if (passInput !== "" && emailInput !=="")
    {
        sayLoudly("Press enter to log in.")
    }

    else
    {
        checkMail().then(checkPass()) 
    }
}


function sayLoudly(message)
{
   
  responsiveVoice.speak(message)
  
}


