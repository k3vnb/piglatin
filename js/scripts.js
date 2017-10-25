
$(document).ready(function(){
  $("#formTranslate").submit(function(event){
    event.preventDefault();

    var phraseString = $("input#phrase").val().toLowerCase();
    var vowels = ["a","e","i","o","u"];
    var phraseArray = phraseString.split(" ");
    var wordSlice = phraseArray.slice(0,1);
    var wordSliceString = wordSlice.toString();
    var letterSlice = Array.from(wordSlice[0]);

phraseArray.forEach(function(word) {
  var first = word.slice(0,1);
  var firstTwo = word.slice(0,2);
  var wordWithoutFirst = word.slice(1);
  var wordWithoutFirstTwo = word.slice(2);

if  (vowels.indexOf(word[0]) > -1) {
  word = word.concat("way ");
  // console.log(word + "vowel")
  // $(".placeholder").append(word.concat("way "));
} else if (first <= 9) {
  word = word.concat(" ");
  // console.log(word + "number")
  // $(".placeholder").append(word + " ");
} else if (firstTwo === "qu" || firstTwo === "sh" || firstTwo === "ch" || firstTwo === "th") {
  word = wordWithoutFirstTwo.concat(firstTwo + "ay ");
  // console.log(word + "qushch");
  // $(".placeholder").append(wordWithoutFirstTwo.concat(firstTwo + "ay "));
} else if (first !== "a" && first !== "e" && first !== "i" && first !== "o" && first !== "u") {
  word = wordWithoutFirst.concat(first + "ay ");
  // console.log(word + "everything else");
  // $(".placeholder").append(wordWithoutFirst.concat(first + "ay "));

};

$(".placeholder").append(word);
});

  });//submit function end
});//doc ready end
