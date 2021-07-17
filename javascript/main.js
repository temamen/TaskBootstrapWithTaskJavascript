
// Side Navbar
function openNav(){
    document.getElementById("mySidebar").style.width="250px";
    document.getElementById("main").style.marginLeft="250px";

}
function closeNav(){
    document.getElementById("mySidebar").style.width="0";
    document.getElementById("main").style.marginLeft="0";

}
// ----------------------------------------------------------------
//  Script DarkMode 
// ----------------------------------------------------------------

     var icon=document.getElementById("iconMS");
     icon.onclick=function(){
       document.body.classList.toggle("darkThem");
      //  document.body.style.transition="all ease 1s";
       if (document.body.classList.contains("darkThem")){
         icon.src="images/sun.png";
       }else
       {
        icon.src="images/moon.png";
       }
     }