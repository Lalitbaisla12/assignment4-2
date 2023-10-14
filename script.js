// Function to generate a random list of 10 elements
function generateRandomList() {
    var randomList = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 10; i++) {
        var randomWord = '';
        for (var j = 0; j < 5; j++) {
            randomWord += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        randomList.push(randomWord);
    }
    return randomList;
}

// Function to display the random list in the UI
function displayRandomList() {
    var randomList = generateRandomList();
    var listContainer = document.getElementById('random-list');
    listContainer.innerHTML = ''; // Clear previous list items
    randomList.forEach(function (word) {
        var listItem = document.createElement('li');
        listItem.textContent = word;
        listContainer.appendChild(listItem);
    });
}

// Function to sort the list alphabetically
function sortList() {
    var listItems = document.querySelectorAll('#random-list li');
    var sortedList = Array.from(listItems).sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    var listContainer = document.getElementById('random-list');
    listContainer.innerHTML = ''; // Clear previous list items
    sortedList.forEach(function (item) {
        listContainer.appendChild(item);
    });
}

// Display random list when the page loads
window.onload = displayRandomList;
