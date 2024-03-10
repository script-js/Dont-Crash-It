var moveint;
var speed = 50;

function createOB() {
  var newob = document.createElement("img")
  var array = ["src/obstacles/"]
  newob.src = array[Math.floor(Math.random() * array.length)]
  newob.id = "ob" + Math.ceil(Math.floor(Math.random() * 1000))
  newob.width = "100";
  newob.style.left Math.floor(Math.random() * )
  newob.classList = "obstacle";
  obstacles.appendChild(newob)
  speed = speed - 1
  var elem = document.getElementById(newob.id)
  elem.interval = setInterval(function() {
    elem.width = parseInt(elem.width) + 1;
    console.log(elem.interval)
    if (elem.width > 600) {
      elem.remove()
      clearInterval(elem.interval)
    }
  },speed)
}

function viewMove(dir) {
  moveint = setInterval(function() {
    var elemList = obstacles.querySelector(".obstacle")
      Object.keys(elemList).forEach(function (k) {
        if (dir == "l") {
          var nval = parseInt(elemList[k].style.left) + 1
        } else if (dir == "r") {
          var nval = parseInt(elemList[k].style.left) - 1
        }
        elemList[k].style.left = nval + "px";
        if (parseInt(elemList[k].style.left) > (innerHeight - 200) || parseInt(elemList[k].style.left) < 1) {
          elemList[k].remove()
        }
      })
  },1)
}
