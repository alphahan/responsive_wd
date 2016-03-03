/**
 * Created by Kadir on 02-03-2016.
 */
$(document).ready(function(){
    $("#menu").click(function(){
        $("#menu_mobile").slideToggle("200");
    });
});

$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});