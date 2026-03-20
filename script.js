const questions = [
    "Tell me about yourself",
    "Why should we hire you?",
    "What are your strengths?",
    "Describe a challenge you faced",
    "Why do you want this job?"
];

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerText = questions[randomIndex];
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("score").innerText = "";
}

function evaluate() {
    const answer = document.getElementById("answer").value.toLowerCase();

    let feedback = "";
    let score = 0;

    if (answer.length < 20) {
        feedback = "❌ Answer too short. Try to explain more.";
        score = 2;
    } 
    else if (answer.includes("experience") || answer.includes("project")) {
        feedback = "✅ Good answer with relevant examples!";
        score = 8;
    } 
    else if (answer.length > 100) {
        feedback = "🔥 Excellent detailed answer!";
        score = 10;
    } 
    else {
        feedback = "👍 Decent answer. Try adding examples.";
        score = 6;
    }

    document.getElementById("feedback").innerText = feedback;
    document.getElementById("score").innerText = "Score: " + score + "/10";
}

// Voice Input Feature
function startVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = function(event) {
        const speechText = event.results[0][0].transcript;
        document.getElementById("answer").value = speechText;
    };

    recognition.onerror = function() {
        alert("Voice recognition not supported in this browser");
    };
}
