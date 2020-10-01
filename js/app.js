const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log(" voice activated");
}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    readOutLoud(transcript);

}

btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new speechSynthesis();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}