$(document).ready(function() {

    $(".preview__element").hover (function() {
      $(".preview--article").show();
      $(".title__bg h1").css("color", "#1111FF");
    }, function() {
    	$(".preview--article").hide();
      $(".title__bg h1").css("color", "");
    });

});