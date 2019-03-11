const questions = [
    {
        Question: 'How old are you?',
        Ans: [
            {
                text: 10
            }, 
            {
                text: 15
            }, 
            {
                text: 25
            }, 
            {
                text: 20,
                isTrue: true
            }
        ]
    },
    {
        Question: 'Where You Frome?',
        Ans: [
            {
                text: 'China'
            }, 
            {
                text: 'Japan'
            }, 
            {
                text: 'Russia'
            }, 
            {
                text: 'Ukrain',
                isTrue: true
            }
        ]
    }
]

class Quiz {
    constructor() {
        this.question = document.querySelector('.title');
        this.ans = document.querySelector('.answers');
        this.correctAns = 0;
        this.falseAns = 0;
        this.current = 0;
    }
    start() {

    }
    createQuiz(quiz = 0) {
        console.log(quiz);
        if(quiz > questions.length - 1) {
            this.createModal();
            
            return 'END';
        }
        console.log(questions[quiz].Question);
        this.question.innerHTML = '';
        this.ans.innerHTML = "";
        questions[quiz].Ans.forEach(elem => {
            console.log(elem);
            this.createAns(elem);
        });
        this.question.append(questions[quiz].Question);
        //this.ans.append(questions[0].Ans[0].text)

    }
    createAns(item) {
        
        let newAns = document.createElement('div');
        newAns.classList.add('answer');
        newAns.innerHTML = item.text;
        newAns.addEventListener('click', () => {
            this.checkAns(item);
        });
        
        this.ans.appendChild(newAns);

    }
    checkAns(ans) {
        console.log(ans);
        if(ans.isTrue != true) {
            console.log('Ne ugadal');
            this.falseAns += 1;
            this.current += 1;
            this.createQuiz(this.current);

        }
        else {
            console.log('KRASAVA');
            this.correctAns += 1;
            this.current += 1;
            this.createQuiz(this.current);
        }
        
    }
    createModal() {
        let modalFinal = document.createElement('div');
        modalFinal.id = "modalWrap";
        let modal = document.createElement('div');
        modal.innerHTML = `Всего <span class="correct">${this.correctAns}</span> правильных ответов`;
        modalFinal.appendChild(modal);
        document.body.appendChild(modalFinal);
        setTimeout(() => {
            modalFinal.remove();
        }, 3000)
    }
}

let quiz = new Quiz();

quiz.createQuiz()