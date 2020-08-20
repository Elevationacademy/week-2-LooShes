const posts = [
    {
        name: "Elana",
        text: "Great pic!"
    },
    {
        name: "Katya",
        text: "HEARTS LOVE"
    },
    {
        name: "mama",
        text: "My sweet <3"
    }
]

const render = function() {
    for(let post of posts) {
       $("#main-box").append(`<div class='post-box'><p class=name style='display: inline-block'>${post.name}: </p><p class=post-text style='display: inline-block'>${post.text}</p></div>`) 
    }
}

$("#btn").on("click", function() {
    $("#main-box").empty()

    let name = $(".name").val()
    let text = $(".text").val()

    posts.push({name: name,
                text: text})

    render()
})

render()
