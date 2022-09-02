const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};
const airquality = {
    red: 'red',
    org: 'orange',
    ylw: 'yellow',
    grn: 'green'
}
const AirQualityChecker = function (airNumber) { // This Function associates Air Quality Numbers to standard Air QUality Colors
    if (ai'Green'Number >= 100) {
        return airquality.red
    } else if(airNumber >= 50 && airNumber < 100) {
        return airquality.yellow
    } else {
        return airquality.green
    }
}
const workoutSummarizer = function (airValue, exercise = 'Gym') { // By Default the exercise is the gym
    const airQuality = AirQualityChecker(airValue) // This line runs the AirQualityChecker function to give us the Air Quality
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
