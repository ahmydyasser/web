document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let input = event.target.value.toLowerCase().trim();
        let outputElement = document.getElementById("output");

        // Check if input is empty, do nothing
        if (!input) {
            event.target.value = ""; // Clear input
            return;
        }

        let response = '';

        switch (input) {
            case 'help':
                response = `Available commands:\n
- help: Show this help message\n
- writeups: Open writeups section\n
- notes: Open notes section\n
- media: Open media section\n
- links: Open links section\n
- about: Open about section\n
- contact: Open contact section\n
- youtube: Open YouTube\n
- date: Show current date and time\n
- version: Show script version\n
- cls: Clear the screen\n`;
                break;
            case 'writeups':
                response = `Opening Writeups... (link to writeups section)\n`;
                break;
            case 'notes':
                response = `Opening Notes... (link to notes section)\n`;
                break;
            case 'media':
                response = `Opening Media... (link to media section)\n`;
                break;
            case 'links':
                response = `Opening Links... (link to links section)\n`;
                break;
            case 'about':
                response = `Opening About... (link to about section)\n`;
                break;
            case 'contact':
                response = `Opening Contact... (link to contact section)\n`;
                break;
            case 'youtube':
                response = `Opening YouTube...\n`;
                window.open("https://www.youtube.com",'_blank');
                
                break;
            case 'date':
                response = `Current date and time: ${new Date().toLocaleString()}\n`;
                break;
            case 'version':
                response = `Script version: 1.0.0\n`;
                break;
            case 'methodology':
                response = `opening methodology`;
                window.open("my-bug-hunting-methodology.html")
                break;
            case 'cls':
            case 'clear':
                outputElement.innerHTML = ''; // Clears the output
                return; // Exit early
            default:
                response = `Unknown command: ${input}\nType "help" to see available commands.\n`;
        }

        outputElement.innerHTML += `<div class="terminal-line">[Guest@ahmydyasser]~$ ${response}</div>\n`;

        // Scroll to the bottom
        outputElement.scrollTop = outputElement.scrollHeight;

        event.target.value = ""; // Clear input
        event.target.focus(); // Keep focus on input
    }
});

// Ensure input is focused on page load
window.addEventListener("load", function() {
    document.getElementById("input").focus();
});

// search using tags
// function filterCards() {
//     const input = document.getElementById('searchInput');
//     const filter = input.value.toLowerCase();
//     const cards = document.querySelectorAll('#cardsContainer .card');

//     cards.forEach(card => {
//         const tags = card.getAttribute('data-tags');
//         if (tags.toLowerCase().includes(filter)) {
//             card.style.display = '';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }




// //   search for the words but if found  a word that contains the same letter inside it will output them   perform = form 
// function searchCards() {
//     let input = document.getElementById('searchInput').value;
//     input = input.toLowerCase();
//     let cards = document.getElementsByClassName('card');

//     for (let i = 0; i < cards.length; i++) {
//         if (!cards[i].innerHTML.toLowerCase().includes(input)) {
//             cards[i].style.display = 'none';
//         } else {
//             cards[i].style.display = 'block'; // Use 'block' to show cards
//         }
//     }
// }

function searchCards() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    let regex = new RegExp(`(${input})`, 'gi');

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let titleElement = card.querySelector('.card-title');
        let textElement = card.querySelector('.card-text');
        
        // Check if either title or text contains the search input
        let titleText = titleElement.textContent.toLowerCase();
        let cardText = textElement.textContent.toLowerCase();
        
        if (titleText.includes(input) || cardText.includes(input)) {
            card.style.display = 'block'; // Show the card

            // Highlight text in title and card text
            titleElement.innerHTML = highlightText(titleElement.textContent, regex);
            textElement.innerHTML = highlightText(textElement.textContent, regex);
        } else {
            card.style.display = 'none'; // Hide the card
        }
    }
}

function highlightText(text, regex) {
    return text.replace(regex, '<span class="highlight">$1</span>');
}


// here is a version that checks only for the correct word   as a whole  using regex
// function searchCards(query) {
//     // Create a regular expression for the query with word boundaries and case insensitivity
//     const regex = new RegExp(`\\b${query}\\b`, 'i');
    
//     // Select all card elements
//     const cards = document.querySelectorAll('.card');
    
//     // Loop through each card
//     cards.forEach(card => {
//         // Get the card title and text content, converting to lowercase for case-insensitive comparison
//         const title = card.querySelector('.card-title') ? card.querySelector('.card-title').textContent.toLowerCase() : '';
//         const text = card.querySelector('.card-text') ? card.querySelector('.card-text').textContent.toLowerCase() : '';
        
//         // Check if the query matches either the title or text
//         if (regex.test(title) || regex.test(text)) {
//             // Show the card if it matches
//             card.parentElement.style.display = 'block'; 
//         } else {
//             // Hide the card if it does not match
//             card.parentElement.style.display = 'none'; 
//         }
//     });
// }

