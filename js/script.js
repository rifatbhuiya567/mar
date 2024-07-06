(function() {
    "use-strict";

    // Window Scroll
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 80) {
            $(".main-header").addClass("shrink-header")
        }else{
            $(".main-header").removeClass("shrink-header")
        }
    
        if( scrolling > 200){
            $(".btt i").fadeIn(500);
        }
        else{
            $(".btt i").fadeOut(500);
        }
    });

    // Window Load
    $(window).load(function(){
        $(".btt i").hide();
    });
      
    // On Click BTT
    $(".btt i").click(function(){
        $("html, body").animate({
            scrollTop:0
        },500)
    });

    // Dropdown menu
    $(".dropdown-menu-btn").on("click", function () {
        $(".dropdown-menu-items").toggle(500);
        $(".dropdown-menu-btn").toggleClass("dropdown-arrow");
    });
})(jQuery);