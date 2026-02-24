// Greek alphabet data extracted from the notebook
const greekAlphabet = [
    { uppercase: 'Α', lowercase: 'α', name: 'Alpha', sound: 'ah', example: 'like in "father"', greekWord: 'αγάπη', pronunciation: 'ah-GAH-pee', meaning: 'love' },
    { uppercase: 'Β', lowercase: 'β', name: 'Beta', sound: 'v', example: 'sounds like "v"', greekWord: 'βιβλίο', pronunciation: 'veev-LEE-oh', meaning: 'book' },
    { uppercase: 'Γ', lowercase: 'γ', name: 'Gamma', sound: 'y/gh', example: '"y" before vowels, "gh" before consonants', greekWord: 'γάτα', pronunciation: 'YAH-tah', meaning: 'cat' },
    { uppercase: 'Δ', lowercase: 'δ', name: 'Delta', sound: 'th', example: 'like "th" in "father"', greekWord: 'δέντρο', pronunciation: 'THEN-droh', meaning: 'tree' },
    { uppercase: 'Ε', lowercase: 'ε', name: 'Epsilon', sound: 'e', example: 'short "e" like "eh"', greekWord: 'ελπίδα', pronunciation: 'el-PEE-thah', meaning: 'hope' },
    { uppercase: 'Ζ', lowercase: 'ζ', name: 'Zeta', sound: 'z', example: 'like "z"', greekWord: 'ζωή', pronunciation: 'zoh-EE', meaning: 'life' },
    { uppercase: 'Η', lowercase: 'η', name: 'Eta', sound: 'ee', example: 'long "ee"', greekWord: 'ήλιος', pronunciation: 'EE-lee-os', meaning: 'sun' },
    { uppercase: 'Θ', lowercase: 'θ', name: 'Theta', sound: 'th', example: 'like "th" in "theater"', greekWord: 'θάλασσα', pronunciation: 'THAH-lah-sah', meaning: 'sea' },
    { uppercase: 'Ι', lowercase: 'ι', name: 'Iota', sound: 'ee', example: 'like "ee" in "feet"', greekWord: 'ιστορία', pronunciation: 'ee-stoh-REE-ah', meaning: 'story' },
    { uppercase: 'Κ', lowercase: 'κ', name: 'Kappa', sound: 'k', example: 'like "k"', greekWord: 'καλός', pronunciation: 'kah-LOHS', meaning: 'good' },
    { uppercase: 'Λ', lowercase: 'λ', name: 'Lambda', sound: 'l', example: 'like "l"', greekWord: 'λόγος', pronunciation: 'LOH-gos', meaning: 'word' },
    { uppercase: 'Μ', lowercase: 'μ', name: 'Mu', sound: 'm', example: 'like "m"', greekWord: 'μητέρα', pronunciation: 'mee-TEH-rah', meaning: 'mother' },
    { uppercase: 'Ν', lowercase: 'ν', name: 'Nu', sound: 'n', example: 'like "n"', greekWord: 'νερό', pronunciation: 'neh-ROH', meaning: 'water' },
    { uppercase: 'Ξ', lowercase: 'ξ', name: 'Xi', sound: 'ks', example: 'sounds like "x" or "ks"', greekWord: 'ξένος', pronunciation: 'KSEH-nos', meaning: 'stranger' },
    { uppercase: 'Ο', lowercase: 'ο', name: 'Omicron', sound: 'o', example: 'short "o"', greekWord: 'όνομα', pronunciation: 'OH-noh-mah', meaning: 'name' },
    { uppercase: 'Π', lowercase: 'π', name: 'Pi', sound: 'p', example: 'like "p"', greekWord: 'πατέρας', pronunciation: 'pah-TEH-rahs', meaning: 'father' },
    { uppercase: 'Ρ', lowercase: 'ρ', name: 'Rho', sound: 'r', example: 'rolled "r"', greekWord: 'ρόδα', pronunciation: 'ROH-thah', meaning: 'wheel' },
    { uppercase: 'Σ', lowercase: 'σ/ς', name: 'Sigma', sound: 's', example: 'standard "s" sound', greekWord: 'σοφία', pronunciation: 'soh-FEE-ah', meaning: 'wisdom' },
    { uppercase: 'Τ', lowercase: 'τ', name: 'Tau', sound: 't', example: 'like "t"', greekWord: 'τέχνη', pronunciation: 'TEKH-nee', meaning: 'art' },
    { uppercase: 'Υ', lowercase: 'υ', name: 'Upsilon', sound: 'ee', example: 'sounds like "ee"', greekWord: 'ύπνος', pronunciation: 'EEP-nos', meaning: 'sleep' },
    { uppercase: 'Φ', lowercase: 'φ', name: 'Phi', sound: 'f', example: 'like "f" in "free"', greekWord: 'φίλος', pronunciation: 'FEE-los', meaning: 'friend' },
    { uppercase: 'Χ', lowercase: 'χ', name: 'Chi', sound: 'ch', example: 'sounds like "h" in "hear"', greekWord: 'χαρά', pronunciation: 'khah-RAH', meaning: 'joy' },
    { uppercase: 'Ψ', lowercase: 'ψ', name: 'Psi', sound: 'ps', example: 'like "ps"', greekWord: 'ψυχή', pronunciation: 'psee-KHEE', meaning: 'soul' },
    { uppercase: 'Ω', lowercase: 'ω', name: 'Omega', sound: 'o', example: 'long "o" sound', greekWord: 'ώρα', pronunciation: 'OH-rah', meaning: 'hour' }
];

