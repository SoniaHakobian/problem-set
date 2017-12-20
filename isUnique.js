// Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?


function isUnique(str) {
 // return true if all characters are unique
 let word = str.split("");
 var i, j;
 for(i=0; i < word.length; i++)
 {
   for(j=i+1; j < word.length; j++)
   {
     if(word[i] == word[j])
     return false;
   }
 }
 // else false
 return true;
}
isUnique('sonia');
