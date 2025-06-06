let question1_section9 = "Is there a registration that happened fifteen (15) days before the election?";

function startSection9Questions() {
  currentSection = "section9";
  step = 1;  // Reset the step to 1
  falseCounter = 0;  // Reset the false counter
  counterMax = 0;  // Reset the counter max

  document.getElementById("questionText").innerHTML = question1_section9;
  document.getElementById("questionContainer").style.display = "block";
  
  // Hide all scenario sections initially
  document.querySelectorAll(".scenario-section").forEach((section) => section.style.display = "none");

  // Define the penalty text once to avoid repetition
  const penaltyText = "Penalty: 1-6 years imprisonment is not subject to probation<br>" +
                      "Penalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.<br>" +
                      "Penalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.";

  window.handleAnswer = function (answer) {
    if (step === 1) {
      document.getElementById("questionText").innerHTML =
        "Did the Commission designate an additional date of registration in that area?";
      if (answer === "yes") {
        step = 2;
        falseCounter++;
      } else {
        step = 2;
      }
      counterMax++;
    } 
    else if (step === 2) {
      document.getElementById("questionText").innerHTML =
        "Were you or someone else who is registered not listed as a voter at your assigned precinct?";
      if (answer === "yes") {
        step = 3;
        falseCounter++;
      } else {
        step = 3;
      }
      counterMax++;
    } 
    else if (step === 3) {
      document.getElementById("questionText").innerHTML =
        "Did the board of election post the list of all voters outside the precinct?";
      if (answer === "yes") {
        step = 4;
      } else {
        step = 4;
        falseCounter++;
      }
      counterMax++;
    } 
    else if (step === 4) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      if (answer === "yes") {
        falseCounter++;
        step = 5;
      } else {
        step = 5;
      }
      counterMax++;
    } 
    else if (step === 5) {
      // Check for penalty conditions after all steps
      if (falseCounter === counterMax) {
        document.getElementById("questionText").innerHTML = "No Penalty";
      } else if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          penaltyText + "<br>Penalty: Sentenced to deportation which shall be enforced after the prison term has been served.";
      } else {
        document.getElementById("questionText").innerHTML = penaltyText;
      }
      showResultButtons();
    }
  };
}
