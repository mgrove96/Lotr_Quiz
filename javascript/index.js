$(document).ready(function() {
	var allQuestions =  [
							{	question: "Which of these swords does Gandalf wield?",
								choices: ["Anduril", "Gurthang", "Glamdring", "Orcrist"],
								correctAnswer: 2
							}, 
							{	question: "When the hobbits encounter Tom Bombadil they also meet a river spirit, what is her name?", 
								choices: ["Goldberry", "River-man's daughter", "Evenstar", "Primula"], 
								correctAnswer: 0
							}, 
							{	question: "Not including the One Ring, how many rings of power were created?",
								choices: ["13", "19", "20", "7"], 
								correctAnswer: 1
							}, 
							{	question: "In the books, where does Saruman die?",
								choices: ["Minas Morgul", "Orthanc", "The Shire", "Barad-dur"],
								correctAnswer: 2
							}
						];
	var len = allQuestions.length;
	var answers = [];
	var i = 0;
	var score = 0;
	function addQuestion (i) {
		var current = allQuestions[i];
		var q = "<h1 class='main'>" + current.question + "</h1>";
		$(".question-container").prepend(q);
		for (var j = 0; j < 4; j++)
		{
			var c = "<input type='radio' name='choice' value=" + j + ">" + current.choices[j];
			$("#choices").append(c);
			$("#choices").append("<br>");
		}
	}
	addQuestion(i);

	function removeQuestion() {
		$(".main").remove();
		$("#choices").empty();
	}
	$("#next-button").click(function() {
		var answer = $('input[name=choice]:checked', '#choices').val();
		if (answer == null)
		{
			alert("Please select an option");
			return;
		}
		answers[i] = answer;

		if (answer == allQuestions[i].correctAnswer)
			score++;

		removeQuestion();
		i++;

		if (i == len)
		{
			$("#back-button").remove();
			$("#next-button").remove();
			$(".container").append("<h1>Your final score is: " + score + "/" + len + "</h1>");
		}
		else
			addQuestion(i);

	});

	$("#back-button").click(function() {
		if (i !== 0)
		{
			removeQuestion();
			i--;
			addQuestion();
			var difChoices = $('input:radio[name=choice]');
			
		}
	});
	
});