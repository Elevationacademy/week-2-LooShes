const StringFormatter = function() {

    const capitalizeFirst = function(str) {
        return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase()
    }

    const skewerCase = function(str) {
        return str.replace(" ", "-")
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
           }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box
