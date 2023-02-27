   //Get all the countries with a population of less than 2 lakhs using Filter function
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);

var ss = result.filter(ele =>ele.population<100000);
console.log(ss.map(ele =>ele.name));
}

   //Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);
    
let asianCountries = result.filter(country =>country.region === "Asia");
console.log(asianCountries.map(country =>country.name));
}

   //Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);

    result.forEach(country =>{
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
      });
    }

    //Print the total population of countries using reduce function
    var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);

let totalPopulation = result.reduce((acc, country) =>acc+country.population, 0);
console.log(`The total population of all countries is: ${totalPopulation}`);
}

   //Print the country which uses US Dollars as currency
   var request=new XMLHttpRequest();
   request.open ("GET","https://restcountries.com/v2/all");
   request.send();
   request.onload=function(){
       var result= JSON.parse(request.response);
       console.log(result);

    let usdCountries = result.filter(country =>country.currencies === "USD");
    console.log(`The following countries use US dollars as their currency: ${usdCountries.map(country => country.name)}`);
   }