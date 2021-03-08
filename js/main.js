var currentPage = 0;

// $('.book')
// .on('click', '.active', nextPage)
// .on('click', '.flipped', prevPage);

// $('.book').hammer().on("swipeleft", nextPage);
// $('.book').hammer().on("swiperight", prevPage);
$(".right_dot").on("click",function(){

    nextPage()


      var lg = $(".page").length
 
        if ($(".page").last().hasClass("flipped")) {

           // $(".page").last().find() 
        }

})
$(".left_dot").on("click",function(){

    prevPage()

    if ($(".page").eq(0).hasClass("active")) {
        
        $(".scene").removeClass("activer")

        $(".book_bottom_button").removeClass("flipped")



         $(".main_fluid").removeClass("shadow")

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
     $(".book_bottom_button").addClass("flipped")
     $(".main_fluid").addClass("shadow")
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