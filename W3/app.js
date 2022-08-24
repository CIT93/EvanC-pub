const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

let AirQualityChecker = function (airValue) { // This Function associates Air Quality Numbers to standard Air QUality Colors
    let airQuality =  undefined // creating the variable airQuality to mutate it later
    if (airValue >= 100) {
        airQuality = 'Orange'
    } else if(airValue >= 50 && airValue < 100) {
        airQuality = 'Yellow'
    } else {
        airQuality = 'Green'
    }
}
let workoutSummarizer = function (airValue, exercise = 'Gym') { // By Default the exercise is the gym
    let airQuality = AirQualityChecker(airValue) // This line runs the AirQualityChecker function to give us the Air Quality

    if (exercise == 'Jog' && airQuality == 'Orange') {
        summary = 'Air Quality is bad, dont go for a jog'
    } else if(exercise == "Jog" && airQuality == 'Yellow') {
        summary = 'Air Quality is okay, consider going to the gym'
    } else if(exercise == "Jog" && airQuality == 'Green') {
        summary = 'Air Quality is good, go for a run!'
    } else {
        summary = 'Everyday is a good day for the gym!'
    }
    

    showOnPage('Air Quality ---> ' + airValue)
    showOnPage('Air Quality Color ---> ' + airQuality)
    showOnPage('Workout ---> ' + exercise)
    showOnPage('Recommendation ---> ' + summary)
}

workoutSummarizer(99, 'Jog')
