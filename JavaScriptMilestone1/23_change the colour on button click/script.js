const result = document.getElementsByClassName('result');
const button = document.getElementById("btn");
const randomColor =  () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};



function changeRandomColor() {
    result[0].style.backgroundColor = randomColor();
    result[1].style.backgroundColor = randomColor();
}

button.addEventListener("click", changeRandomColor);