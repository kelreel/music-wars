import {IntroQuestion} from "../../types/intro";

export const introQuestionsData: IntroQuestion[] = [
    {
        title: '1. Lorem ipsum dolor sit amet',
        options: [
            {
                title: 'Option 1',
                score: 0
            },
            {
                title: 'Option 2 (correct)',
                score: 1
            },
            {
                title: 'Option 3',
                score: 0
            }
        ]
    },
    {
        title: '2. Lorem ipsum dolor sit amet',
        options: [
            {
                title: 'Option 1 (correct)',
                score: 1
            },
            {
                title: 'Option 2',
                score: 0
            },
            {
                title: 'Option 3',
                score: 0
            }
        ]
    },
    {
        title: '3. Lorem ipsum dolor sit amet',
        options: [
            {
                title: 'Option 1',
                score: 0
            },
            {
                title: 'Option 2',
                score: 0
            },
            {
                title: 'Option 3 (correct)',
                score: 1
            }
        ]
    }
];