$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();
    //scroll

    function header_bg(){
        var scrollHeight = $(document).scrollTop();
        if(scrollHeight > 80)
            $('.header').addClass('active');
        else
            $('.header').removeClass('active');
    }

    header_bg();
    $(document).scroll(function(){
        header_bg();
    });

    //header submenu
    $('.header-menu').hover(
        function () {
            $('.header').addClass('active');
        },
        function () {
            header_bg();
        }
    );
    //navigation

    $('.burger-btn').click(function(){
        $('.burger-nav').addClass('active');
        $('.header').addClass('active');
        $( "body" ).css( "overflow-y", "hidden" );
    });
    $('.close-btn').click(function(){
        $('.burger-nav').removeClass('active');
        $('.header').removeClass('active');
        $( "body" ).css( "overflow-y", "auto" );
    });

    $('.down').click(function(){
        $(this).closest('.menu_item').addClass('active');
        $(this).closest('.menu_item').find('.menu_sub').slideDown(400);
    });
    $('.up').click(function(){
        $(this).closest('.menu_item').removeClass('active');
        $(this).closest('.menu_item').find('.menu_sub').slideUp(400);
    });

    //accordion

    $('.mb-0').click(function(){
        $(this).closest('.card').toggleClass('active').siblings().removeClass('active');
    });

    $('.mb-0.collapsed').click(function(){
        $(this).closest('.card').removeClass('active');
        return false;
    });
});