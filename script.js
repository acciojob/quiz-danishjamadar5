//your JS code here. If required.
const questions = [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            }
        ];

        let currentQuestion = 0;
        const questionElement = document.getElementById('question');
        const submitButton = document.getElementById('submit');
        const form = document.getElementById('quiz-form');
        let answeredQuestions = 0;

        function loadQuestion() {
            const currentQ = questions[currentQuestion];
            questionElement.textContent = currentQ.question;
            document.getElementById('a_text').textContent = currentQ.a;
            document.getElementById('b_text').textContent = currentQ.b;
            document.getElementById('c_text').textContent = currentQ.c;
            document.getElementById('d_text').textContent = currentQ.d;
        }

        function showResult() {
            const score = calculateScore();
            alert(`Your Score: ${score}/${questions.length}`);
            location.reload(); // Reload the page
        }

        function calculateScore() {
            let score = 0;
            const userAnswers = new FormData(form);
            for (const [key, value] of userAnswers.entries()) {
                if (value === questions[key].correct) {
                    score++;
                }
            }
            return score;
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }

        submitButton.addEventListener('click', function() {
            const userAnswer = form.querySelector('input[name="answer"]:checked');
            if (userAnswer) {
                answeredQuestions++;
                nextQuestion();
            } else {
                alert('Please select an option');
            }
        });

        // Load the first question
        loadQuestion();