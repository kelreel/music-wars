import React from "react";
import styles from './Question.module.scss';
import {IntroQuestion} from "../../../types/intro";

type Props = {
    question: IntroQuestion;
    onAnswer: Function;
};

export const Question = ({question, onAnswer}: Props) => {
    return <div className={styles.root}>
        <p className={styles.title}>
            {question.title}
        </p>
        <ul className={styles.variants}>
            {question.options.map(option => <li tabIndex={1} key={option.title} onClick={() => onAnswer(option)}
                                                className={styles.option}>{option.title}</li>)}
        </ul>
    </div>;
};