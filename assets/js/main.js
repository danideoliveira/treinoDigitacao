const words = [
    "Experiência",
    "Distância",
    "Computador",
    "Flamengo",
    "Símbolo",
    "Hoje eu vou para a praia!",
    "Chegou minha encomenda!",
    "Amanhã é feriado?",
    "Que horas são?"
];


class Start {
    constructor() {
        this.setRandomWord();
        const btnSubmit = document.querySelector('.btn-submit');
        btnSubmit.addEventListener('click', this.checkAnswer);
    }

    randomNumber(max = words.length, min = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    setRandomWord() {
        const p = document.querySelector('.random-word > p');
        p.innerText = words[this.randomNumber()];
    }

    checkAnswer() {
        const typedWord = document.querySelector('.typed-word');
        const randomWord = document.querySelector('.random-word > p');
    
        if(randomWord.textContent !== typedWord.value) {
            randomWord.classList.remove('correct');
            randomWord.classList.add('incorrect');
            randomWord.classList.toggle('wobble');

            setTimeout(() => {
                randomWord.classList.toggle('wobble');
            }, 1000);

        } else {
            randomWord.classList.remove('incorrect');
            randomWord.classList.add('correct');

            randomWord.classList.toggle('tada');

            setTimeout(() => {
                randomWord.classList.toggle('tada');
            }, 1000);
    
            setTimeout(() => {
                start.setRandomWord();
                randomWord.classList.remove('correct');
                typedWord.value = '';
            }, 1500);
        }
    }
}

const start = new Start();


function setAnimation() {
    const randomWord = document.querySelector('.random-word > p');        
    randomWord.classList.toggle('.wobble');
}
