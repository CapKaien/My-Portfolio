let question1_section33 = "Is the individual a foreigner?";

function startSection33Questions() {
  currentSection = "section33";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section33;
  document.getElementById("questionContainer").style.display = "block";
  document.querySelectorAll(".scenario-section").forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = 
          "Is the foreigner trying to be involved in the election process?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML = 
          "Is the individual a candidate for public office, including incumbent public officers seeking election to any public office?";
        step = 3;
      }
    } else if (step === 2) {
      if (answer === "yes") {
        displayPenalty("foreign involvement");
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      }
    } else if (step === 3) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Does the candidate face any threats to life or security during the election campaign?";
        step = 4;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual a member of the Philippine National Police, Armed Forces of the Philippines, or any other law enforcement agencies of the Government?";
        step = 10;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the threats to life or security validated as true for the individual candidate?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the candidate has Security Personnel and Bodyguards assigned beside them during election campaign?";
        step = 6;
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Does the candidate submit an application to the COMELEC to assign them a member/members of a law enforcement agency?";
        step = 7;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the candidate has Security Personnel and Bodyguards assigned beside them during election campaign?";
        step = 6;
      }
    } else if (step === 6) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Does the candidate submit an application to the COMELEC to assign them a member/members of a law enforcement agency?";
        step = 7;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      }
    } else if (step === 7) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      } else {
        displayPenalty("unauthorized security");
      }
    } else if (step === 10) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the law enforcer(s) Security Personnel and Bodyguards of a candidate?";
        step = 11;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      }
    } else if (step === 11) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the law enforcer(s) assigned by the COMELEC as Security Personnel and Bodyguards for the individual candidate?";
        step = 12;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      }
    } else if (step === 12) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the law enforcer(s) assigned by the COMELEC as Security Personnel and Bodyguards wearing full uniform clearly showing their name, rank, and serial number?";
        step = 13;
      } else {
        displayPenalty("law enforcement misuse");
      }
    } else if (step === 13) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty.";
        showResultButtons();
      } else {
        displayPenalty("law enforcement misuse");
      }
    }
  };
}

function displayPenalty(violationType) {
  let penaltyText = "";

  if (violationType === "foreign involvement") {
    penaltyText = `
      <strong>Penalty for Foreign Involvement in Elections:</strong><br>
      <strong>Imprisonment:</strong> One to six years, followed by deportation after serving the sentence.<br>
      <strong>Deportation:</strong> A foreign individual found guilty will be deported upon completion of their prison term.
    `;
  } else if (violationType === "unauthorized security") {
    penaltyText = `
      <strong>Penalty for Unauthorized Security Personnel:</strong><br>
      <strong>Imprisonment:</strong> One to six years for unauthorized use of security personnel during the election period.<br>
      <strong>Disqualification:</strong> The candidate may lose their right to run for or hold public office in the future.<br>
      <strong>Voting Rights:</strong> The convicted candidate may lose their voting rights in future elections.
    `;
  } else if (violationType === "law enforcement misuse") {
    penaltyText = `
      <strong>Penalty for Misuse of Law Enforcement as Security Personnel:</strong><br>
      <strong>Imprisonment:</strong> One to six years if law enforcement officers are used without COMELEC authorization.<br>
      <strong>Disqualification:</strong> Permanent disqualification from public service.<br>
      <strong>Voting Rights:</strong> Loss of voting rights in future elections.
    `;
  }

  document.getElementById("questionText").innerHTML = penaltyText;
  showResultButtons();
}

function showResultButtons() {
  document.getElementById("yesButton").classList.add("d-none");
  document.getElementById("noButton").classList.add("d-none");
  document.getElementById("backHomeButton").classList.remove("d-none");
  document.getElementById("resetButton").classList.remove("d-none");
}

// Call this function to start the questions
startSection33Questions();
