const englishWords = ["Kind", "Brave", "Joyful", "Wicked", "Evil", "Dishonest", "Curious", "Funny", "Interesting"];
const russianWords = ["Добрый - thinking about other people's feelings", "Смелый - ready to force and fight", "Веселый - causing great pleasure ", "Злой - evil or morally wrong", "Зло - bad things and person", "Нечестный - person who say lies", "Любопытный - who is always wonder", "Смешной - causing laughter", "Интересный - who is catching the attention"];
const images = ["kind.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"];

let currentCardIndex = 0;

function showCurrentCard() {
    const wordElement = document.getElementById("word");
    const imageElement = document.getElementById("image");
    const lang = document.querySelector('.card[data-lang="en"]') ? 'en' : 'ru';
    const wordToShow = lang === "en" ? englishWords[currentCardIndex] : russianWords[currentCardIndex];
    wordElement.textContent = wordToShow;
    imageElement.src = images[currentCardIndex];
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % englishWords.length;
    resetLanguage();
    showCurrentCard();
}

function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + englishWords.length) % englishWords.length;
    resetLanguage();
    showCurrentCard();
}

function resetLanguage() {
    document.querySelectorAll('.card').forEach(card => {
        card.setAttribute("data-lang", "en");
    });
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener("click", function() {
      const lang = card.getAttribute("data-lang");
      card.setAttribute("data-lang", lang === "en" ? "ru" : "en");
      card.classList.toggle('flipped'); // Добавляем/удаляем класс flipped при клике
      showCurrentCard();
  });
});


document.getElementById("prevBtn").addEventListener("click", showPrevCard);
document.getElementById("nextBtn").addEventListener("click", showNextCard);

showCurrentCard();
