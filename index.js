const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector(".js-clocktext");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const month = date.getMonth();
    const day = date.getDate();
    clockContainer.innerText = `${month < 10 ? `0${month}` : month} / ${day < 10 ? `0${day}` : day} \n ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`:minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
