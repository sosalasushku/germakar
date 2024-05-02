const video = document.getElementById("video")
const videoContainer = document.getElementById("video-container")
video.addEventListener("loadeddata", () => {
  if (video.readyState === 4) {
    videoContainer.style.background = 'none'
  }
});

const audio = document.getElementById('audio')
document.getElementById('sound-on').addEventListener('click', () => {
    audio.play()
    document.getElementById('sound-on').style.display = 'none'
})
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
        const fadeIn = (number) => {
            setTimeout(() => {
                document.getElementById(`video-text-${number}`).style.opacity = 1
            }, (number - 1) * 1500)
        }
        [1,2,3,4,5].forEach(num => {
            fadeIn(num)
        })