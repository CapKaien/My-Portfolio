let question1_section13 =
  "Did the candidate exceed the authorized spending limit for the election campaign?";

function startSection13Questions() {
  currentSection = "section13";
  step = 1;
  falseCounter = 0;
  counterMax = 0;

  document.getElementById("questionText").innerHTML = question1_section13;
  document.getElementById("questionContainer").style.display = "block";
  document.querySelectorAll(".scenario-section").forEach((section) => section.style.display = "none");

  // Define the penalty text once
  const penaltyText = "Penalty: 1-6 years imprisonment is not subject to probation<br>" +
    "Penalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.<br>" +
    "Penalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.";

  const penaltyTextWithDeportation = penaltyText + "<br>Penalty: Sentenced to deportation which shall be enforced after the prison term has been served.";
  
  const antiGraftText = "Corollary: Anti-Graft and Corrupt Practices Act (Republic Act No. 3019)";

  window.handleAnswer = function (answer) {
    const incrementCounters = () => {
      counterMax++;
      if (answer === "no") falseCounter++;
    };

    if (step === 1) {
      document.getElementById("questionText").innerHTML =
        "Did the political party exceed its authorized spending limit?";
      incrementCounters();
      step = 2;
    } else if (step === 2) {
      document.getElementById("questionText").innerHTML =
        "Were all contributions (in cash or in kind) to the candidate or political party properly reported to the Commission on Elections (COMELEC)?";
      incrementCounters();
      step = 3;
    } else if (step === 3) {
      document.getElementById("questionText").innerHTML =
        "Were any unreported contributions received by the candidate or political party?";
      incrementCounters();
      step = 4;
    } else if (step === 4) {
      document.getElementById("questionText").innerHTML =
        "Did the candidate or political party attempt to evade gift tax obligations by failing to report contributions?";
      incrementCounters();
      step = 5;
    } else if (step === 5) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      incrementCounters();
      step = 6;
    } else if (step === 6) {
      // Determine the penalty based on falseCounter and counterMax
      let penaltyMessage = (falseCounter === counterMax) ? "No Penalty" : (answer === "yes" ? penaltyTextWithDeportation : penaltyText);
      if (falseCounter !== counterMax) {
        penaltyMessage += "<br>" + antiGraftText;
      }
      document.getElementById("questionText").innerHTML = penaltyMessage;
      showResultButtons();
    }
  };
}
