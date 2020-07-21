/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  // toggle sidebarText
  var sidebarText = document.getElementById("sidebarText");
  if (sidebarText.style.display === "block") {
    sidebarText.style.display = "none";
  } else {
    sidebarText.style.display = "block";
  };
  // hamburger icon animation
  document.getElementById('hamburger').classList.toggle("change");
}
