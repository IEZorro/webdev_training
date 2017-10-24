//Check off Todos by clicking
$('ul').on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Just using li won't work as we just created it. Use ul
$("ul").on("click", "span", function(event){
  fadeToDo($(this));
  //will stop all parents from executing
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val('');
  }
})

function fadeToDo(e){
  //gives us the encapsulating tag and uses it to remove li
  e.parent().fadeOut(500, function(){
    $(this).remove();
  });
}

$(".fa-plus-square").click(function() {
  $("input[type='text']").fadeToggle();
});
