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

//map
//create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

// for ages
const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(ageMap);
