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

const checkUsername = prompt('Please insert a username')

showOnPage(checkUsername)
showOnPage(userData.userOne.username)
