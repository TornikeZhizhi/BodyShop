var currentPage = 0;

// $('.book')
// .on('click', '.active', nextPage)
// .on('click', '.flipped', prevPage);

// $('.book').hammer().on("swipeleft", nextPage);
// $('.book').hammer().on("swiperight", prevPage);
$(".right_dot").on("click",function(){

    nextPage()

    // $(".scene").addClass("activer")
      var lg = $(".page").length
 
        if ($(".page").last().hasClass("flipped")) {

          setTimeout(function(){

            $(".book_bottom_button").removeClass("flipped2")
            $(".main_fluid").removeClass("shadow")
            $(".book_outsite_text_last").addClass("shadow")
          },500)
          
           // $(".page").last().find() 
        }

})
$(".left_dot").on("click",function(){

    prevPage()
   


    if ($(".page").eq(0).hasClass("active")) {
        
        $(".scene").removeClass("activer")

        $(".book_bottom_button").removeClass("flipped2")
    
        
           setTimeout(function(){
                        $(".main_fluid").removeClass("shadow")
               },350)
           setTimeout(function(){

             $(".book_outsite_text").fadeIn(500);
            },1000)

    }else {

        $(".book_outsite_text_last").removeClass("shadow")
          setTimeout(function(){

            $(".main_fluid").addClass("shadow")
         },300)
    }


})

$(".book_outsite_text .book_link").on("click",function(e){
 
    e.preventDefault()
    nextPage()
    $(".book_outsite_text").fadeOut(0);
    $(".scene").addClass("activer")


    setTimeout(function(){
     $(".book_bottom_button").addClass("flipped2")
     $(".main_fluid").addClass("shadow")
},700)


})


$(".book_outsite_text_last .book_link").on("click",function(e){

    e.preventDefault()
   
    $(".book_bottom_button").removeClass("flipped2")
    var pageLength = 18;
      var k =  setInterval(function(){
        $(".main_fluid").removeClass("shadow")
        $(".scene").removeClass("activer")
        $(".book_outsite_text_last").removeClass("shadow")
           
       
        prevPage()
            pageLength--;

        if (pageLength == 0) {
            
            clearInterval(k)
        }
            
        },100)

       setTimeout(function(){
             $(".book_outsite_text").fadeIn(500);
             },1000)

     

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

$(".content_list li").click(function(){

  var x = 0;
  var dataid = $(this).attr("data-id")
    var kk = setInterval(function(){
      nextPage()
      x++;
      if (x == dataid) {
        clearInterval(kk)
      }
    },100)
})

 // $(".scene").mouseenter(function(){

 //  // alert("s")
 //   // $(this).find(".front").addClass("zindex")

 //   $(".page.active .back").hide()
 //   $(".page").hide()
 //   $(".page.active").show()
 //   $(".page.flipped").show()

 // })

 // $(".scene").mouseleave(function(){

 //  // alert("s")
 //   // $(this).find(".front").addClass("zindex")
 //    $(".page").show()
 //   $(".page.active").show()
 //   $(".back").show()

 // })