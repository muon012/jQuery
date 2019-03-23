$(document).ready(function(){

    // Comment all the lines EXCEPT the one you want to learn about to see its effect; You can use duration as an argument, or not.

    $(".blue-box").hide(1000); // This completely removes the element space on the web page but the element is still on the html;
    $(".blue-box").show(1000); // This changes the style from display: none, to display: block;

    $(".blue-box").toggle(3000); 
    // This shows all elements that are hidden, and hide all elements that are shown;
    // This function is useful for showing menu/descrition options when the user hovers over an item.

})