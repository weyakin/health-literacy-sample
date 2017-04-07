$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger a, #nav-mobile a.closenav").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
    $('#nav-trigger a').click(function () {
        $('#mobile-menu-reader').html($('#mobile-menu-reader').html() == 'Open (Tap to Close)' ? 'Closed (Tap to Open)' : 'Open (Tap to Close)');
    });
});