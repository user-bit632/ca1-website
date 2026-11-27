function openInformation(){
	window.open("https://globalgoals.org/goals/15-life-on-land/", "_blank");
}

function openAction(){
	window.open("https://globalgoals.org/take-action/?id=1", "_blank");
}

function openPage(){
	window.open("https://education.nationalgeographic.org/resource/deforestation/", "_blank");
}



function Question2() {
	document.getElementById("question-text").innerHTML = "Why is biodiversity important?";
	document.getElementById("question-link").innerHTML = "https://www.conservation.org/news/why-is-biodiversity-important";
	document.getElementById("image").src = "ImportanceOfBiodiversity.png";
	document.getElementById("answer1-label").innerHTML = "Wildlife supports the healthy ecosystems that we rely on.";
	document.getElementById("answer2-label").innerHTML = "Keeping biodiverse ecosystems intact helps humans stay healthy.";
	document.getElementById("answer3-label").innerHTML = "Biodiversity is an essential part of the solution to climate change.";
	document.getElementById("answer4-label").innerHTML = "All of the above.";
}


function Question3(){
	document.getElementById("question-text").innerHTML = "What action can protect our planet?";
	document.getElementById("question-link").innerHTML = "https://www.un.org/en/actnow/ten-actions";
	document.getElementById("image").src = "HealthyPlanet.png";
	document.getElementById("answer1-label").innerHTML = "Expanding urban areas without considering wildlife habitats.";
	document.getElementById("answer2-label").innerHTML = "Replacing natural forests with large industrial developments.";
	document.getElementById("answer3-label").innerHTML = "Protecting forests, restoring ecosystems, and preserving biodiversity.";
	document.getElementById("answer4-label").innerHTML = "Increasing the use of natural resources without limits.";
}

let Question = 1;

function AnswerSubmit(){
	
	let answer1 = document.getElementById("answer1").checked;
	let answer2 = document.getElementById("answer2").checked;
	let answer3 = document.getElementById("answer3").checked;
	let answer4 = document.getElementById("answer4").checked;
	


	if (!(answer1 || answer2 || answer3 || answer4)){
		alert("Please select an answer.");
		return;
	}

	switch(Question){
		case 1:
			if (answer4 == true){
				alert("That is correct answer!");
				Question = Question + 1;
				Question2();
			} else {
				alert("Incorrect!");
			}
			break;
			
		case 2:
			if (answer4 == true){
				alert("That is correct answer!");
				Question = Question + 1;
				Question3();
			} else {
				alert("Incorrect!");
			}
				break;
			
		case 3:
			if (answer3 == true){
				alert("That is correct answer! Quiz Completed!");
				Question = Question + 1;
				break;
			} else {
				alert("Incorrect!");
			}
				break;
			
	}
	
	document.getElementById("answer1").checked = false;
	document.getElementById("answer2").checked = false;
	document.getElementById("answer3").checked = false;
	document.getElementById("answer4").checked = false;
				
}
