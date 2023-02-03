playBtn = document.getElementById("playBtn");
stopBtn = document.getElementById("stopBtn");
volumeBtn = document.getElementById("volumeBtn");

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#e3bbee',
    progressColor: '#fe38ab',
    barWidth: 3,
    responsive: true,
    hideScrollbar: true,
    barRadius: 3
});

playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.match("play")){
        playBtn.src  = "assests/pause.png";
    }
    else{
        playBtn.src = "assests/play.png"
    }
}

stopBtn.onclick = function(){
    wavesurfer.stop();
    playBtn.src = "assests/play.png"
}

volumeBtn.onclick = function(){
    wavesurfer.toggleMute();
    if(volumeBtn.src.match("volume")){
        volumeBtn.src  = "assests/mute.png";
    }
    else{
        volumeBtn.src = "assests/volume.png"
    }
}


const loadAudio = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    wavesurfer.load(audioUrl)
}