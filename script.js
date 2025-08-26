let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let passbox = document.getElementById("passbox");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon")



///password length
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
    slidervalue.textContent = inputslider.value;
})

let = uppchars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let = lowchars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*"
// button click
genbtn.addEventListener("click", () => {
    passbox.value = generatePassword();
})

// function to generate password
function generatePassword() {
    let genpass = "";
    let allchars = "";

    allchars += lowercase.checked ? lowchars : "";
    allchars += uppercase.checked ? uppchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbols.checked ? allsymbols : "";

    if (allchars == "" || allchars.length == 0) {
        return genpass;
    }

    let i = 1;
    while (i <= inputslider.value) {
        genpass += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
    return genpass;
}

copyicon.addEventListener("click", () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "password copied";

        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 2000);
    };

});


