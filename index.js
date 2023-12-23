const avatar = document.querySelector(".avatar");
const welcome = document.querySelector(".welcome");

let voices = [];

if ("speechSynthesis" in window) {
  voices = speechSynthesis.getVoices().filter((i) => i.lang.startsWith("en"));
}

avatar.addEventListener("click", function () {
  const textToRead = welcome.textContent;
  if ("speechSynthesis" in window) {
    const voices = speechSynthesis.getVoices();
    console.info(voices);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.voice = voices[9];
    speechSynthesis.speak(utterance);
  }
});
