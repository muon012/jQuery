$(document).ready(function(){

    // You can use a duration argument if you wish for these functions;

    $(".blue-box").slideUp(1000); // Hides the element with a sliding up animation;
    $(".blue-box").slideDown(1000); // Displays the element with a sliding down animation;
    // "Blue 2" will show up instantly, because it doesnt have to wait for the slideUp function. It can start from this function;

    // Hiding the paragraphs first and then displaying them as the page loads;
    $("p").hide();
    $("p").slideDown(2000);

    // Slide up the element if it's currently shown, or slide down if it's currently hidden;
    $(".blue-box").slideToggle(1000); 
})