const city = process.argv[2].toLowerCase();
const temperatureType = process.argv[3];
// console.log('CITY: ',city)
// console.log('TEMP: ', temperatureType)



function weather(city, temperatureType) {
    switch(city){
        case 'istanbul':
            return temperatureType === 'fahrenheit' ? 'Istanbul 71F' : 'Istanbul 22C';
        case 'london':
            return temperatureType === 'fahrenheit' ? 'London 55F' : 'London 13C';
        case 'nyc':
            return temperatureType === 'fahrenheit' ? 'New York 73F' : 'New York 23C';
        case 'tokyo':
            return temperatureType === 'fahrenheit' ? 'Tokyo 75F' : 'Tokyo 24C';
        case 'hongkong':
            return temperatureType === 'fahrenheit' ? 'Hong Kong 84F' : 'Hong Kong 29C';
        case 'paris':
            return temperatureType === 'fahrenheit' ? 'Paris 54F' : 'Paris 12C';
        case 'moscow':
            return temperatureType === 'fahrenheit' ? 'Moscow 60F' : 'Moscow 16C';
        case 'shanghai':
            return temperatureType === 'fahrenheit' ? 'Shanghai 74F' : 'Shanghai 23C';
        case 'barcelona':
            return temperatureType === 'fahrenheit' ? 'Barcelona 72F' : 'Barcelona 22C';
        case 'mumbai':
            return temperatureType === 'fahrenheit' ? 'Mumbai 82F' : 'Mumbai 28C';
        case 'rome':
            return temperatureType === 'fahrenheit' ? 'Rome 60F' : 'Rome 16C';
        case 'ankara':
            return temperatureType === 'fahrenheit' ? 'Ankara 67F' : 'Ankara 19C';
        case 'tashkent':
            return temperatureType === 'fahrenheit' ? 'Tashkent 63F' : 'Tashkent 17C';
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



