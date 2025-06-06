let question1_section32 = "Is the individual a foreigner?";

function startSection32Questions() {
  currentSection = "section32";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section32;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      // Q1: Foreigner check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Is he/she trying to be involved in the election process?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML = "Does the individual have firearms?";
        step = 3;
      }
    } else if (step === 2) {
      // Q2: Foreign involvement in the election process
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Guilty of violating Section 24 of the Omnibus Election Code.<br>Imprisonment: One to six years, sentenced to deportation which shall be enforced after the prison term has been served.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 3) {
      // Q3: Firearms possession check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Is the firearm licensed/registered?";
        step = 4;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 4) {
      // Q4: Firearm license registration check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Has the individual brought a firearm or any deadly weapon into public places?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML = "Has the individual registered their firearm during the election period?";
        step = 6;
      }
    } else if (step === 5) {
      // Q5: Bringing firearm to public places
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Is the individual a member of the Philippine National Police, Armed Forces of the Philippines, or any other law enforcement agencies of the Government?";
        step = 7;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 6) {
      // Q6: Firearm registration during election period
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Does the individual have a written authorization from the COMELEC?";
        step = 10;
      } else {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years, loss of right to vote, disqualification from public office.";
        showResultButtons();
      }
    } else if (step === 7) {
      // Q7: Law enforcement membership
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Is the law enforcement officer off-duty during the election period?";
        step = 8;
      } else {
        document.getElementById("questionText").innerHTML = 
          "Is the private individual using their private vehicle to transport firearms during the election period?";
        step = 11;
      }
    } else if (step === 8) {
      // Q8: Law enforcement officer off-duty check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Has the law enforcement officer brought a firearm during their off-duty hours in public places?";
        step = 9;
      } else {
        document.getElementById("questionText").innerHTML = "Is the law enforcement officer in full uniform showing clearly and legibly his/her name, rank, and serial number?";
        step = 12;
      }
    } else if (step === 9) {
      // Q9: Off-duty firearm possession in public places
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years due to bringing a firearm while off-duty, loss of current position or future roles in public service, loss of right to vote.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 10) {
      // Q10: COMELEC authorization
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years due to lack of COMELEC authorization, loss of current position or future roles in public service, loss of right to vote.";
        showResultButtons();
      }
    } else if (step === 11) {
      // Q11: Private vehicle firearm transport check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Did the private individual obtain a written authorization from the COMELEC to transport firearms?";
        step = 13;
      } else {
        document.getElementById("questionText").innerHTML = "Did the private individual bring a firearm in public places during the election period?";
        step = 14;
      }
    } else if (step === 12) {
      // Q12: Law enforcement officer uniform check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Did the law enforcement officer obtain written authorization from the COMELEC?";
        step = 10;
      } else {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years due to lack of proper identification, loss of current position or future roles in public service, loss of right to vote.";
        showResultButtons();
      }
    } else if (step === 13) {
      // Q13: COMELEC authorization for private transport
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years due to transporting a firearm without authorization, loss of current position or future roles in public service, loss of right to vote.";
        showResultButtons();
      }
    } else if (step === 14) {
      // Q14: Private individual bringing firearm in public places check
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "Did the private individual obtain a written authorization from the COMELEC to bring firearms in public places during the election period?";
        step = 15;
      } else {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      }
    } else if (step === 15) {
      // Q15: COMELEC authorization for public firearm carrying
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No Penalty";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = 
          "Penalty: Imprisonment: One to six years due to bringing a firearm in public places without authorization, loss of current position or future roles in public service, loss of right to vote.";
        showResultButtons();
      }
    }
  };
}

// Call this function to start the questions
startSection32Questions();
