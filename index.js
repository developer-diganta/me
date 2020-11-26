var trigger=false;

$(".select").click(function (){
  if(trigger==false){
    $(".cont").fadeIn(function(){
      $(".select").removeClass("fa fa-chevron-circle-down").addClass("fa fa-chevron-circle-up");
    }).css("display","block");
    trigger=true;
  }
  else{
    $(".cont").fadeOut(function(){
      $(".select").removeClass("fa fa-chevron-circle-up").addClass("fa fa-chevron-circle-down");
    });
    trigger=false;
  }
});

$('.first').one('inview', function (event, visible) {
    if (visible == true) {
      alert("hi");//Enjoy !
    }
});

// $('.first').onScrolledTo(0, function() {
//     alert('you have scrolled to the h1!');
// });
//
// $('.first').on('inview', function (event, visible) {
//   if (visible == true) {
//     console.log("new");
//     $(".first").fadeIn(500);
//   } else {
//     $(".first").fadeOut(500);
//   }
// });

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

if ($('.first').isInViewport()) {
  $(".first").css('opacity', '0').fadeTo(2000,1);}
else{
  $(".first").css('opacity', '1');
}

// $(window).on('resize scroll', function() {
//     if ($('#title').isInViewport()) {
//       $(".first").css('opacity', '0').fadeTo('slow', 1);  //alert("hi");// do something
//     } else {
//         // do something else
//     }
// });
