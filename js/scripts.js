// break phrase into individual words
// store words into an array
// remove first character from word and put it on the end
// if vowel is first letter, add -way to end
// control for qu, sh, ch, th
// add -ay to end of new word

$(document).ready(function(){
  $("#formTranslate").submit(function(event){
        event.preventDefault();
    var vowels = ["a","e","i","o","u"]
    var phraseString = $("input#phrase").val();
    var first = phraseString.slice(0,1);
    var firstTwo = phraseString.slice(0,2);
    var phraseArray = phraseString.split(" ");
    var wordSlice = phraseArray.slice(0,1);
    var wordSliceString = wordSlice.toString();
    var wordWithoutFirst = wordSliceString.slice(1);
    var wordWithoutFirstTwo = wordSliceString.slice(2);
    var letterSlice = Array.from(wordSlice[0]);


    console.log("first " + first);
    console.log("phraseArray " + phraseArray);
    console.log("wordSlice " + wordSlice);
    console.log("letterSlice " +letterSlice);
    console.log("wordWithoutFirst " + wordWithoutFirst);

    letterSlice



  /////////////////////////////
if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
  console.log(phraseArray.concat() + "way");
} else if (firstTwo === "qu" || firstTwo === "sh" || firstTwo === "ch" || firstTwo === "th") {
  console.log(wordWithoutFirstTwo.concat(firstTwo + "ay"));
} else if (first !== "a" || first !== "e" || first !== "i" || first !== "o" || first !== "u") {
  console.log(wordWithoutFirst.concat(first + "ay"));
}

  });//submit function end
});//doc ready end
