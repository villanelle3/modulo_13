$(document).ready(function(){
    $(window).resize(function(){
        var width = $(window).width();
        if(width <= 959 && width >= 768 ){
            $('.item').removeClass('col-md-4').addClass('col-md-6');
        }
        else{
            $('.item').removeClass('col-md-6').addClass('col-md-4');
        }
    })
});

// mask https://igorescobar.github.io/jQuery-Mask-Plugin/
// validation https://jqueryvalidation.org/