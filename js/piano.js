const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','f','g','h','j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key =>{
    key.addEventListener('click',() => onPlayPiano(key));
});

document.addEventListener('keydown', event =>{
    const keyboard = event.key;
    const whiteIndex = WHITE_KEYS.indexOf(keyboard)
;
    const blackIndex = BLACK_KEYS.indexOf(keyboard)
;
   if(!event.repeat){
    if(whiteIndex > -1){
        onPlayPiano(whiteKeys[whiteIndex]);
    }

    if(blackIndex > -1) {
        onPlayPiano(blackKeys[blackIndex]);
    }
   }
})

function onPlayPiano(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    audio.addEventListener('ended', () => {
        key.classList.remove("active");
    })
}