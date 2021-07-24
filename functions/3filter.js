const companies = [
    {name: "company zoho", category: "Finance", start:1981, end:2003},
    {name: "company 2", category: "Retail", start:1982, end:2007},
    {name: "company 3", category: "Auto", start:1989, end:2013},
    {name: "company 4", category: "Retail", start:1986, end:2003},
    {name: "company 5", category: "technology", start:1991, end:2006},
    {name: "company 6", category: "Finance", start:1961, end:2004},
    {name: "company 7", category: "Auto", start:1985, end:2012},
    {name: "company 8", category: "Technology", start:1988, end:2002},
    {name: "company 9", category: "Retail", start:1989, end:2005},
];

const ages = [ 33, 12, 23, 43, 16, 18, 64, 86, 76, 91, 90, 21, 43];

//filter
// let canDrink = [];
// for(let i=0; i < ages.length; i++)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// {
//     if(ages[i]>= 21){
//         canDrink.push(ages[i]);
//     }
// }

// get filtered ages
// const canDrink = ages.filter(function(age){
//     if(age >= 21 ){
//         return true;
//     }
// });
const canDrink = ages.filter(age => age >= 21);
console.log('Filtered ages = ',canDrink);

// get retail compaies 
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//     return true;
//     }
// }) 
// or 
const retailCompanies = companies.filter(company => company.category ==='Auto');
console.log('RetailCompanies = ',retailCompanies);

//get 80s companies
 const eightiescompanies = companies.filter(company => company.start >= '1980' && company.start <=1990 );
 console.log('80scompanies = ',eightiescompanies)


 //get companies that lasted 10 years or more
const latedTenYears = companies.filter(company => (company.end - company.start > 10));
console.log('LastedTenYearCompanies =',latedTenYears);

