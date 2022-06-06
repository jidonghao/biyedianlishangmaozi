"use strict";

function delayShow() {
    var e = 0, i = setInterval(function() {
        $maozi[e++].style.display = "block", e >= $maozi.length && (clearInterval(i), e = 0);
    }, 1500);
}

var $maozi = document.querySelectorAll(".maozi");

delayShow();

for (var imgimg = document.querySelectorAll(".showImgName .imgimg"), namename = document.querySelectorAll(".showImgName .namename"), app = document.querySelector(".app"), length = config.List.length, showImgDiv = document.querySelectorAll(".showImgName"), j = 0; j < 8; j++) imgimg[j].src = config.filePath + config.List[j].path, 
namename[j].innerHTML = config.List[j].name, showImgDiv[j].style.display = "inline-block";

var i = 8, timer = setInterval(function() {
    for (var e = 0; e < 8; e++) showImgDiv[e].style.display = "none";
    app.style.display = "none";
    for (var n = 0; n < $maozi.length; n++) $maozi[n].style.display = "none";
    app.style.display = "block", delayShow(), i >= length && clearInterval(timer);
    for (var a = 0; a < 8; a++) a + i >= length ? clearInterval(timer) : (imgimg[a].src = config.filePath + config.List[i + a].path, 
    namename[a].innerHTML = config.List[i + a].name, showImgDiv[a].style.display = "inline-block");
    i += 8;
}, 15e3);