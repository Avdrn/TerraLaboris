// function 


var chooseFile = document.getElementById("chooseFile")
var chooseFileInput = document.getElementById("noFile")
var chooseFileName = document.getElementById("fileName")

chooseFile.addEventListener('change', ()=> {
  chooseFileInput.innerHTML = chooseFile.value
  chooseFileName.innerHTML = "Uploaded"
  chooseFileName.setAttribute("background", "#4ca6f9")
})






