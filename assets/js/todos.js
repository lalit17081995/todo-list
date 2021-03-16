function init(){
    $("input").hide();
}

init();
$("ul").on("click","span",function () {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("input[type='text']").on("keypress",function(event){
    if(event.which===13){
        let todoText=$(this).val();
        $(this).val("");
        // create a new li using append method
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText+"</li>")
    }
})

$(".ico").on("click",function(){
    $("input").slideToggle("slow","swing");
})