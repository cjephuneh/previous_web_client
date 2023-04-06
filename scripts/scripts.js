(function (o, c) {
    var n = c.documentElement;
    var t = " w-mod-";
    n.className += t + "js";
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
  })(window, document);

// to display pages 
const navbarMenuDropdown = document.querySelector('.navbar-menu-dropdown');
const navbarDropdownList = navbarMenuDropdown.querySelector('.navbar-dropdown-list');

navbarMenuDropdown.addEventListener('click', function() {
navbarMenuDropdown.classList.toggle('navbar-menu-dropdown--active');
});
  