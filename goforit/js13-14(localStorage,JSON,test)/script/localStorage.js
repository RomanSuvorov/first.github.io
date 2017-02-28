/**
 * Created by Roman on 06.02.2017.
 */

var dataTest = {
    title: 'Тест модуля 13-14 (localStorage and JSON)',
    data : [
    {   question: 'First question',
        answer: [
            '1answer',
            '2 answer',
            '3 answer',
            '4 answer'
        ],
        value: [1,1,0,0]
    },
    {   question: 'Second question',
        answer: [
            '1 answer',
            '2 answer',
            '3 answer',
            '4 answer'
        ],
        value: [1,0,0,0]
    },
    {   question: 'Third question',
        answer: [
            '1 answer',
            '2 answer',
            '3 answer',
            '4 answer'
        ],
        value: [1,0,0,0]
    },
    {   question: 'Fourth question',
        answer: [
            '1 answer',
            '2 answer',
            '3 answer',
            '4 answer'
        ],
        value: [1,0,0,0]
    },
    {   question: 'Fifth question',
        answer: [
            '1 answer',
            '2 answer',
            '3 answer',
            '4 answer'
        ],
        value: [1,0,0,0]
    }
]

};

localStorage.setItem('dataForTest', JSON.stringify(dataTest));

