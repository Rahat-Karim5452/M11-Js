/* //*1.String are Case-sensative
const subject = "chemistry";
const book = "Chemistry";
if (subject === book) {
  console.log("Book and Subject are Same");
} else {
  console.log("Not same");
}

//*1.Solution: Use tolowerCase() or toUpperCase()
if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Book and Subject are Same");
} else {
  console.log("Not same");
}
 */

/* //*2.Comparison
const emailUserProvided = "goni@Mia.com";
const emailUSavedInDatabase = "goni@mia.com";
if (emailUserProvided.toLowerCase() === emailUSavedInDatabase.toLowerCase()) {
  console.log("Welcome to the website!");
} else {
  console.log("Enter Again");
}
 */

//*3.Unnecessary Space in First and Last
const emailUserProvided = "goni@mia.com  ";
const emailUSavedInDatabase = "goni@mia.com";
if (emailUserProvided.trim() === emailUSavedInDatabase) {
  console.log("Welcome to the website!");
} else {
  console.log("Enter Again");
}
//*4.Unnecessary Space in First and Last And Case (both)
const emailUserProvided = "goni@Mia.com  ";
const emailUSavedInDatabase = "goni@mia.com";
if (emailUserProvided.trim().toLowerCase() === emailUSavedInDatabase) {
  console.log("Welcome to the website!");
} else {
  console.log("Enter Again");
}
