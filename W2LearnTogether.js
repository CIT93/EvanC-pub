let airValue = 99

if (airValue >= 100) {
    airQuality = 'Orange'
} else if(airValue >= 50 && airValue < 100) {
    airQuality = 'Yellow'
} else {
    airQuality = 'Green'
}
    
let Exercise = 'Jog'

if (Exercise == 'Jog' && airQuality == 'Orange') {
    console.log('Air Quality is bad, dont go for a jog')
} else if(Exercise == "Jog" && airQuality == 'Yellow') {
    console.log('Air Quality is okay, consider going to the gym')
} else if(Exercise == "Jog" && airQuality == 'Green') {
    console.log('Air Quality is good, go for a run!')
} else {
    console.log('Everyday is a good day for the gym!')
}

