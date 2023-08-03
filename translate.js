var api = "AIzaSyAB8YlhrDbtkoIfgWbN9bMONr13g6d7HkA";
var googleTranslate = require("google-translate")(api);

var text = "I am using google translator to convert this text to spanish";
console.log("English :>", text);
googleTranslate.translate(text, "es", function (err, translation) {
  console.log("Spanish :>", translation.translatedText);
});
