(function () {
  // Variables
  var bearSafetyTipButton = document.querySelector(
    "#bear-safety-tips-module-button"
  );
  var bearSafetyTipTextArea = document.querySelector(
    "#bear-safety-tips-module-text-area"
  );
  var bearSafetyTips = [
    "Bears primarily kill for sport. You are still in danger even if the bear is not hungry.",
    "Bears are not capable of love. You mean nothing to them.",
    "Bears rely on stealth. Their teeth and claws are useless if they can't get close to their prey.",
    "Bears almost always work in teams. The first bear is typically the decoy.",
    "Unless they have the element of surprise, bears are actually lousy fighters.",
    "Never attempt to bell a bear without professional help. It takes years of practice to become a beller.",
  ];

  // Avoid showing the same safety tip twice
  var currentTipIndex;

  // Functions
  function getRandomBearSafetyTip() {
    var randomIndex;

    while (true) {
      randomIndex = Math.floor(Math.random() * bearSafetyTips.length);
      if (randomIndex !== currentTipIndex) {
        break;
      }
    }

    currentTipIndex = randomIndex;
    return bearSafetyTips[randomIndex];
  }

  function updateBearSafetyTip() {
    if (bearSafetyTipTextArea) {
      bearSafetyTipTextArea.innerHTML = getRandomBearSafetyTip();
    }
  }

  // Show initial safety tip
  updateBearSafetyTip();

  if (bearSafetyTipButton) {
    bearSafetyTipButton.addEventListener("click", updateBearSafetyTip);
  }
})();
