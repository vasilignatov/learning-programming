let line = 'WN269 Delaware';
let flight = line.slice(0, line.indexOf(' ')) 
let dest = (line.split(flight + ' '))[1]
console.log(flight);
console.log(dest);
