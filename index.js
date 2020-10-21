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
