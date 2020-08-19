let users = [] 

const displayData = function (callback) {
        setTimeout(function () {
            users = [{ name: "Rick" }, { name: "Morty" }]
            console.log("Got users")
            callback()
        }, 3000);
}

const display = function() {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
   }

displayData(display)

