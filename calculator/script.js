document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const jokeTextElement = document.getElementById('joke-text');

    let currentInput = '';
    let jokeTimeout;

    // List of jokes
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
        "Why did the bicycle fall over? Because it was two tired!",
        "What do you call a man with a rubber toe? Roberto.",
        "How do you catch a squirrel? Climb a tree and act like a nut!"
    ];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (button.classList.contains('number') || button.classList.contains('operator')) {
                currentInput += buttonValue;
                display.value = currentInput;
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                display.value = '';
                jokeTextElement.textContent = "Press the '=' button for a joke!";
            } else if (button.classList.contains('equal')) {
                try {
                    // Using eval() for a simple calculator is acceptable for this educational example.
                    // For a production app, a more secure parser would be recommended.
                    let result = eval(currentInput);
                    display.value = result;
                    currentInput = result; // Allows for chained operations
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