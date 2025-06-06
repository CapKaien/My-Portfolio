let question1_section31 =
  "Is the individual a foreigner?";

function startSection31Questions() {
  currentSection = "section31";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section31;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      // Check if the individual is a foreigner
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is he/she trying to be involved in the election process?";
        step = 2; // Proceed to foreigner involvement question
      } else {
        // If not a foreigner, ask about being a member of BEI
        document.getElementById("questionText").innerHTML =
          "Is the individual a member of Board of Election Inspectors (BEI)?";
        step = 3; // Move to the next set of questions
      }
    } else if (step === 2) { // Foreign involvement question
      if (answer === "yes") {
        // Display the penalty if the foreigner is trying to be involved in the election process
        document.getElementById("questionText").innerHTML =
          `Penalty: Guilty of violating Section 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, sentenced to deportation which shall be enforced after the prison term has been served.`;
        showResultButtons(); // End flow if foreigner involved
      } else {
        // No violation if foreigner is not involved
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons(); // End flow if foreigner not involved
      }
    } else if (step === 3) {
      // Now continue with the original flow
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the member of BEI participated in the election process specifically in registration and revision activities?";
        step = 4;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual responsible to process the payments (cashier or finance officer) from Department of Education, Culture and Sports, or Commission on Elections?";
        step = 5;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Has the member of BEI received Per Diem within fifteen (15) days after the day of (Registration, Revision, and Election)?";
        step = 6;
      } else {
        document.getElementById("questionText").innerHTML =
          "No Violation?";
        showResultButtons();
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the election inspectors?";
        step = 9;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual included in other officials (Provincial, city, municipal treasurers, and Department of Education, Culture, and Sports supervisors assigned by the Commission)?";
        step = 12;
      }
    } else if (step === 6) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the per diem received by the member in accordance with the specified per diem rate?";
        step = 7;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the members of the BEI?";
        step = 8;
      }
    } else if (step === 7) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      }
    } else if (step === 8) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 9) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the Officials received the correct amount of Per Diem based on the Per Diem Rate?";
        step = 10;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the delay of payment has a valid, justifiable, and legitimate reason?";
        step = 11;
      }
    } else if (step === 10) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      }
    } else if (step === 11) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      }
    } else if (step === 12) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Has the official received Per Diem within fifteen (15) days after the day of election?";
        step = 13;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 13) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the per diem received by the official in accordance with the specified per diem rate?";
        step = 14;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the members of the BEI?";
        step = 15;
      }
    } else if (step === 14) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      }
    } else if (step === 15) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available. Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    }
  };
}

// Call this function to start the questions
startSection31Questions();
