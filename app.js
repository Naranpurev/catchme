
let ball = document.getElementById('ball')
let border = document.getElementById('border')
let startBtn = document.getElementById('startBtn')
let lost = document.getElementById('lost')
let points = document.getElementById('points')

function moveBall() {
    let randomTop = Math.floor(Math.random() * 90) + 1
    let randomLeft = Math.floor(Math.random() * 90) + 1
    ball.style.top = `${randomTop}%`
    ball.style.left = `${randomLeft}%`
}
let counter = 0
let totalClick = 20;
points.innerText = `Score: ${counter} Clicks Left: ${totalClick}`
function Start() {
    let duration = setInterval(moveBall, 600)
    startBtn.style.display = "none"
    // Win situation
    ball.addEventListener("dblclick", () => {
        clearInterval(duration)
        counter++;
        ball.classList.add('win')
        winner.style.visibility = "visible"
    })
    // Lost situation
    border.addEventListener("click", IsLost)

    function IsLost() {
        totalClick--
        if (totalClick === 0) {
            lost.style.visibility = "visible"
        }
        points.innerText = `Score: ${counter} Clicks Left: ${totalClick}`
        tryScreen()
    }
    const tryScreen = () => lost.style.visibility === "visible" ? clearInterval(duration) : lost.style.visibility = "hidden"
}

function TryAgain() {
    lost.style.visibility = "hidden"
    winner.style.visibility = "hidden"
    totalClick = 20;
    points.innerText = `Score: ${counter} Clicks Left: ${totalClick}`
    ball.classList.remove('win')
    setInterval(moveBall, 600)
}