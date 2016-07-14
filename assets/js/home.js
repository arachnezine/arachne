$(document).ready(function() {
  
  var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function() {
      $('.nav__info--donation').toggleClass('visible');
    },
    offset: 15
  })

});