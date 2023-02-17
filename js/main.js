

//select all the place holder images

let albumCovers = document.querySelectorAll(".audio img");

//Play the Audio
function playTrack(){
    //debugger;
    //find the right audio track and play it based on the 
    let currentAudio = document.querySelector(`audio[data-trackref="${this.dataset.trackref}"]`);
    currentAudio.play();
}

// Add the reactions (the evenet we want to listen for)

albumCovers.forEach(album => album.addEventListener("click", playTrack));