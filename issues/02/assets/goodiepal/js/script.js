$(document).ready(function() {

  var waypoint = new Waypoint({
    element: document.getElementById('essay__content'),
    handler: function(direction) {
      $('.goodiepal__aside--expand').toggleClass('goodiepal__aside--full-height');
    }
  });

  $('.goodiepal__aside--button').on('click', function() {
    if($('.goodiepal__aside').hasClass('goodiepal__aside--expand')) {
      $('.goodiepal__aside').removeClass('goodiepal__aside--expand');
      $('.goodiepal__aside').addClass('goodiepal__aside--collapse');

      $('.goodiepal__aside--button').removeClass('goodiepal__aside--button--expand');
      $('.goodiepal__aside--button').addClass('goodiepal__aside--button--collapse');

      $('.goodiepal__aside--button p').html('expand');

    } else if($('.goodiepal__aside').hasClass('goodiepal__aside--collapse')) {
      $('.goodiepal__aside').removeClass('goodiepal__aside--collapse');
      $('.goodiepal__aside').addClass('goodiepal__aside--expand');
      
      $('.goodiepal__aside--button').removeClass('goodiepal__aside--button--collapse goodiepal__aside--full-height');
      $('.goodiepal__aside--button').addClass('goodiepal__aside--button--expand');

      $('.goodiepal__aside--button p').html('collapse');
    }
  });

});