const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

const usernameChecker = function (username) {
    for (n in userData) {
        showOnPage(Object.keys(n))
    }
}

let userData = {
    userOne: {
    }
}

const userInput = prompt('Please insert a username')

showOnPage(userData.userOne.username)
usernameChecker(userData)

