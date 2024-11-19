var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#darkmode")

btnDarkMode.addEventListener("click", darkmode)

function darkmode(){
     
     body.classList.toggle("darkMode")

}
