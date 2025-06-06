let question1_section25 =
  "Is the individual a foreigner?"; // The foreigner question is now the first

function startSection25Questions() {
  document.getElementById("questionText").innerHTML = question1_section25;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  let step = 0; // Start with the foreigner question

  window.handleAnswer = function (answer) {
    if (step === 0) { // Foreigner question
      if (answer === "yes") {
        // If the individual is a foreigner, ask about involvement in the election process
        document.getElementById("questionText").innerHTML =
          "Is he/she trying to be involved in the election process?";
        step = -1; // Proceed to foreigner involvement question
      } else {
        // Proceed to the original first question about BEI membership
        document.getElementById("questionText").innerHTML =
          "Is the individual a member of the Board of Election Inspectors (Chairman, Poll Clerk, Third Member)?";
        step = 1; // Proceed to election official question
      }
    } else if (step === -1) { // Foreign involvement question
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
    } else if (step === 1) { // Election official question
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the member of BEI blocking the watchers or public from having a clear view of the ballots, election return, or tally board?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual an Election Personnel (Watchers/Poll Workers)?";
        step = 3;
      }
    } else if (step === 2) { // Logic for BEI member blocking view
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          `"Penalty: Guilty of obstructing the view of the public.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights."`;
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the table cluttered with unrelated materials like pens, papers, or personal items?";
        step = 4;
      }
    } else if (step === 3) { // Logic for Election Personnel
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the watcher or poll worker trying to touch the tally board, ballots, or election return?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are you a registered voter?";
        step = 6;
      }
    } else if (step === 4) { // Cluttered table question
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the BEI members following procedural requirements like reading ballots aloud and recording votes in real-time?";
        step = 7;
      }
    } else if (step === 5) { // Logic for watcher/poll worker touching ballots
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 6) { // Logic for registered voter
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the registered voter trying to touch the tally board, ballots, or election return?";
        step = 8;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual an unauthorized person trying to assist in the election process?";
        step = 9;
      }
    } else if (step === 7) { // BEI members procedural requirements
      if (answer === "no") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Are unauthorized individuals getting too close to ballots or documents?";
        step = 10;
      }
    } else if (step === 8) { // Logic for registered voter touching ballots
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 9) { // Logic for unauthorized person
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 10) { // Logic for unauthorized individuals too close
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    }
  };

  // Initialize the first question
  document.getElementById("questionText").innerHTML = question1_section25;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));


// Call this function to start the questions
startSection25Questions();


  currentSection = "section25";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section25;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the member of BEI blocking the watchers or public from having a clear view of the ballots, election return, or tally board?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual an Election Personnel (Watchers/Poll Workers)?";
        step = 3;
      }
    } else if (step === 2) {
      if (answer === "yes") {
        document.getElementById(
          "questionText"
        ).innerHTML = `"Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights."`;
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the table cluttered with unrelated materials like pens, papers, or personal items?";
        step = 4;
      }
    } else if (step === 3) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the watcher or poll worker trying to touch the tally board, ballots, or election return?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are you a registered voter?";
        step = 6;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the BEI members following procedural requirements like reading ballots aloud and recording votes in real-time?";
        step = 7;
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 6) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the registered voter trying to touch the tally board, ballots, or election return?";
        step = 8;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual an unauthorized person trying to assist in the election process?";
        step = 9;
      }
    } else if (step === 7) {
      if (answer === "no") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Are unauthorized individuals getting too close to ballots or documents?";
        step = 10;
      }
    } else if (step === 8) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 9) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 10) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    }
  };
}
