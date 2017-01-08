/* Function swiper */
var swiper = new Swiper('.swiper-container', {
        pagination: 'none',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
});


/* Change color of the heart */
$('#heart').click(function(){
    if($(this).hasClass('social-network')){
        $(this).removeClass('social-network');
        $(this).attr('src', 'IMG/Icones/heart1.png');
    } else {
        $(this).addClass('social-network');
        $(this).attr('src', 'IMG/Icones/heart.png');
    }
});


/* Choose color shoes */
$(document).ready(function(){
        $('#img').click(function(){
                $('#big-shoes').attr('src','IMG/Shoes-choose1.png');
                $('#shoes-change').attr('src','IMG/Shoes-choose1.png');
            });
});

$(document).ready(function(){
        $('#img1').click(function(){
                $('#big-shoes').attr('src','IMG/Shoes-choose.png');
                $('#shoes-change').attr('src','IMG/Shoes-choose.png');
            });
});


/* Input search */
$(document).ready(function(){
		$("#search").click(function(){
			$("#search").html("<input type='text' placeholder='Search'/>").css("transition", "0.9s");
		});
});

$(document).ready(function(){
    $('#glass').click(function(){
        $('#search').html("<a href='#'>SEARCH</a>");
    })
})



/* Box position */
jQuery(function($) {
  function fixDiv() {
      
    var $cache = $('#box');
      
    if ($(window).scrollTop() < 560){
        
        $cache.fadeOut().css({
        'position': 'absolute',    
        });

    }
    
    else if ($(window).scrollTop() > 560 && $(window).scrollTop() < 1359){
        $cache.fadeIn().css({
        'position': 'fixed',
        'right': '93px', 
        });

    }
    else{
        
        $cache.css({
        'position': 'absolute',
        'right': '48px',
        });
  }}
    
  $(window).scroll(fixDiv);
  fixDiv();
});

