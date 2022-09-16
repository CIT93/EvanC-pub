const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

const usernameChecker = function (username) {
    for (n of username) {
        for (val of n ) {
            showOnPage(val)
        }
    }
}

let userData = {
    userOne: {
        username: 'Evan'
    },

    userTwo: {
        username: 'Mike'
    }
}

// const userInput = prompt('Please insert a username')

// showOnPage(userData.userOne.username)
usernameChecker(userData)

