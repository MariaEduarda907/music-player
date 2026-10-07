let progressBar = document.getElementById('progress-bar')
let song = document.getElementById('song')
let playPauseBtn = document.getElementById('play-pause-btn')

song.onloadedmetadata = function(){
    progressBar.max = song.duration
    progressBar.value = song.currentTime
}