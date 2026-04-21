// --- STEP 2: BUTTON + CLICK EVENT ---
const vibeBtn = document.getElementById('vibeBtn');
vibeBtn.addEventListener('click', () => {
    alert("Vibe check passed! 🚀 Your site is officially interactive.");
});


// --- STEP 3: CHANGE SOMETHING ON THE PAGE ---
const spiceBtn = document.getElementById('spiceBtn');
const statusText = document.getElementById('statusText');

spiceBtn.addEventListener('click', () => {
    statusText.textContent = "Current Status: IMMACULATE VIBES";
    statusText.style.color = "purple";
    statusText.style.fontSize = "24px";
});


// --- STEP 4 & 5: USER INPUT + LOGIC (IF/ELSE) ---
const logicBtn = document.getElementById('logicBtn');
const userInput = document.getElementById('userInput');
const logicResponse = document.getElementById('logicResponse');

logicBtn.addEventListener('click', () => {
    const name = userInput.value;

    if (name === "") {
        logicResponse.textContent = "Please type a name first! ✋";
        logicResponse.style.color = "red";
    } else {
        logicResponse.textContent = "Welcome, " + name + "! Your coding energy is elite.";
        logicResponse.style.color = "green";
    }
});


// --- STEP 6: ADD SOMETHING FUN (Magic 8-Ball) ---
const ballBtn = document.getElementById('ballBtn');
const ballResponse = document.getElementById('ballResponse');

const answers = [
    "It is certain.",
    "The vibes say yes.",
    "Ask again later...",
    "My sources say no.",
    "Outlook good.",
    "Don't count on it."
];

ballBtn.addEventListener('click', () => {
    // This logic picks a random answer from the list above
    const randomIndex = Math.floor(Math.random() * answers.length);
    ballResponse.textContent = "🎱 " + answers[randomIndex];
});