let currentIndex = 0;
let isStudyMode = true;
let isFlipped = false;

// DOM elements
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const letterName = document.getElementById('letterName');
const sound = document.getElementById('sound');
const example = document.getElementById('example');
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');
const flipBackBtn = document.getElementById('flipBackBtn');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const studyModeBtn = document.getElementById('studyMode');
const testModeBtn = document.getElementById('testMode');
const flashcard = document.getElementById('flashcard');
const testPanel = document.getElementById('testPanel');
const testLetter = document.getElementById('testLetter');
const testOptions = document.getElementById('testOptions');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progressBar');
const pronounceBtn = document.getElementById('pronounceBtn');
const greekWord = document.getElementById('greekWord');
const wordPronunciation = document.getElementById('wordPronunciation');
const wordMeaning = document.getElementById('wordMeaning');

// Initialize speech synthesis
const synth = window.speechSynthesis;

// Initialize
updateCard();

// Event listeners
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + greekAlphabet.length) % greekAlphabet.length;
    resetCard();
    updateCard();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % greekAlphabet.length;
    resetCard();
    updateCard();
});

flipBtn.addEventListener('click', () => {
    flipCard();
});

flipBackBtn.addEventListener('click', () => {
    flipCard();
});

studyModeBtn.addEventListener('click', () => {
    isStudyMode = true;
    studyModeBtn.classList.add('active');
    testModeBtn.classList.remove('active');
    flashcard.classList.remove('hidden');
    testPanel.classList.add('hidden');
    resetCard();
});

testModeBtn.addEventListener('click', () => {
    isStudyMode = false;
    testModeBtn.classList.add('active');
    studyModeBtn.classList.remove('active');
    flashcard.classList.add('hidden');
    testPanel.classList.remove('hidden');
    generateTestQuestion();
});

pronounceBtn.addEventListener('click', () => {
    pronounceLetter();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (isStudyMode) {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipCard();
        }
    }
});

