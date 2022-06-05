let $maozi = document.querySelectorAll(".maozi")
// console.log($maozi)
// 循环给加延迟
// for (let i = 0; i < $maozi.length; i++) {

//     console.log($maozi[i])
//     $maozi[i].style.display = "none"
//     // $maozi[i].style.animationDelay = Number(1.5 * i) + "s"
// }
let j = 0
var timer = setInterval(() => {
    $maozi[j++].style.display = "block"
    if (j >= $maozi.length) {
        clearInterval(timer)
        j = 0
    }
}, 1500);