const express = require("express");
var api = "AIzaSyAB8YlhrDbtkoIfgWbN9bMONr13g6d7HkA";
var googleTranslate = require("google-translate")(api);

const app = express();
const port = 3500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is your Text Translation API!");
});

// Endpoint to translate text
app.post("/translate", (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res
      .status(400)
      .json({ error: 'Both "text" and "targetLanguage" are required.' });
  }

  // Check if the target language is supported
  const supportedLanguages = ["es", "hi", "ta"];

  if (!supportedLanguages.includes(targetLanguage)) {
    return res.status(400).json({
      error: 'The target language "' + targetLanguage + '" is not supported.',
    });
  }

  googleTranslate.translate(text, targetLanguage, function (err, translation) {
    res.json({ translatedText: translation.translatedText });
    console.log("Spanish :>", translation.translatedText);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
