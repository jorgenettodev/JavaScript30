// 1 - when some key is pressed, log the key value.
const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`); // gets the audio input.
    const key = document.querySelector(`.key[data-key="${e.code}"]`); // gets the key related to the key pressed.
    if (!audio) return; // If there is no audio, stop the function.
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

const transitionEnd = (e) => {
    if (e.propertyName !== 'transform') return; // If the property Name is not 'transform, cancel the function.
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // Selects all divs with class="key";
keys.forEach( key => key.addEventListener('transitionend', transitionEnd));