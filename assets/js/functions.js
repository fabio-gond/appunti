
// On document loaded..
document.addEventListener("DOMContentLoaded", function(event) { 
  
  /* 
    | Add event listener to the sections that should be opened on the click
  */
  var sections = document.querySelectorAll(".js-extend");
  sections.forEach(function(section){
    section.addEventListener("click",function(){
      var label=this.getAttribute("data-extend");
      document.querySelector("[data-extend=" + label + "-sec]")
        .classList.toggle("invisible");
    });
  });
  
});