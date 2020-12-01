const arrayOfCountries = [
   { name: 'China', population: 1386395000 },
   { name: 'Costa Rica', population: 4905000 },
   { name: 'Brazil', population: 209288000 },
   { name: 'France', population: 67118000 },
   { name: 'Germany', population: 82695000 },
   { name: 'Finland', population: 5511300 },
   { name: 'Canada', population: 36290000 },
   { name: 'United States', population: 325700000 }
];
var arrlen=arrayOfCountries.length;
//using for each, loop through the arrayOfCountries
var arrcount=arrayOfCountries.forEach((name, i) => {
   console.log(name);
   return arrayOfCountries.name;
});
console.log(arrcount);
//using map, return an array of only the country names

var Arr = arrayOfCountries.map(function (countrie, index, array) {
    return countrie.name; 
});
console.log(Arr);

//using filter, return an array of countries with a population of over 10,000,000
var Arrfilt = arrayOfCountries.filter((contrie) => contrie.population > 10000000);
console.log(Arrfilt);
//using reduce, return an integer adding up all of the populations

var Arr2 = arrayOfCountries.map(function (countrie, index, array) {
    return countrie.population; 
});
const total = Arr2.reduce((a, b) => a + b);
console.log(total);

//using reduce and filter, find the average of the countries populations for only the countries in the population array
var AV = total/8;
console.log('average:'+AV)