function updateCard() {
    const letter = greekAlphabet[currentIndex];
    uppercase.textContent = letter.uppercase;
    lowercase.textContent = letter.lowercase;
    letterName.textContent = letter.name;
    sound.textContent = `"${letter.sound}"`;
    example.textContent = letter.example;
    greekWord.textContent = letter.greekWord;
    wordPronunciation.textContent = letter.pronunciation;
    wordMeaning.textContent = `"${letter.meaning}"`;
    counter.textContent = `${currentIndex + 1} / ${greekAlphabet.length}`;

    // Update progress bar
    const progress = ((currentIndex + 1) / greekAlphabet.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function flipCard() {
    isFlipped = !isFlipped;
    if (isFlipped) {
        cardFront.classList.add('hidden');
        cardBack.classList.add('active');
    } else {
        cardFront.classList.remove('hidden');
        cardBack.classList.remove('active');
    }
}

function resetCard() {
    isFlipped = false;
    cardFront.classList.remove('hidden');
    cardBack.classList.remove('active');
}

function generateTestQuestion() {
    const letter = greekAlphabet[currentIndex];
    testLetter.textContent = letter.uppercase;

    // Generate 4 options (1 correct + 3 random)
    const options = [letter];
    const availableLetters = greekAlphabet.filter((_, i) => i !== currentIndex);

    // Randomly select 3 wrong answers
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableLetters.length);
        options.push(availableLetters[randomIndex]);
        availableLetters.splice(randomIndex, 1);
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Clear previous options
    testOptions.innerHTML = '';
    feedback.classList.add('hidden');

    // Create option buttons
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${option.name} (${option.sound})`;
        btn.addEventListener('click', () => checkAnswer(option, letter, btn));
        testOptions.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btn) {
    const allButtons = testOptions.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (selected.name === correct.name) {
        btn.classList.add('correct');
        feedback.textContent = `Correct! ${correct.uppercase} is ${correct.name}, pronounced "${correct.sound}"`;
        feedback.className = 'feedback correct';
        feedback.classList.remove('hidden');

        // Auto-advance after 1.5 seconds
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % greekAlphabet.length;
            generateTestQuestion();
            updateProgressBar();
        }, 1500);
    } else {
        btn.classList.add('incorrect');

        // Highlight the correct answer
        allButtons.forEach(b => {
            if (b.textContent.includes(correct.name)) {
                b.classList.add('correct');
            }
        });

        feedback.textContent = `Incorrect. ${correct.uppercase} is ${correct.name}, pronounced "${correct.sound}"`;
        feedback.className = 'feedback incorrect';
        feedback.classList.remove('hidden');

        // Auto-advance after 2.5 seconds
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % greekAlphabet.length;
            generateTestQuestion();
            updateProgressBar();
        }, 2500);
    }
}

function updateProgressBar() {
    const progress = ((currentIndex + 1) / greekAlphabet.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function pronounceLetter() {
    // Cancel any ongoing speech
    synth.cancel();

    const letter = greekAlphabet[currentIndex];

    // Try to use a Greek voice if available, otherwise use default
    const voices = synth.getVoices();
    const greekVoice = voices.find(voice => voice.lang.startsWith('el'));
    const englishVoice = voices.find(voice => voice.lang === 'en-US');

    // 1. Speak the letter name
    const nameUtterance = new SpeechSynthesisUtterance(letter.name);
    nameUtterance.voice = englishVoice || voices[0];
    nameUtterance.rate = 0.8;
    nameUtterance.pitch = 1;
    nameUtterance.volume = 1;
    synth.speak(nameUtterance);

    // 2. After a pause, pronounce the sound
    nameUtterance.onend = () => {
        setTimeout(() => {
            const soundUtterance = new SpeechSynthesisUtterance(letter.sound);
            soundUtterance.voice = englishVoice || voices[0];
            soundUtterance.rate = 0.7;
            soundUtterance.pitch = 1;
            soundUtterance.volume = 1;
            synth.speak(soundUtterance);

            // 3. After another pause, pronounce the Greek word
            soundUtterance.onend = () => {
                setTimeout(() => {
                    const wordUtterance = new SpeechSynthesisUtterance(letter.greekWord);
                    wordUtterance.voice = greekVoice || englishVoice || voices[0];
                    wordUtterance.rate = 0.7;
                    wordUtterance.pitch = 1;
                    wordUtterance.volume = 1;
                    wordUtterance.lang = 'el';
                    synth.speak(wordUtterance);

                    // 4. Finally, say what the word means
                    wordUtterance.onend = () => {
                        setTimeout(() => {
                            const meaningUtterance = new SpeechSynthesisUtterance(`meaning ${letter.meaning}`);
                            meaningUtterance.voice = englishVoice || voices[0];
                            meaningUtterance.rate = 0.8;
                            meaningUtterance.pitch = 1;
                            meaningUtterance.volume = 1;
                            synth.speak(meaningUtterance);
                        }, 300);
                    };
                }, 400);
            };
        }, 300);
    };
}

// Load voices when they're ready
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {
        synth.getVoices();
    };
}
