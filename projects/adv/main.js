"use strict"
let slider = document.getElementById("myRange");
let phone = document.getElementById("phone");

slider.oninput = function () {
    phone.style.background = "url(images/images/phone/phone_sprite.png) 0 " + slider.value * 221 + "px";
    rainFall();
    videoToggle();
    flashToggle();
    internalsFrameToggle();
    infoChange();
}

function rainFall() {
    if (slider.value <= 58 && slider.value >= 40) {
        let rainDropContainer = document.getElementById("raindropcontainer");
        for (let i = 0; i < 2; i++) {
            let drops = [];
            let dropType;
            drops[i] = document.createElement("div");
            dropType = Math.floor(Math.random() * 4) + 1;
            drops[i].className = "raindrop";
            drops[i].style.background = "url(images/images/raindrop_" + dropType + ".png) no-repeat";
            drops[i].style.top = Math.floor(Math.random() * rainDropContainer.offsetHeight) + 1;
            drops[i].style.left = Math.floor(Math.random() * rainDropContainer.offsetWidth) + 1;
            drops[i].style.animation = Math.random() > 0.5 ? "rain1 1s linear" : "rain2 1s linear";
            rainDropContainer.appendChild(drops[i]);
            if (rainDropContainer.firstChild) {
                setTimeout(function () {
                    rainDropContainer.removeChild(rainDropContainer.firstChild);
                }, 1000);
            }
        }
    }
}

function videoToggle() {
    let iframe = document.getElementsByTagName("IFRAME");
    let border = document.getElementsByClassName("border");
    slider.value >= 60 ? iframe[0].style.visibility = "visible" : iframe[0].style.visibility = "hidden";
    slider.value >= 60 ? border[0].style.visibility = "visible" : border[0].style.visibility = "hidden";
}

function flashToggle() {
    let flash = document.getElementById("flash");
    if (slider.value == 30) {
        flash.classList.remove("run-animation");
        void flash.offsetWidth;
        flash.classList.add("run-animation");

    }
}

function internalsFrameToggle() {
    let internalsFrame = document.getElementById("internalsframe");
    slider.value <= 1 ? internalsFrame.style.visibility = "visible" : internalsFrame.style.visibility = "hidden";
}

function infoChange() {
    let info = document.getElementById("info");
    if (slider.value > 59) {
        info.innerHTML = "Rethink what a phone can do";
    }
    if (slider.value < 59) {
        info.innerHTML = "Water and dust resistant: real world ready";
    }
    if (slider.value < 40) {
        info.innerHTML = "Capture picture perfect moments in all conditions";
    }
    if (slider.value < 15) {
        info.innerHTML = "Expandable memory: Fit more of what you like";
    }
}