const video = document.getElementById("video")
video.setAttribute("autoplay", "autoplay")
const preloader = document.getElementById("preload")
video.addEventListener("loadeddata", () => {
  if (video.readyState === 4) {
    preloader.style.opacity = "0"
    
    const fadeIn = (number) => {
        setTimeout(() => {
            document.getElementById(`video-text-${number}`).style.opacity = 1
        }, (number) * 1500)
    }
    [0,1,2,3,4,5].forEach(num => {
        fadeIn(num)
    })
  }
});

const audio = document.getElementById('audio')
document.getElementById('video-text-0').addEventListener('click', () => {
    audio.currentTime = 25
    audio.play()
    document.getElementById('video-text-0').remove()
})

const carouselContainer = document.getElementById("carousel-container");
const carousel = document.getElementById("carousel");

if (carouselContainer && carousel) {

let pressed = false;
let startX;
let x;

carouselContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - carousel.offsetLeft;
    carouselContainer.style.cursor = "grabbing";
});

carouselContainer.addEventListener("mouseenter", () => {
    carouselContainer.style.cursor = "grab";
});

carouselContainer.addEventListener("mouseup", () => {
    carouselContainer.style.cursor = "grab";
    pressed = false;
});

carouselContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    carousel.style.left = `${x - startX}px`;
});

let boundItems = () => {
    let outerBound = carouselContainer.getBoundingClientRect();
    let innerBound = carousel.getBoundingClientRect();

    if (parseInt(carousel.style.left) > 0) {
    carousel.style.left = "0px";
    }

    if (innerBound.right < outerBound.right) {
    carousel.style.left = `-${innerBound.width - outerBound.width}px`;
    }
};
carouselContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    carousel.style.left = `${x - startX}px`;
    boundItems();
});
}

const updateTimer = () => {
    const daysCount = document.getElementById('days-count')
    const daysLabel = document.getElementById('days-label')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const currentDate = new Date()
    const dateOfWedding = new Date(2024, 7, 3, 15)
    let milisecondsLeft = dateOfWedding - currentDate
    let daysLeft = Math.trunc(milisecondsLeft / 86400000)
    let hoursLeft = Math.trunc(((milisecondsLeft) % 86400000) / 3600000)
    let minutesLeft = Math.trunc((milisecondsLeft - daysLeft * 86400000 - hoursLeft * 3600000)/60000)
    let secondsLeft = Math.trunc(Math.trunc((milisecondsLeft - daysLeft * 86400000 - hoursLeft * 3600000 - minutesLeft * 60000) / 1000))
    daysCount.innerText = daysLeft
    daysLabel.innerText = String(daysLeft).slice(-1) === '1' ? 'день' : 
        ['2','3','4'].includes(String(daysLeft).slice(-1)) ? 'дня' : 'дней'
    hours.innerText = ('0' + hoursLeft).slice(-2)
    minutes.innerText = ('0' + minutesLeft).slice(-2)
    seconds.innerText = ('0' + secondsLeft).slice(-2)
}

setInterval(updateTimer, 1000)