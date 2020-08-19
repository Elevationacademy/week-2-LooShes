//sc6
// const hovered = function () {
//     $("#box").css("background-color", "blue")
//   }
  
//   $("#box").hover(hovered)

//   //sc9
//   $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`  //use template literals and $(this)
//     $("body").append(divCopy)
//   })
  
  //sc11
//   $("div").hover(function(){
//     $("div").remove()
//   })

  //sc12
$("button").on("click", function(){
    $("#blogs").append("<div class=blog>Great!</div>")
})

$("#blogs").on("click", ".blog", function(){
    $(".blog").text("blargh")
})