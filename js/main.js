var currentPage = 0;

// $('.book')
// .on('click', '.active', nextPage)
// .on('click', '.flipped', prevPage);

// $('.book').hammer().on("swipeleft", nextPage);
// $('.book').hammer().on("swiperight", prevPage);
$(".right_dot").on("click",function(){

    nextPage()


      var lg = $(".page").length
    console.log(lg)

        if ($(".page").last().hasClass("flipped")) {

        
        }

})
$(".left_dot").on("click",function(){

    prevPage()

    if ($(".page").eq(0).hasClass("active")) {
        
        $(".scene").removeClass("activer")

        $(".left_dot").removeClass("flipped")
         $(".right_dot").removeClass("flipped")

           setTimeout(function(){
             $(".book_outsite_text").fadeIn(500);
             },1000)

    }


})

$(".book_link").on("click",function(e){
    e.preventDefault()
    nextPage()
    $(".book_outsite_text").fadeOut(0);
    $(".scene").addClass("activer")


    setTimeout(function(){
     $(".left_dot").addClass("flipped")
    $(".right_dot").addClass("flipped")
},700)


})




function prevPage() {
  
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
    
    
}