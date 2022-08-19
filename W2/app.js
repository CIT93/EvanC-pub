const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

let airValue = 99
// This defines what the Air Quality Number it is
if (airValue >= 100) {
    airQuality = 'Orange'
} else if(airValue >= 50 && airValue < 100) {
    airQuality = 'Yellow'
} else {
    airQuality = 'Green'
}
// This Line Turns the Air Quality Number into our standard Air Quality
let exercise = 'Jog'
// This line defines what type of workout I plan on doing
if (exercise == 'Jog' && airQuality == 'Orange') {
    summary = 'Air Quality is bad, dont go for a jog'
} else if(exercise == "Jog" && airQuality == 'Yellow') {
    summary = 'Air Quality is okay, consider going to the gym'
} else if(exercise == "Jog" && airQuality == 'Green') {
    summary = 'Air Quality is good, go for a run!'
} else {
    summary = 'Everyday is a good day for the gym!'
}
// This Line tells me if its a good idea for said workout depending on the Air Quality

showOnPage('Air Quality ---> ' + airValue)
showOnPage('Air Quality Color ---> ' + airQuality)
showOnPage('Workout ---> ' + exercise)
showOnPage('Recommendation ---> ' + summary)
