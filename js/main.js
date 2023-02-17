

//select all the place holder images

let albumCovers = document.querySelectorAll(".audio img"),
    audioEl = document.querySelector("audio"),
    playButton = document.querySelector("#playButton"),
    pauseButton = document.querySelector("#pauseButton"),
    rewindButton = document.querySelector("#rewindButton");


function loadAudio(){
    //find the right audio track and play it based on the  on the dataset attrack 
    audioEl.src = `audio/${this.dataset.trackref}.mp3`;
    audioEl.load();

    //now i can play audio without things breaking
    playTrack();
}

//Play the Audio
function playTrack(){
    audioEl.play();
    
}

function pauseTrack(){
    audioEl.pause();
}

function rewindTrack(){
    audioEl.currentTime = 0;
}

// Add the reactions (the event we want to listen for)

albumCovers.forEach(album => album.addEventListener("click", loadAudio));


//custom audio controls
playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
rewindButton.addEventListener("click", rewindTrack);