const companies = [
    {name: "company 1", category: "Finance", start:1981, end:2003},
    {name: "company 2", category: "Retail", start:1982, end:2007},
    {name: "company 3", category: "Auto", start:1989, end:2013},
    {name: "company 4", category: "Retail", start:1986, end:2003},
    {name: "company 5", category: "technology", start:1991, end:2006},
    {name: "company 6", category: "Finance", start:1961, end:2004},
    {name: "company 7", category: "Auto", start:1985, end:2012},
    {name: "company 8", category: "Technology", start:1988, end:2002},
    {name: "company 9", category: "Retail", start:1989, end:2005},
];
 const ages =[33,12,20,16,17,5,25,54,61,45,13,23,13,53,15];
// for(let i=0,i<companies.length;i++){
//     console.log(companies[i]);
// }
companies.forEach(function(company){ //call back function
    console.log(company.end);
})