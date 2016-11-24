$(document).ready(function() {

  var waypoint = new Waypoint({
    element: document.getElementById('essay__content'),
    handler: function(direction) {
    $('.goodiepal__aside--button').on('click', function() {
      if($('.goodiepal__aside').hasClass('goodiepal__aside--top')) {
        $('.goodiepal__aside--expand').removeClass('goodiepal__aside--full-height');
      }
    });
    },
    offset: function() {
      return this.element.clientHeight
    }
  });

  var waypoint = new Waypoint({
    element: document.getElementById('essay__content'),
    handler: function(direction) {
      if (direction == 'down') {
        $('.goodiepal__aside--expand').addClass('goodiepal__aside--full-height');
      } else {
        $('.goodiepal__aside--expand').removeClass('goodiepal__aside--full-height');
        
        $('.goodiepal__aside--button').on('click', function() {
          $('.goodiepal__aside--expand').removeClass('goodiepal__aside--full-height');
        });
      }
    }
  });

  $('.goodiepal__aside--button').on('click', function() {
    if($('.goodiepal__aside').hasClass('goodiepal__aside--expand')) {
      $('.goodiepal__aside').removeClass('goodiepal__aside--expand goodiepal__aside--full-height');
      $('.goodiepal__aside').addClass('goodiepal__aside--collapse');

      $('.goodiepal__aside__wrapper').removeClass('goodiepal__aside__wrapper--expand');
      $('.goodiepal__aside__wrapper').addClass('goodiepal__aside__wrapper--collapse');

      $('.goodiepal__aside--button p').html('expand');
    } else if($('.goodiepal__aside').hasClass('goodiepal__aside--collapse')) {
      $('.goodiepal__aside').removeClass('goodiepal__aside--collapse');
      $('.goodiepal__aside').addClass('goodiepal__aside--expand goodiepal__aside--full-height');

      $('.goodiepal__aside__wrapper').removeClass('goodiepal__aside__wrapper--collapse');
      $('.goodiepal__aside__wrapper').addClass('goodiepal__aside__wrapper--expand');
      
      $('.goodiepal__aside--button p').html('collapse');
    }
  });

});