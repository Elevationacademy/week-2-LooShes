//sc1
// $('button').on('click', function () {
//     let relevantInputValue = $(this).closest("div").find("span").text()
//     console.log(relevantInputValue)
// })

//sc2
$("button").on("click", function() {
    let findMe = $(".container").find("p").text()
    console.log(findMe)
})