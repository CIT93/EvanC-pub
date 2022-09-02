const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

let workoutToday = {
    exercise: 'Jog',
    airQuality: 'green'
}
const AirQualityChecker = function (airNumber) { // This Function associates Air Quality Numbers to standard Air QUality Colors
    if (airNumber >= 100) {
        workoutToday.airQuality = 'Orange'
    } else if(airNumber >= 50 && airNumber < 100) {
        workoutToday.airQuality = 'Yellow'
    } else {
        workoutToday.airQuality = 'Green'
    }
}


const workoutSummarizer = function (airValue, exercise = 'Gym') { // By Default the exercise is the gym
    let airQuality = AirQualityChecker(airValue) // This line runs the AirQualityChecker function to give us the Air Quality
    let workout = {
        exer: `${exercise}`,
        airVal: `${airValue}`,
        airQual: `${airQuality}`,
        sum: undefined

    }
        if (workoutToday.exercise == 'Jog' && workoutToday.airQuality  == 'Orange') {
            workout.sum = 'Air Quality is bad, dont go for a jog'
        } else if(workoutToday.exercise == "Jog" && workoutToday.airQuality == 'Yellow') {
            workout.sum = 'Air Quality is okay, consider going to the gym'
        } else if(workoutToday.exercise == "Jog" && workoutToday.airQuality == 'Green') {
            workout.sum = 'Air Quality is good, go for a run!'
        } else {
            workout.sum = 'Everyday is a good day for the gym!'
        }
    
    showOnPage('Air Quality ---> ' + workout.airVal)
    showOnPage('Air Quality Color ---> ' + workout.airQual)
    showOnPage('Workout ---> ' + workout.exer)
    showOnPage('Recommendation ---> ' + workout.sum)
}

workoutSummarizer(99, 'Jog')
