(function () {
  // Variables
  var bearSafetyTipButton = document.querySelector(
    "#bear-safety-tips-module-button"
  );
  var bearSafetyTipTextArea = document.querySelector(
    "#bear-safety-tips-module-text-area"
  );
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  function updateBearSafetyTip() {
    if (bearSafetyTipTextArea) {
      fetch(
        "https://www.bellsonbears.com/_hcms/api/safety-tips",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          bearSafetyTipTextArea.innerHTML = result;
        })
        .catch((error) => console.log("error", error));
    }
  }

  // Show initial safety tip
  updateBearSafetyTip();

  if (bearSafetyTipButton) {
    bearSafetyTipButton.addEventListener("click", updateBearSafetyTip);
  }
})();
