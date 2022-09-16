const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

let userData = {
    userOne: {
        username: 'Evan',
        password: 'bananas'
    }
}

const userInput = prompt('Please insert a username')

showOnPage(checkUsername)
usernameChecker(userInput)

const usernameChecker = function (username) {
    for (n in userData) {
        showOnPage(userData.userOne.username)
    }
}
