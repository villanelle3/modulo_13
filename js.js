$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault();
        $('form').trigger("reset");
    })
});

// mask https://igorescobar.github.io/jQuery-Mask-Plugin/
// validation https://jqueryvalidation.org/