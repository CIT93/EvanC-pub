const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};
const usernameChecker = function (val) {
    const index = userData.findIndex(function (note, index) {
        return note.userName === val
    
    })
    
    if (index < 0 ) {
        showOnPage('You do not have an account made')
    } else {
        const userInputTwo = prompt('Please insert your Password')
        const indexTwo = userData.findIndex(function (note, index) {
            return note.passWord === userInputTwo
        
        })
        if (indexTwo === index ) {
            showOnPage('Welcome!')
        } else {
            showOnPage('Incorrect Password')
        }
    }

} 

const userInput = prompt('Please insert a username')


const userData = [ {
    userName: 'Evan',
    passWord: 'Apples'
}, {   
    userName: 'John',
    passWord: 'Banana' 
} ] 

usernameChecker(userInput)

