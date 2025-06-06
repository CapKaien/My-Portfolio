let question1_section5 = "Is the candidate running for president, vice president, or senator?";

function startSection5Questions() {
  currentSection = "section5";
  step = 1;  // Ensure step starts at 1
  falseCounter = 0;  // Ensure false counter starts at 0
  document.getElementById("questionText").innerHTML = question1_section5;
  document.getElementById("questionContainer").style.display = "block";
  document.querySelectorAll(".scenario-section").forEach((section) => section.style.display = "none");

  window.handleAnswer = function (answer) {
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Did the candidate commence the electoral campaign more than 90 days before the election excluding Maundy Thursday and Good Friday?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the candidate running for member of the House of Representatives or Local Government Units (LGU)?";
        step = 5;
      }
    } else if (step === 2) {
      document.getElementById("questionText").innerHTML =
          "Did the candidate end the electoral campaign much later than 30 days after the election?";
      if (answer === "yes") {
        step = 3;
      } else {
        step = 3;
        falseCounter++;
      }
    } else if (step === 3) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      if (answer === "yes") {
        step = 4;
      } else {
        step = 4;
        falseCounter++;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.\nPenalty: Sentenced to deportation which shall be enforced after the prison term has been served.".replace(/\n/g, "<br>");
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.".replace(/\n/g, "<br>");
        showResultButtons();
      }

      if (falseCounter >= 2) {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Did the candidate commence the electoral campaign more than 45 days before the election excluding Maundy Thursday and Good Friday?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    }
  };
}
