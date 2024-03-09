<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Word Scramble Game | CodingNepal</title>
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="words.js" defer></script>
  <script src="script.js" defer></script>
</head>

<body>
  <div class="container">
    <h2>Word Scramble</h2>
    <div class="content">
      <p class="word"></p>
      <div class="details">
        <p class="hint">Hint: <span></span></p>
        <p class="time">Time Left: <span><b>30</b>s</span></p>
      </div>
      <input type="text" spellcheck="false" placeholder="Enter a valid word">
      <div class="score-container">
        <p>Score: <span class="score" id="score">0</span></p>
      </div>
      <div class="buttons">
        <button class="refresh-word">Refresh Word</button>
        <button class="check-word">Check Word</button>
      </div>
    </div>
  </div>

  <div class="modal" id="resultModal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal()">&times;</span>
      <p id="resultMessage"></p>
    </div>
  </div>
</body>

</html>
