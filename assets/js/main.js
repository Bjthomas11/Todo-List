// check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        // grabbing new text from input
        const todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append(`<li><span>X</span> ${todoText}</li>`);
    }
});
