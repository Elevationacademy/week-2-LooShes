const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

const getTime = function (param) {
    const time = new Date()
    param(time)
}
 
getTime(returnTime)  