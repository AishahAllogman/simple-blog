var listitems = document.getElementsByClassName("card");
console.log(listitems);
for (var x = 0; x < listitems.length; x++) {
  listitems[x].onmouseover = function () {
    console.log(this);
    this.style.background = "#9fa393";
  };
  listitems[x].onmouseout = function () {
    this.style.background = "white";
  };
}
