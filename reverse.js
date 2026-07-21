//*1.Reverse String :
const commitment = "I will work hard and will never give up.";
//reverse  this = '.pu evig reven'

const parts = commitment.split("");
// console.log(parts);
const reversedParts = parts.reverse();
// console.log(reversedParts);
const reversedCommitment = reversedParts.join("");
//Join Korte Hbe empty String Diye
console.log(reversedCommitment); //O/p:.pu evig reven lliw dna drah krow lliw I

//*2.Using For loop for Reverse
let reverseCom = "";
for (const letter of commitment) {
  reverseCom = letter + reverseCom;
  console.log(letter, "=>", reverseCom);
}
console.log(reverseCom);
//O/P:
/* I => I
  =>  I
w => w I
i => iw I
l => liw I
l => lliw I
................
.pu evig reven lliw dna drah krow lliw I
................
*/
