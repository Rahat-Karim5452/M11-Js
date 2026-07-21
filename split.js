//*1.Split String
const companiesStr = "Tesla SpaceX Paypal Goggle Nexus TATA";
const companies = companiesStr.split("");
console.log(companies);
/* //O/p :  'T', 'e', 's', 'l', 'a', ' ', 'S',
  'p', 'a', 'c', 'e', 'X', ' ', 'P',
  'a', 'y', 'p', 'a', 'l', ' ', 'G',
  'o', 'g', 'g', 'l', 'e', ' ', 'N',
  'e', 'x', 'u', 's', ' ', 'T', 'A',
  'T', 'A' */

//*2.Split String
const companiesStr = "Tesla SpaceX Paypal Goggle Nexus TATA";
const companies = companiesStr.split(" ");
console.log(companies);
//O/p: 'Tesla', 'SpaceX', 'Paypal', 'Goggle', 'Nexus', 'TATA'
