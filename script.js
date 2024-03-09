function createOB() {
  var newob = document.createElement("img")
  var array = ["src/obstacles/"]
  newob.src = array[Math.floor(Math.random() * array.length)]
  newob.id = "ob" + Math.ceil(Math.floor(Math.random() * 1000))
  newob.width = "100";
  obstacles.appendChild(newob)
  var elem = document.getElementById(newob.id)
  elem.interval = setInterval(function() {
    elem.width = parseInt(elem.width) + 1;
    console.log(elem.width)
    if (elem.width > 600) {
      elem.remove()
      clearInterval(elem.interval)
    }
  },1)
}
