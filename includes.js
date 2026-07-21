//*1.For Checking: includes
const email = "abc@def.com";
if (email.includes(".com")) {
  console.log("Has Dot com");
} else {
  console.log("Hasn't Dot");
}

//*2.For Checking: endsWith()
const fileName = "something.pdf";
console.log(fileName.endsWith(".pdf")); //O/p : true

//*3.For Checking: startsWith()
const twitterHandle = "@elonMask";
console.log(twitterHandle.startsWith("@")); //O/p : true
