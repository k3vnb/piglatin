// break phrase into individual words
// store words into an array
// remove first character from word and put it on the end
// if vowel is first letter, add -way to end
// control for qu, sh, ch, th
// add -ay to end of new word

$(document).ready(function(){
  $("#formTranslate").submit(function(event){
        event.preventDefault();
    var vowels = ["a","e","i","o","u"];
    var compoundLetters = ["qu", "sh", "ch", "th", "sch"]
    var phraseString = $("input#phrase").val().toLowerCase();
    // var first = phraseString.slice(0,1);
    // var firstTwo = phraseString.slice(0,2);
    var phraseArray = phraseString.split(" ");
    var wordSlice = phraseArray.slice(0,1);
    var wordSliceString = wordSlice.toString();
    // var wordWithoutFirst = wordSliceString.slice(1);
    // var wordWithoutFirstTwo = wordSliceString.slice(2);
    var letterSlice = Array.from(wordSlice[0]);


// var reply = phraseArray.map(function(word) {
phraseArray.forEach(function(word) {
  var first = word.slice(0,1);
  var firstTwo = word.slice(0,2);
  var wordWithoutFirst = word.slice(1);
  var wordWithoutFirstTwo = word.slice(2);

// (first === "a" || first === "e" || first === "i" || first === "o" || first === "u")
if  (vowels.indexOf(word[0]) > -1) {
  console.log(word.concat("way"));
  $(".placeholder").append(word.concat("way "));
} else if (first <= 9) {
  console.log(word);
  $(".placeholder").append(word + " ");
} else if (firstTwo === "qu" || firstTwo === "sh" || firstTwo === "ch" || firstTwo === "th") {
  console.log(wordWithoutFirstTwo.concat(firstTwo + "ay"));
  $(".placeholder").append(wordWithoutFirstTwo.concat(firstTwo + "ay "));
} else if (first !== "a" && first !== "e" && first !== "i" && first !== "o" && first !== "u") {
  console.log(wordWithoutFirst.concat(first + "ay"));
  $(".placeholder").append(wordWithoutFirst.concat(first + "ay "));
};
});

// (var index = 0; index < phraseArray.length; index++)
    // console.log("first " + first);
    // console.log("phraseArray " + phraseArray);
    // console.log("wordSlice " + wordSlice);
    // console.log("letterSlice " +letterSlice);
    // console.log("wordWithoutFirst " + wordWithoutFirst);


  /////////////////////////////
// if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
//   console.log(phraseArray.concat() + "way");
// } else if (firstTwo === "qu" || firstTwo === "sh" || firstTwo === "ch" || firstTwo === "th") {
//   console.log(wordWithoutFirstTwo.concat(firstTwo + "ay"));
// } else if (first !== "a" || first !== "e" || first !== "i" || first !== "o" || first !== "u") {
//   console.log(wordWithoutFirst.concat(first + "ay"));
// }

  });//submit function end
});//doc ready end
