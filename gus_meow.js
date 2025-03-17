// Create an audio object
const sound = new Audio("Holst_ Second Suite for Military Band in F major Op.28-2-[AudioTrimmer.com].mp3");

// Add a click event listener to the button
document.getElementById("gus_meow").addEventListener("click", () => {
    sound.play(); // Play the sound
});