const menuIcon = document.querySelector(".hamburger-menu")
const navBar = document.querySelector(".navbar")
menuIcon.addEventListener("click", ()=> {
 navBar.classList.toggle("change");
})

$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});

