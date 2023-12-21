$(document).ready(function(){
    const nav = $("#navigation");
    const navTop =nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    //Function so the navbar stays on the top of the screen on scroll
    //The function begins once you begin to scroll
    function stickyNavigation(){
        let body = $("body");

        if($(window).scrollTop()>= navTop){
            body.addClass("fixedNav");
        }
        else{
            body.removeClass("fixedNav");
        }
    }
    //Function to filtter the images within the gallery
    //Each image is sorted into a catagorie so when the filter header is chosen only the images within the catagory will show
    $('.work-list-item').click(function(){
        let value = $(this).attr('data-filter');

        if(value === 'all'){
            $('.filter').show(300);
        }
        else{
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });
    $('.work-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

});