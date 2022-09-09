const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
};

const AirQualityChecker = function (airNumber) { // This Function associates Air Quality Numbers to standard Air QUality Colors
    if (airNumber >= 100) {
        return 'Orange'
    } else if(airNumber >= 50 && airNumber < 100) {
        return 'Yellow'
    } else {
        return 'Green'
    }
}


const workoutCheck = function (workout, airColor) {
    workoutApproved = []
    for (const n of workout ) {
        if (n == 'Gym')
        workoutApproved.push(n)
        else if (airColor == 'Yellow') {
            workoutApproved.push(`${n} (At Your Own Discretion)`)
        }
        else {
            continue
        }
    }
    return workoutApproved
}

const workoutSummarizer = function (airValue, exercise) { // By Default the exercise is the gym
    let airQuality = AirQualityChecker(airValue) // This line runs the AirQualityChecker function to give us the Air Quality
    let approved = workoutCheck(exercise, airQuality)
    let workout = {
        exer: `${exercise}`,
        airVal: `${airValue}`,
        airQual: `${airQuality}`,
        recommend: approved

    }
    showOnPage('Air Quality ---> ' + workout.airVal)
    showOnPage('Air Quality Color ---> ' + workout.airQual)
    showOnPage('Workout ---> ' + workout.exer)
    showOnPage('Recommended Workouts ---> ' + workout.recommend)
}

workouts = ['Gym ', 'Jog ', , 'Hike ', 'Football ']

workoutSummarizer(99, workouts)
