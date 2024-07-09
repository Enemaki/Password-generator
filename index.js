const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function getValue() {
    // Get the input element
    let input = document.getElementById("myinput")
  
    // Get the value of the input
    let value = input.value

    if (value > 20) {
        document.getElementById("caution").textContent = "The password length cannot be more than 20 characters"
    } else {
        // Display the value
        document.getElementById("caution").textContent = ""
        return value
        // or you can use alert(value) to display it in an alert box
    }
}


function randomPassword() {
    let passwordLength = getValue()
    let randomGenerated = ""
    for (i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        randomGenerated += characters[randomNumber]
    }
    return randomGenerated    
}

function generate() {
    let generated1 = randomPassword()
    let generated2 = randomPassword()
    password1.textContent = generated1
    password2.textContent = generated2
}