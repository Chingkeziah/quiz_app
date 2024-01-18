// dummy questions
const questions = [
    {
        question: "What is the capital city of Nigeria",
        answers: ["Lagos", "Abia", "Portharcourt", "Abuja"],
        correct: 3
    },
    {
        question: "What is the full meaning of Lmao",
        answers: ["Lmao na 😂", "Laughing my a** off", "wo, e no get meaning", "omo!!!"],
        correct: 1
    },
    {
        question: "Who is your guy? According to the song",
        answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
        correct: 2
    },
    {
        question: "Who invented JavaScript?",
        answers: ["Brendan Eich", "Yukihiro Matsumoto", "Larry Wall", "Guido Van Rossum"],
        correct: 1
    },
    {
        question: "What is the name of our facilitator?",
        answers: ["Hakeem Owolabi", "Chizaram Anisimuo", "Kyenpya Gutap", "Ayodele Aransiola"],
        correct: 4
    },
    {
        question: "When was ES6 officially released?",
        answers: ["May 2009", "June 2015", "December 1995", "March 2000"],
        correct: 2
    },
    {
        question: "Which of the following is not built on JavaScript?",
        answers: ["ReactJS", "AngularJS", "Perl", "NodeJS"],
        correct: 3
    },
    {
        question: "The following are tools for debugging except?",
        answers: ["Console Statements", "Browser Developer Tools", "Node.js Inspector", "Alert Window"],
        correct: 4
    },
    {
        question: "All these are not code editors except?",
        answers: ["JSBiddle", "Atom", "Sublime", "VimEmacs"],
        correct: 2
    },
    {
        question: "What do you call using Javascript to manipulate HTML and CSS code?",
        answers: ["Dom Manipulation", "HTML Manipulation", "Markdown Language", "Frontend"],
        correct: 1
    },
]

// default value
let currQuestion = 0
let score = 0


function displayQuestion(){
    // get the element of question and assign it to the questions in the array
    document.getElementById('question').innerText = questions[currQuestion].question

    // we get the answers in the array and assign it to a variable
    const answers = questions[currQuestion].answers

    // iterate the answers array and get their value and index to display on the option div
    const answerOptions = answers.map((answer, index) =>
        `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
    ).join('');

    // assign the mapped item (answeroptions) into the div of options
    document.getElementById('options').innerHTML = answerOptions
}

// check if the selected option is correct and enable the 
// button to go to the next question and score the user if correct
function selectAnswer(index){
    if(index === questions[currQuestion].correct){
        score++
    }
    document.getElementById('next').disabled = false
}

// go to the next question and if no more question, display the answer
document.getElementById('next').addEventListener('click', () =>{
    currQuestion++
    if(currQuestion < questions.length){
        displayQuestion();
        document.getElementById('next').disabled = true
    } else {
        document.getElementById('result').innerHTML = `<p>Your Total Score is: ${score}/${questions.length}</p>`
    }
})

// invoke the display question function
displayQuestion()