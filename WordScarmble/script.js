const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
const resultModal = document.getElementById("resultModal");
const resultMessage = document.getElementById("resultMessage");



let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const openModal = (message) => {
    resultMessage.innerText = message;
    resultModal.style.display = "flex";
  }
  
  const closeModal = () => {
    resultModal.style.display = "none";
  }

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return openModal("Please enter the word to check!");
    if (userWord !== correctWord) return openModal(`Oops! ${userWord} is not the correct word`);
    openModal(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
  }

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
