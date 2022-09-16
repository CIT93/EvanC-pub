const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

const usernameChecker = function (username) {
    for (n in username) {
        showOnPage(n[0])
    }
}

let userData = {
    userOne: ['Evan', 'bananas'],

    userTwo: ['Mike', 'Password']
}

// const userInput = prompt('Please insert a username')

// showOnPage(userData.userOne.username)
usernameChecker(userData)

