$(document).ready(function(){
  $("#formTranslate").submit(function(event){
    event.preventDefault();

  // var pigLatin = function(phraseString) {
    var phraseString = $("input#phrase").val().toLowerCase();
    var vowels = ["a","e","i","o","u"];
    var phraseArray = phraseString.split(" ");
    var wordSlice = phraseArray.slice(0,1);
    var wordSliceString = wordSlice.toString();
    var letterSlice = Array.from(wordSlice[0]);

  // var sentence = [];
  phraseArray.forEach(function(word) {
  var first = word.slice(0,1);
  var firstTwo = word.slice(0,2);
  var wordWithoutFirst = word.slice(1);
  var wordWithoutFirstTwo = word.slice(2);


if  (vowels.indexOf(word[0]) > -1) {
  word = word.concat("way ");

  // sentence.push(word1);
  // alert(word1);
} else if (first <= 9) {
  word = word.concat(" ");
  // sentence.push(word2);
  // alert(word2);
} else if (firstTwo === "qu" || firstTwo === "sh" || firstTwo === "ch" || firstTwo === "th") {
  word = wordWithoutFirstTwo.concat(firstTwo + "ay ");
  // sentence.push(word3);
  // alert(word3);
} else if (first !== "a" && first !== "e" && first !== "i" && first !== "o" && first !== "u") {
  word = wordWithoutFirst.concat(first + "ay ");
  // sentence.push(word4);
  // alert(word4);
  // return sentence.join(" ");
  // console.log(sentence);
}; //end of else if

 $(".placeholder").append(word);
}); //end of forEach loop

  // alert(sentence);
  });//submit function end
});//doc ready end
