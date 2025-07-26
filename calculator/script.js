document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const jokeTextElement = document.getElementById('joke-text');

    let currentInput = '';
    
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

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            // Handle number and operator clicks
            if (button.classList.contains('number') || button.classList.contains('operator')) {
                currentInput += buttonValue;
                display.value = currentInput;
            } 
            // Handle 'AC' (All Clear) button
            else if (button.classList.contains('clear')) {
                currentInput = '';
                display.value = '';
                jokeTextElement.textContent = "Press the '=' button for a joke!"; // Reset joke text
            } 
            // Handle '←' (Backspace/Delete) button
            else if (button.classList.contains('backspace')) {
                currentInput = currentInput.slice(0, -1); // Remove the last character
                display.value = currentInput;
                if (currentInput === '') { // Ensure display is truly empty if all characters are deleted
                    display.value = '';
                }
            }
            // Handle '=' (Equals) button
            else if (button.classList.contains('equal')) {
                try {
                    // Evaluate the expression. Note: eval() should be used with caution in real-world apps
                    let result = eval(currentInput); 
                    display.value = result;
                    currentInput = result.toString(); // Convert result back to string for chained operations
                } catch (e) {
                    display.value = 'Error';
                    currentInput = ''; // Clear input on error
                }
                
                // Display a random joke after calculation
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                jokeTextElement.textContent = randomJoke;
            }
        });
    });
});
