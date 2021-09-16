const khoi1 = document.getElementById("khoi1")
const khoi2 = document.getElementById("khoi2")
const khoi3 = document.getElementById("khoi3")
const khoi4 = document.getElementById("khoi4")
const khoi5 = document.getElementById("khoi5")
const hideOrShow = () => {
    khoi1.style.display = khoi1.style.display === "none" ? "block" : "none";
}
const randomColor = () => {
    khoi2.style.backgroundColor = `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
}
const swapContent = () => {
    const contentkhoi3 = khoi3.innerHTML;
    khoi3.innerHTML = khoi4.innerHTML;
    khoi4.innerHTML = contentkhoi3;
}
const increaseFontSize = () => {
    const a = khoi5.style.fontSize;
    a.slice(-2);
    console.log(1+parseInt(a) +'px')
    khoi5.style.fontSize = 1+parseInt(a) +'px'
}