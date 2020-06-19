function myFunction(x) {
    if (x.matches) { // si responsive
     MeRemove();
    } else {
      MeAdd();
    }
  }
  var element = document.getElementById("myDIV");
  var Obj = document.getElementById("myToggle");
  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


  function MeRemove() {
    element.classList.remove("navbar-expand-lg");
    element.classList.remove("navbar-light");
    element.classList.remove("navbar");
    Obj.classList.remove("navbar-toggler");
  }

  function MeAdd() {
    element.classList.add("navbar-expand-lg");
    element.classList.add("navbar-light");
    element.classList.add("navbar");
    Obj.classList.add("navbar-toggler");
  }
