const englishWords = ["Kind", "Brave", "Joyful", "Wicked", "Evil", "Dishonest", "Curious", "Funny", "Interesting"];
const russianWords = ["Добрый - thinking about other people's feelings", "Смелый - ready to force and fight", "Веселый - causing great pleasure ", "Злой - evil or morally wrong", "Зло - bad things and person", "Нечестный - person who say lies", "Любопытный - who is always wonder", "Смешной - causing laughter", "Интересный - who is catching the attention"];
const images = ["image/kind.jpg", "image/kind.jpg", "image/image3.jpg", "image/image2.jpg", "image/image4.jpg", "image/image2.jpg", "image/curious.jpg", "image/kind.jpg", "image/interesting.jpg"];
const totalCards = englishWords.length; // Общее количество карточек
let currentCardIndex = 0;

function showCurrentCard() {
    const wordElement = document.getElementById("word");
    const imageElement = document.getElementById("image");
    const lang = document.querySelector('.card[data-lang="en"]') ? 'en' : 'ru';
    const wordToShow = lang === "en" ? englishWords[currentCardIndex] : russianWords[currentCardIndex];
    wordElement.textContent = wordToShow;
    imageElement.src = images[currentCardIndex];
}


function updateCardInfo() {
    document.getElementById('remaining-count').textContent = totalCards - currentCardIndex;
    document.getElementById('card-order-count').textContent = currentCardIndex + 1;
}


function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % englishWords.length;
    resetLanguage();
    showCurrentCard();
    updateCardInfo();
}

function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + englishWords.length) % englishWords.length;
    resetLanguage();
    showCurrentCard();
    updateCardInfo();
}

function resetLanguage() {
    document.querySelectorAll('.card').forEach(card => {
        card.setAttribute("data-lang", "en");
    });
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("click", function () {
        const lang = card.getAttribute("data-lang");
        card.setAttribute("data-lang", lang === "en" ? "ru" : "en");
        card.classList.toggle('flipped'); // Добавляем/удаляем класс flipped при клике
        showCurrentCard();
    });
});


document.getElementById("prevBtn").addEventListener("click", showPrevCard);
document.getElementById("nextBtn").addEventListener("click", showNextCard);

showCurrentCard();
updateCardInfo();
