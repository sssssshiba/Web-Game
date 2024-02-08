const quizData = [
    {
        question: '兵庫県の県庁所在地はどこですか？',
        answers: ['神戸市', '明石市', '尼崎市', '姫路市'],
        correct: '神戸市'
    },
    {
        question: '兵庫県に位置する有名な温泉地で、日本三大美肌のひとつに数えられるのはどこですか？',
        answers: ['城崎温泉', '有馬温泉', '銀山温泉', '草津温泉'],
        correct: '有馬温泉'
    },
    {
        question: '兵庫県の名産品として知られる、「兵庫県産の水と酒造好適米を使ったお酒」は何でしょう？',
        answers: ['紹興酒', 'ワイン', '日本酒', '密造酒'],
        correct: '日本酒'
    },
    {
        question: '兵庫県にある日本三名園のひとつで、国の特別名勝にも指定されているのはどこでしょう？',
        answers: ['兼六園', '偕楽園', '後楽園', '兵庫にはない'],
        correct: '兵庫にはない'
    },
    {
        question: '兵庫県にある、「夜景が美しい港町」として知られる都市はどこでしょう？',
        answers: ['神戸市', '明石市', '尼崎市', '姫路市'],
        correct: '神戸市'
    },
    {
        question: '兵庫県に位置する世界遺産で、日本最古の木造建築として知られる寺院は何でしょう？',
        answers: ['興福寺', '法隆寺', '飛鳥寺', '兵庫にはない'],
        correct: '兵庫にはない'
    },
    {
        question: '兵庫県にある、「神戸ビーフ」として知られる高級な和牛の生産地はどこでしょう？',
        answers: ['淡路市', '神戸市', '尼崎市', '姫路市'],
        correct: '神戸市'
    },
    {
        question: '兵庫県に位置する、「天空の城」として知られる城は何でしょう？',
        answers: ['倉吉城', '高知城', '姫路城', '竹田城跡'],
        correct: '竹田城跡'
    },
    {
        question: '神戸電子で一番ダメなやつは誰',
        answers: ['加治屋', 'カジヤ', 'かじや', 'すべて'],
        correct: 'すべて'
    },
    {
        question: '神戸電子の一番近いコンビニはどれ',
        answers: ['セブンイレブン', 'ローソン', 'ファミリーマート', 'ミニストップ'],
        correct: 'ファミリーマート'
    }
];

let currentQuestion = 0;
let count = 0;

let questionContainer = document.getElementById('question-container');
let answerButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-button');
let check = document.getElementById('check');
let truefalse = document.getElementById('truefalse');
let point = document.getElementById('point');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomBG() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function startQuiz() {
    showQuestion(currentQuestion);
}

function showQuestion(questionIndex) {
    const question = quizData[questionIndex];
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(answer, question.correct));
        answerButtons.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        count++;
        check.style.backgroundColor = 'lightgreen' ;
        truefalse.innerHTML = "";
        point.innerHTML = "";
        let truefalse_html = "正解";
        truefalse.insertAdjacentHTML("beforeend", truefalse_html);
        point.insertAdjacentHTML("beforeend", "スコア：" + count);
    } else {
        check.style.backgroundColor = 'red';
        truefalse.innerHTML = "";
        let truefalse_html = "不正解";
        truefalse.insertAdjacentHTML("beforeend", truefalse_html);
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(currentQuestion);
    } else {
        alert('クイズ終了しました！\nスコア：' + count);
    }
}

startQuiz();
