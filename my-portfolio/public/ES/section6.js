let question1_section6 = "Is the candidate running for president, vice president, or senator?";

function startSection6Questions() {
  currentSection = "section6";
  step = 1;  // Reset the step to 1
  falseCounter = 0;  // Reset false counter

  document.getElementById("questionText").innerHTML = question1_section6;
  document.getElementById("questionContainer").style.display = "block";
  
  // Hide all scenario sections initially
  document.querySelectorAll(".scenario-section").forEach((section) => section.style.display = "none");

  window.handleAnswer = function (answer) {
    // Step 1: Check if candidate is running for president, VP, or senator
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Did the candidate hold political conventions or meetings for the nomination or selection of the official candidates of their political party, organization, groups, or coalition more than 165 days before the election?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the candidate running for member of the House of Representatives or Local Government Units (LGU)?";
        step = 4;
      }
    }
    // Step 2: Check if there are any foreigners involved in the political party
    else if (step === 2) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      if (answer === "yes") {
        step = 3;
      } else {
        step = 3;
        falseCounter++;
      }
    }
    // Step 3: Display penalties and show result
    else if (step === 3) {
      const penaltyText = "Penalty: 1-6 years imprisonment is not subject to probation<br>" +
                          "Penalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.<br>" +
                          "Penalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.";
      
      // Displaying penalties based on the answer
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          penaltyText + "<br>Penalty: Sentenced to deportation which shall be enforced after the prison term has been served.";
      } else {
        document.getElementById("questionText").innerHTML = penaltyText;
      }

      // If any false answers were given, show "No penalty"
      if (falseCounter > 0) {
        document.getElementById("questionText").innerHTML = "No Penalty";
      }

      showResultButtons();
    }
    // Step 4: Check for another political meeting question
    else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Did the candidate hold political conventions or meetings for the nomination or selection of the official candidates of their political party, organization, groups, or coalition more than 75 days before the election?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    }
  };
}
