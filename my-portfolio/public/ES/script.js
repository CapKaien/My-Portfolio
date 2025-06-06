let currentSection = "";

function resetSection() {
  // Resetting to the initial state
  step = 1;  // Reset the step
  falseCounter = 0;  // Reset false counter
  counterMax = 0;

  // Reset the question text and step based on the current section
  if (currentSection === "section5") {
    document.getElementById("questionText").innerHTML = question1_section5;
  } else if (currentSection === "section6") {
    document.getElementById("questionText").innerHTML = question1_section6;
  } else if (currentSection === "section9") {
    document.getElementById("questionText").innerHTML = question1_section9;
  } else if (currentSection === "section13") {
    document.getElementById("questionText").innerHTML = question1_section13;
  } else if (currentSection === "section14") {
    document.getElementById("questionText").innerHTML = question1_section14;
  } else if (currentSection === "section24") {
    document.getElementById("questionText").innerHTML = question1_section24;
  } else if (currentSection === "section25") {
    document.getElementById("questionText").innerHTML = question1_section25;
  } else if (currentSection === "section31") {
    document.getElementById("questionText").innerHTML = question1_section31;
  } else if (currentSection === "section32") {
    document.getElementById("questionText").innerHTML = question1_section32;
  } else if (currentSection === "section33") {
    document.getElementById("questionText").innerHTML = question1_section33;
  } else {
    document.getElementById("questionText").innerHTML = "Section not available";
  }

  // Resetting the UI elements
  document.getElementById("yesButton").classList.remove("d-none");
  document.getElementById("noButton").classList.remove("d-none");

  // Hide the "Back to Home" button during reset
  document.getElementById("backHomeButton").classList.add("d-none");

  // Hide the Reset button itself during reset
  document.getElementById("resetButton").classList.add("d-none");

  // Show the question container again
  document.getElementById("questionContainer").style.display = "block";

  // Optionally clear any previously selected answers
  document.querySelectorAll('input[name="answer"]').forEach((input) => (input.checked = false));
  
  // Reset all scenario sections visibility
  document.querySelectorAll(".scenario-section").forEach((section) => {
    section.style.display = "none";  // Hide all scenario sections
  });
}


function handleAnswer(answer) {
  // Hide the question container after the answer is selected
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.style.display = "none"; // Hide the question container

  // Log the answer and perform additional actions based on the answer
  alert(`You answered: ${answer}`);

  // Optionally, show other scenarios or process the answer logic
  document.querySelectorAll(".scenario-section").forEach((section) => {
    section.style.display = "block"; // Show scenarios after an answer is selected
  });

  // When appropriate, show the result buttons (Back to Home and Reset)
  showResultButtons();
}

function goBackToHome() {
  // Hide the question container and result buttons
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("backHomeButton").classList.add("d-none");
  document.getElementById("resetButton").classList.add("d-none");

  // Show the Yes/No buttons again for the next question
  document.getElementById("yesButton").classList.remove("d-none");
  document.getElementById("noButton").classList.remove("d-none");

  // Show the scenario sections again
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "block"));

  // Reset the question text and step
  document.getElementById("questionText").innerHTML = "";
}

function showResultButtons() {
  // Hide the Yes/No buttons
  document.getElementById("yesButton").classList.add("d-none");
  document.getElementById("noButton").classList.add("d-none");

  // Show the "Back to Home" and "Reset" buttons
  document.getElementById("backHomeButton").classList.remove("d-none");
  document.getElementById("resetButton").classList.remove("d-none");
}
