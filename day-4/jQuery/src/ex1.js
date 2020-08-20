const data = $("ul").data()

$("ul").append(`<input id=inp></button>`)
$("ul").append(`<button id=btn>Add Human</button>`)
$("#inp").css("placeholder", "Human Name")
$("#btn").css("display", "inline-block")

$("button").on("click", function(){
    $("ul").append(`<li class=list>${$("#inp").val()}<li/>`)
    $("#inp").val("")
  })

  $("ul").on("click", "li", function(){

    $(this).remove()
})