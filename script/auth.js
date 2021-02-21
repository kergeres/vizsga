"use strict";



function playAudo() {
    let music = document.querySelector("#audi");
    // music.play();
 
}

document.querySelector("#email").addEventListener("blur", checkMail)

function checkMail()
{
    let emailInput = document.querySelector("#email").value
        if (emailInput=="")
        {
            sayLoudly("Email required")
            // is required. Please press shift + tab, type in you email and press enter, then tab."
        }
        else 
        {
            sayLoudly(`email Ok.`)
            // typed in the following email: ${emailInput}. If you want to change
            // the email, press shift + tab, and type in the new email. To continue press enter and type in your password
        }
}
// document.querySelector("#password").addEventListener("blur", checkPass)


function checkPass()
{
    let passInput = document.querySelector("#password").value
        if (passInput=="")
        {
            sayLoudly("password required")
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


function appendSignUp() 

{

    let htmlTemplate = "";
     htmlTemplate = `<h1 onchange="sayLoudly('Sign up')" tabindex="1" class="title">Sign Up</h1>
    <div class="auth-content-container">
    
        <label for="email">Email</label>
        <input autocomplete="email" onfocus="sayLoudly('Type email.')" tabindex="1" id="email">
    
        <label  for="password">Password</label>
        <input autocomplete="new-password" type="password" onfocus="sayLoudly('Type password.')"  tabindex="1" id="password">
    
        <label  for="password">Repeat Password</label>
        <input autocomplete="new-password" type="password" onfocus="sayLoudly('Repeat password.')"  tabindex="1" id="password">
    
        <button tabindex="1" onclick="logIn()"  id="login" type="submit">Log in</button>`;

        document.querySelector(".content-container").innerHTML = htmlTemplate;


}