document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const jokeTextElement = document.getElementById('joke-text');

    let currentInput = '';
    
    // --- More Jokes Added Here ---
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
        "Why did the bicycle fall over? Because it was two tired!",
        "What do you call a man with a rubber toe? Roberto.",
        "How do you catch a squirrel? Climb a tree and act like a nut!",
        "Why was the math book sad? Because it had too many problems.",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
        "What do you get if you cross a snowman and a vampire? Frostbite.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call a factory that makes good products? A satisfactory.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "What's orange and sounds like a parrot? A carrot.",
        "How do you make a tissue dance? You put a little boogie in it.",
        "What do you call a lazy kangaroo? Pouch potato.",
        "I'm on a seafood diet. I see food, and I eat it.",
        "What's a vampire's favorite fruit? A neck-tarine."
    ];
    // --- End of Jokes ---

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (button.classList.contains('number') || button.classList.contains('operator')) {
                currentInput += buttonValue;
                display.value = currentInput;
            } else if (button.classList.contains('clear')) { // 'AC' button
                currentInput = '';
                display.value = '';
                jokeTextElement.textContent = "Press the '=' button for a joke!";
            } else if (button.classList.contains('backspace')) { // Backspace functionality
                currentInput = currentInput.slice(0, -1); 
                display.value = currentInput;
                if (currentInput === '') { 
                    display.value = ''; 
                }
            } else if (button.classList.contains('equal')) {
                try {
                    let result = eval(currentInput);
                    display.value = result;
                    currentInput = result; 
                } catch (e) {
                    display.value = 'Error';
                    currentInput = '';
                }
                
                // Get a random joke
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                jokeTextElement.textContent = randomJoke;
            }
        });
    });
});
