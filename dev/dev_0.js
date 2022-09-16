const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

const usernameChecker = function (username) {
    for (n in userData) {
        if (n.username == username) {
            showOnPage('Test')
        }
    }
}

let userData = {
    userOne: {
        username: 'Evan',
        password: 'bananas'
    }
}

const userInput = prompt('Please insert a username')

usernameChecker(userInput)

