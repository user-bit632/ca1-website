//Author: Oskar Zygula


// Set the current question to 1 as soon as the page loads. This is needed so that the answer checking code later knows we are on the first question.
let currentQuestion = 1;

// This function sets the question and all answers to those for the second question
function setQuestion2() {
	// document.getElementById selects the element that will be changed. .innerHTML is what that element will be changed to.
	document.getElementById("question-text").innerHTML = "Question 2";
	document.getElementById("question-image").src = "https://placehold.co/400x400";

	document.getElementById("answer-1-text").innerHTML = "Question 2";
	document.getElementById("answer-2-text").innerHTML = "Question 2";
	document.getElementById("answer-3-text").innerHTML = "Question 2";
	document.getElementById("answer-4-text").innerHTML = "Question 2";
}

// This function sets the question and all answers to those for the third question
function setQuestion3() {
	document.getElementById("question-text").innerHTML = "Question 3";
	document.getElementById("question-image").src = "https://placehold.co/400x400";

	document.getElementById("answer-1-text").innerHTML = "Question 3";
	document.getElementById("answer-2-text").innerHTML = "Question 3";
	document.getElementById("answer-3-text").innerHTML = "Question 3";
	document.getElementById("answer-4-text").innerHTML = "Question 3";
}

// This function sets the question and all answers to those for the fourth question
function setQuestion4() {
	document.getElementById("question-text").innerHTML = "Question 4";
	document.getElementById("question-image").src = "https://placehold.co/400x400";

	document.getElementById("answer-1-text").innerHTML = "Question 4";
	document.getElementById("answer-2-text").innerHTML = "Question 4";
	document.getElementById("answer-3-text").innerHTML = "Question 4";
	document.getElementById("answer-4-text").innerHTML = "Question 4";
}

// This function is called when the Check Answer button from the page is clicked
function submitAnswer() {
	// document.getElementById selects the radio button with the given id.
	// .checked returns true or false depending on whether the user selected that option or not.
	// const is a variable that can't be reassigned. In the context of this function the users selection cannot change so we can use const.
	const answer1 = document.getElementById("answer1").checked;
	const answer2 = document.getElementById("answer2").checked;
	const answer3 = document.getElementById("answer3").checked;
	const answer4 = document.getElementById("answer4").checked;

	// This converts the 4 variables which are booleans into 1 variable which is a number 1-4. Which is easier to work with.
	let userAnswer;
	if (answer1 == true) {
		userAnswer = 1
	} else if (answer2 == true) {
		userAnswer = 2
	} else if (answer3 == true)  {
		userAnswer = 3
	} else if (answer4 == true)  {
		userAnswer = 4
	}
	
	// The correct answer will depend on the current question. This switch statement runs the code for the question we are currentlly on.
	// This switch statement is essentially the answer key for the quiz.
	switch (currentQuestion) {
		case 1:
			// The correct answer for the first question is 2.
			// If answer4 is true that means the user selected that radio button.
			if (answer4 == true) {
				// Increase the current question variable by 1 so that next time the code will check the answer for the next question
				alert("Correct");
				currentQuestion++
				setQuestion2();
				break;
			} else {
				alert("Incorrect");
				break;
			}
		case 2:
			if (answer2 == true) {
				alert("Correct");
				currentQuestion++
				setQuestion3();
				break;
			} else {
				alert("Incorrect");
				break;
			}
		case 3:
			if (answer3 == true) {
				alert("Correct");
				currentQuestion++
				setQuestion4();
				break;
			} else {
				alert("Incorrect");
				break;
			}
		case 4:
			if (answer4 == true) {
				alert("Correct");
				break;
			} else {
				alert("Incorrect");
				break;
			}
		// It should not be possible to get any other value so we don't need a default case
	}
	
	
	console.log("Question: " + currentQuestion + " " + "Answer: " + userAnswer);
}