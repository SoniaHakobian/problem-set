//Write a method to replace all spaces in a string with ’%20  
//You may assume that the string has suf cient space at the end to hold the additional characters,
//and that you are given the “true” length of the string. 


function replace(str)
{
  let replaced = str.split(" ").join('%20');
  return replaced;
}
replace('The basis of optimism is sheer terror');
