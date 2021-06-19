import {IntroQuestion} from "../../types/intro";

export const introQuestionsData: IntroQuestion[] = [
    {
        title: '1. Выберите название ступени для Доминанты',
        options: [
            {
                title: '1',
                score: 0
            },
            {
                title: '4',
                score: 0
            },
            {
                title: '5',
                score: 1
            }
        ]
    },
    {
        title: '2. Терция это',
        options: [
            {
                title: 'Интервал для 3-го тонического септаккорда',
                score: 0
            },
            {
                title: 'Интервал между любыми тремя ступенями гаммы',
                score: 0
            },
            {
                title: 'Интервал между первой и третьей ступенью гаммы',
                score: 1
            }
        ]
    },
    {
        title: '3. Диез это',
        options: [
            {
                title: 'Нотный знак, требующий повышения звука на полутон.',
                score: 1
            },
            {
                title: 'Нотный знак, требующий понижения звука на полутон.',
                score: 0
            },
            {
                title: 'Нотный знак, требующий понижения звука на тон.',
                score: 0
            }
        ]
    }
];