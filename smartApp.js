const city = process.argv[2];
// const city = 'London';
// console.log(city)


function weather(city) {
    if (city.toLowerCase()==='istanbul') {
        return '36C / 67F';
    } else if (city.toLowerCase()==='london') {
        return "13C / 55F";
    } else if (city.toLowerCase()==='nyc') {
        return "12C / 55F";
    } else if (city.toLowerCase()==='tokyo'){
        return "24C / 75F";
    } else if (city.toLowerCase()==='hongkong'){
        return "29C / 84F";
    } else if (city.toLowerCase()=='paris'){
        return "12C / 54F";
    } else if (city.toLowerCase()==='moscow'){
        return "16C / 60F";
    } else if (city.toLowerCase()==='shanghai'){
        return "23C / 74F"
    } else if (city.toLowerCase()==='barcelona'){
        return "22C / 72F"
    } else if (city.toLowerCase()==='mumbai'){
        return "28C / 82F"
    } else if (city.toLowerCase()==='rome'){
        return "16C / 60F"
    } else if (city.toLowerCase()==='mexicoCity'){
        return "22C / 71F"
    } else if (city.toLowerCase()==='tashkent'){
        return "17C / 63F"
    } else 
        return "Apologies. Unfortunately we have not been able to obtain the weather information for your chosen city. Please try again later. Much love."

}

// weather(userInput);


console.log(weather(city)); 



