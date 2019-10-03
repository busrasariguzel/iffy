const city = process.argv[2].toLowerCase();
const temperatureType = process.argv[3];
// console.log('CITY: ',city)
// console.log('TEMP: ', temperatureType)



function weather(city, temperatureType) {
    switch(city){
        case 'istanbul':
            return temperatureType === 'fahrenheit' ? 'Istanbul 71F' : 'Istanbul 22C';
        case 'london':
            return '13C / 55F';
        case 'nyc':
            return '13C / 55F';
        case 'tokyo':
            return '13C / 55F';
        case 'hongkong':
            return '13C / 55F';
        case 'paris':
            return '13C / 55F';
        case 'moscow':
            return '13C / 55F';
        case 'shanghai':
            return '13C / 55F';
        case 'barcelona':
            return '13C / 55F';
        case 'mumbai':
            return '13C / 55F';
        case 'rome':
            return '13C / 55F';  
        case 'mexicocity':
            return '13C / 55F';   
        case 'tashkent':
            return '13C / 55F';
        default: "Apologies. Unfortunately we have not been able to obtain the weather information for your chosen city. Please try again later. Much love."
    }
}

// weather(userInput);


// if (city.toLowerCase()==='istanbul') {
//     return '36C / 67F';
// } else if (city.toLowerCase()==='london') {
//     return "13C / 55F";
// } else if (city.toLowerCase()==='nyc') {
//     return "12C / 55F";
// } else if (city.toLowerCase()==='tokyo'){
//     return "24C / 75F";
// } else if (city.toLowerCase()==='hong kong'){
//     return "29C / 84F";
// } else if (city.toLowerCase()=='paris'){
//     return "12C / 54F";
// } else if (city.toLowerCase()==='moscow'){
//     return "16C / 60F";
// } else if (city.toLowerCase()==='shanghai'){
//     return "23C / 74F"
// } else if (city.toLowerCase()==='barcelona'){
//     return "22C / 72F"
// } else if (city.toLowerCase()==='mumbai'){
//     return "28C / 82F"
// } else if (city.toLowerCase()==='rome'){
//     return "16C / 60F"
// } else if (city.toLowerCase()==='mexicoCity'){
//     return "22C / 71F"
// } else if (city.toLowerCase()==='tashkent'){
//     return "17C / 63F"
// } else {
//     return "Apologies. Unfortunately we have not been able to obtain the weather information for your chosen city. Please try again later. Much love."
// }
console.log(weather(city, temperatureType)); 



