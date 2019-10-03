const city = process.argv[2];
// const city = 'London';
// console.log(city)


function weather(city) {
    if (city==='Istanbul') {
        return '36C / 67F';
    } else if (city==='London') {
        return "13C / 55F";
    } else if (city==='NYC') {
        return "12C / 55F";
    } else if (city==='Tokyo'){
        return "24C / 75F";
    } else if (city==='HongKong'){
        return "29C / 84F";
    } else if (city=='Paris'){
        return "12C / 54F";
    } else if (city==='Moscow'){
        return "16C / 60F";
    } else if (city==='Shanghai'){
        return "23C / 74F"
    } else if (city==='Barcelona'){
        return "22C / 72F"
    } else if (city==='Mumbai'){
        return "28C / 82F"
    } else if (city==='Rome'){
        return "16C / 60F"
    } else if (city==='MexicoCity'){
        return "22C / 71F"
    } else if (city==='Tashkent'){
        return "17C / 63F"
    } else 
        return "Apologies. Unfortunately we have not been able to obtain the weather information for your chosen city. Please try again later. Much love."

}

// weather(userInput);


console.log(weather(city)); 



