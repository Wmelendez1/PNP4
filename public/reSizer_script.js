function resizeText(){
    const boxoutHome = document.getElementById("boxoutHome");
    const text = boxoutHome.querySelector("p");
    const containerWidth = boxoutHome.clientWidth;
    const textWidth = text.scrollWidth;

    const fontSize = (containerWidth/ textWidth) * 100;
    text.style.fontSize = fontSize + "%";
} 

window.addEventListener("load", resizeText);
window.addEventListener("resize", resizeText);