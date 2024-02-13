$(document).ready(function () {
    $(".letter").on("click",()=>{
        $(".letter").removeClass('idle').addClass('read');
        setTimeout(()=>{
            $(".letter").css('z-index', 10);
        },4700)
    });
});