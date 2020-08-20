const lab = []

$(".generator").on("click", function() {
    console.log($(this).closest(".processor").attr("id"))

    let compID = $(this).closest(".computer").data("id")
    console.log(compID)
    lab.push({cmp_id: compID})

    console.log($(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function() {
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".QR").text())
})