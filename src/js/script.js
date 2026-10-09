let progressBar = document.getElementById('progress-bar')
let song = document.getElementById('song')
let playPauseBtn = document.getElementById('play-pause-btn')

song.onloadedmetadata = function(){ //faz com que a barra de progresso seja atualizada com o tempo total da música
    progressBar.max = song.duration
    progressBar.value = song.currentTime
}

function togglePlayPause() {
    if (playPauseBtn.id === 'play-pause-btn' && song.paused) {  //verifica se o botão é o de play/pause e se a música está pausada
        song.play()
        playPauseBtn.src = './src/assets/icons8-pause-40.png'
    } else {
        song.pause()
        playPauseBtn.src = './src/assets/icons8-reproduzir-40.png'
        // playPauseBtn.classList.add('pause')
        // playPauseBtn.classList.remove('play')
    }
}

    if(song.play()){ //verifica se a música está tocando
        setInterval(() => {
            progressBar.value = song.currentTime  //atualiza o progresso da música
    }, 500)
}


progressBar.onchange = function() { //quando o usuário arrasta a barra de progresso, atualiza o tempo da música
    song.play()
    song.currentTime = progressBar.value
}