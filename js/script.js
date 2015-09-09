var pigLatin = function(message) {
  var emptyArr = new Array();
  var splitSentence = message.split(" ");
  var length = splitSentence.length;
  for (var i = 0; i < length; i++) {
    var splitString = splitSentence[i].split("");
    if (vowelCheck(splitString)) {
      var splitStringLength = splitString.length;
      splitString = splitString.splice(1,splitStringLength)
      splitString.push("a");
      splitString.push("y");
      newString = splitString.join("");
      emptyArr.push(newString);
    } else if (splitString[0] === 'q') {
      var splitStringLength = splitString.length;
      var splitString = splitString.splice(2,splitStringLength);
      splitString.push("q");
      splitString.push("u");
      splitString.push("a");
      splitString.push("y");
      newString = splitString.join("");
      emptyArr.push(newString);
    } else {
      var splitStringLength = splitString.length;
      var firstLetter = splitString[0];
      var splitString = splitString.splice(1,splitStringLength);
      splitString.push(firstLetter);
      splitString.push("a");
      splitString.push("y");
      newArray = splitString.join("");
      emptyArr.push(newArray);
    };
  };
  var sentence = emptyArr.join(" ");
  return sentence;
};

var vowelCheck = function(splitStringArray) {
  var firstLetter = splitStringArray[0];
  var vowels = ['a','e','i','o','u','y'];
  for (var i = 0; i < 6; i++) {
    if (firstLetter === vowels[i]) {
      return true;
    };
  };
  return false;
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var message = $("#pig-latin-input").val();
    var result = pigLatin(message);



    $('#result').show();
    $("#pig-latin-word").text(result);
    event.preventDefault();
  });
});
