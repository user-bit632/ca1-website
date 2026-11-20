//Author: Oskar Zygula


// Set the current question to 1 as soon as the page loads. This is needed so that the answer checking code later knows we are on the first question.
let currentQuestion = 1;


// This function sets the question text, image and all answers to those for the first question.
// This function is called as soon as the page is loaded using the onLoad event in the body tag of the html.
function setQuestion1() {
	// document.getElementById selects the element that will be changed. .innerHTML is what that element will be changed to.
	document.getElementById("question-text").innerHTML = "Recycling is important to reduce how much waste ends up in landfills and pollutes the land.<br>According to this guide on recycling by mywaste.ie, In Ireland, What bin should be used to dispose of plastic waste?";
	// .innerHTML changes how the link appears on the page
	document.getElementById("question-link").innerHTML = "https://mywaste.ie/dispose-waste/at-home/three-bin-system/";
	// .href changes the a tags href attribute which changse where the link goes
	document.getElementById("question-link").href = "https://mywaste.ie/dispose-waste/at-home/three-bin-system/";
	// .alt changes the alt text
	document.getElementById("question-image").alt = "Large pile of junk and scrap";
	// changes the source of the imge to the new one
	document.getElementById("question-image").src = "images/landfill_OZ.webp";

	// changes all the answers to the new ones
	document.getElementById("answer-1-text").innerHTML = "The recycling bin";
	document.getElementById("answer-2-text").innerHTML = "The brown bin";
	document.getElementById("answer-3-text").innerHTML = "The residual waste bin";
	document.getElementById("answer-4-text").innerHTML = "Any bin, It does not matter";
}

// This function sets the question text, image and all answers to those for the second question
function setQuestion2() {
	document.getElementById("question-text").innerHTML = "Clean drinking water is essential for life of land.<br>According to this guide on saving water by Uisce Éireann, how much water can you save each year by fixing dripping taps?";
	document.getElementById("question-link").innerHTML = "https://www.water.ie/conservation/home";
	document.getElementById("question-link").href = "https://www.water.ie/conservation/home";
	
	document.getElementById("question-image").alt = "Kitchen tap with flowing water";
	document.getElementById("question-image").src = "images/water_OZ.webp";

	document.getElementById("answer-1-text").innerHTML = "Between 100 and 200 liters per year";
	document.getElementById("answer-2-text").innerHTML = "Between 1,000 and 2,000 liters per year";
	document.getElementById("answer-3-text").innerHTML = "Between 2,500 and 5,000 liters per year";
	document.getElementById("answer-4-text").innerHTML = "Between 5,000 and 10,000 liters per year";
}

// This function sets the question and all answers to those for the third question
function setQuestion3() {
	document.getElementById("question-text").innerHTML = "Global warming threatens all life on land. One way we can help slow down global warming is by reducing our carbon emmissions.<br>According to this article by the United Nations, by how much can you reduce your yearly carbon emissions by taking public transport insted of a car?";
	document.getElementById("question-link").innerHTML = "https://www.un.org/en/actnow/transport";
	document.getElementById("question-link").href = "https://www.un.org/en/actnow/transport";
	
	document.getElementById("question-image").alt = "Train arriving at a strain station platform";
	document.getElementById("question-image").src = "images/train_OZ.webp";

	document.getElementById("answer-1-text").innerHTML = "Up 0.5 tons";
	document.getElementById("answer-2-text").innerHTML = "Up to 1 ton";
	document.getElementById("answer-3-text").innerHTML = "Up to 2 tons";
	document.getElementById("answer-4-text").innerHTML = "Up to 3 tons";
}

// This function sets the question and all answers to those for the fourth question
function setQuestion4() {
	document.getElementById("question-text").innerHTML = '"Food Miles" Is a measurement of how far food has traveled from where it was produced to where a customer buys it.<br>Importing food from far away leads to high carbon emissions which contribute to global warming.<br>According to this article from amazingfoodanddrink.com, How many killograrms of CO2 are produced per killogram of food transported by air freight per 1,000 kilometers?';
	document.getElementById("question-link").innerHTML = "https://amazingfoodanddrink.com/irish-food-miles/";
	document.getElementById("question-link").href = "https://amazingfoodanddrink.com/irish-food-miles/";
	
	document.getElementById("question-image").alt = "Cargo boxes being loaded onto a plane";
	document.getElementById("question-image").src = "images/air_freight_OZ.webp";

	document.getElementById("answer-1-text").innerHTML = "1.1 killograms";
	document.getElementById("answer-2-text").innerHTML = "1.5 killograms";
	document.getElementById("answer-3-text").innerHTML = "1.6 killograms";
	document.getElementById("answer-4-text").innerHTML = "2 killograms";
}



// This function is called when the Check Answer button from the page is clicked
function submitAnswer() {
	// document.getElementById selects the radio button with the given id.
	// .checked returns true or false depending on whether the user selected that option or not.
	let answer1 = document.getElementById("answer1").checked;
	let answer2 = document.getElementById("answer2").checked;
	let answer3 = document.getElementById("answer3").checked;
	let answer4 = document.getElementById("answer4").checked;
	
	
	// This checks if the user has selected an option. If they clicked the button without selecting anything it returns so nothing happens.
	
	// || means OR
	// ! means NOT
	if (!(answer1 || answer2 || answer3 || answer4)) { 
		return
	}
	
	// The correct answer will depend on the current question. This switch statement runs the code for the question we are currentlly on.
	// This switch statement is essentially the answer key for the quiz.
	switch (currentQuestion) {
		case 1:
			// The correct answer for the first question is 1.
			// If answer1 is true that means the user selected that radio button and got it correct.
			if (answer1 == true) {
				alert("Correct!");
				// Increase the current question variable by 1 so that next time the code will check the answer for the next question
				currentQuestion++;
				// Uncheck the radio button after the user submits their answer so that its not checked when the next question comes up.
				document.getElementById("answer1").checked = false;
				// Call the function to show the next question
				setQuestion2();
				// break exits the switch statement
				break;
			} else {
				alert("Incorrect! Try again");
				break;
			}
		case 2:
			if (answer4 == true) {
				alert("Correct!");
				currentQuestion++;
				document.getElementById("answer4").checked = false;
				setQuestion3();
				break;
			} else {
				alert("Incorrect! Try again");
				break;
			}
		case 3:
			if (answer3 == true) {
				alert("Correct!");
				currentQuestion++
				document.getElementById("answer3").checked = false;
				setQuestion4();
				break;
			} else {
				alert("Incorrect! Try again");
				break;
			}
		case 4:
			if (answer3 == true) {
				alert("Correct!");
				break;
			} else {
				alert("Incorrect! Try again");
				break;
			}
		// It should not be possible to get any other value so I don't think we don't need a default case
	}
}