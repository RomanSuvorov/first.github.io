/**
 * Created by Roman on 03.10.2016.
 */
window.onload = function () {

    var body = document.querySelector('body');

    var testProg = {

        form: '',
        questionList: '',
        question: '',

        createForm: function (parent) {
        this.form = document.createElement('form');
        parent.appendChild(this.form);
        },

        createHeader: function (textHeader) {
            var header = document.createElement('h2');
            this.form.appendChild(header);
            header.innerHTML = textHeader;
            header.classList.add('header');
            header.style.textAlign = 'center';
        },

        createListQuestion: function () {
            this.questionList = document.createElement('ol');
            this.form.appendChild(this.questionList);
        },

        createQuestion: function (questionNumber) {
            var li = document.createElement('li');
            this.questionList.appendChild(li);

            var h4 = document.createElement('h4');
            h4.appendChild(document.createTextNode(questionNumber));
            li.appendChild(h4);

            this.question = document.createElement('ul');
            this.question.style.listStyle = 'none';
            li.appendChild(this.question);
        },

        createListCheckbox: function (questions) {
            var li = document.createElement('li');
            this.question.appendChild(li);

            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            var label = document.createElement('label');
            label.appendChild(checkbox);

            label.appendChild(document.createTextNode(questions));
            li.appendChild(label);
        },

        createButton: function (nameButton) {
            var button = document.createElement('button');
            this.form.appendChild(button);
            button.setAttribute('type', 'submit');
            button.appendChild(document.createTextNode(nameButton));
            button.classList.add('btn','btn-primary','center-block');
        }
    };

    var numQuestionNumber = 3;
    var numQuestions =3;

    testProg.createForm(body);
    testProg.createHeader('Тест по программированию');
    testProg.createListQuestion();
    for( var i = 1; i <=numQuestionNumber; i++ ) {
        testProg.createQuestion('Вопрос №'+i);
        for (var j = 1; j <=numQuestions; j++){
            testProg.createListCheckbox('Вариант ответа №'+j);
        }
    }
    testProg.createButton('Проверить мои результаты');
};