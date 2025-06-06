let question1_section24 = "Did the Chairman of the board of election inspectors affix his/her signature at the back of the official ballot at the presence of the voter?";

function startSection24Questions() {
  currentSection = "section24";
  let step = 1;
  let falseCounter = 0;

  // Define penalty messages to avoid redundancy
  const penaltyBase = "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.";
  const penaltyWithDeportation = penaltyBase + "\nPenalty: Sentenced to deportation which shall be enforced after the prison term has been served.";
  const noPenalty = "No Penalty";

  document.getElementById("questionText").innerHTML = question1_section24;
  document.getElementById("questionContainer").style.display = "block";
  document.querySelectorAll(".scenario-section").forEach(section => section.style.display = "none");

  window.handleAnswer = function(answer) {
    switch (step) {
      case 1:
        document.getElementById("questionText").innerHTML =
          "Is the ballot with signature of the chairman of the board of election been authenticated?";
        if (answer === "yes") {
          falseCounter++;
        }
        step = 2;
        break;
      case 2:
        document.getElementById("questionText").innerHTML =
          "Are there any foreigners involved in the political party?";
        if (answer === "yes") {
          falseCounter++;
        }
        step = 3;
        break;
      case 3:
        if (falseCounter >= 2) {
          document.getElementById("questionText").innerHTML = noPenalty;
        } else if (answer === "yes") {
          document.getElementById("questionText").innerHTML = penaltyWithDeportation.replace(/\n/g, "<br>");
        } else {
          document.getElementById("questionText").innerHTML = penaltyBase.replace(/\n/g, "<br>");
        }
        showResultButtons();
        break;
    }
  };
}
