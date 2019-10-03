const city = process.argv[2];
// const city = 'London';
// console.log(city)


function weather(city) {
    if (city==='Istanbul') {
        return '36C + 67F';
    } else if (city==='London') {
        return "13C 55F";
    } else if (city==='NYC') {
        return "12C + 55F";
    } else if (city==='Tokyo'){
        return "24C 75F";
    } else if (city==='HongKong'){
        return "29C 84F";
    } else if (city=='Paris'){
        return "12C 54F";
    } else if (city==='Moscow'){
        return "16C 60F";
    } else if (city==='Shanghai'){
        return "23C 74F"
    } else if (city==='Barcelona'){
        return "22C 72F"
    } else 
        return "Sorry! I don't know about that city."
    
}

// weather(userInput);


console.log(weather(London)); 



