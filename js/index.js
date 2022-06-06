let $maozi = document.querySelectorAll(".maozi")
// console.log($maozi)
// 循环给加延迟
// for (let i = 0; i < $maozi.length; i++) {

//     console.log($maozi[i])
//     $maozi[i].style.display = "none"
//     // $maozi[i].style.animationDelay = Number(1.5 * i) + "s"
// }


function delayShow() {
    let j = 0
    var timer = setInterval(() => {
        $maozi[j++].style.display = "block"
        if (j >= $maozi.length) {
            clearInterval(timer)
            j = 0
        }
    }, 1500);
}
delayShow()

const imgimg = document.querySelectorAll(".showImgName .imgimg")
const namename = document.querySelectorAll(".showImgName .namename")

const app = document.querySelector(".app")

let length = config.List.length

let showImgDiv = document.querySelectorAll(".showImgName")



for (let j = 0; j < 8; j++) {
    imgimg[j].src = config.filePath + config.List[j].path
    namename[j].innerHTML = config.List[j].name
    showImgDiv[j].style.display = "inline-block"
}

let i = 7
let timer = setInterval(() => {
    for (let j = 0; j < 8; j++) {
        showImgDiv[j].style.display = "none"
    }

    // 刷新一下页面开始切换下一页
    console.log("切换下一页")
    app.style.display = "none"
    for (let o = 0; o < $maozi.length; o++) {
        $maozi[o].style.display = "none"
    }
    app.style.display = "block"
    delayShow()

    if (i >= length)
        clearInterval(timer)
    console.log("定时器开始执行")
    for (let j = 0; j < 8; j++) {
        if ((j + i) >= length) {
            clearInterval(timer)
        } else {

            imgimg[j].src = config.filePath + config.List[i + j].path
            namename[j].innerHTML = config.List[i + j].name
            showImgDiv[j].style.display = "inline-block"
        }
    }
    i += 8
}, 15000);