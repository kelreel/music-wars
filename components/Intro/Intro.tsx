import React, {useState} from 'react';
import styles from "./Intro.module.scss";
import {Question} from "./Question/Question";
import {introQuestionsData} from "./data";
import {useStore} from "effector-react";
import {introScore$, upScore} from "../../models/intro";
import {levelChanged} from "../../models/profile";


export const Intro = () => {
    const score = useStore(introScore$);

    const [step, setStep] = useState(0);

    const onAnswer = (variant: any) => {
        if (step === introQuestionsData.length - 1) {
            levelChanged(score + variant.score);
        } else {
            upScore(variant.score);
            setStep(step + 1);
        }
    };

    return <main className={styles.main}>
        <h1 className={styles.title}>
            Music Wars 🎵
        </h1>

        <p className={styles.description}>
            Давайте определим уровень музыкальных знаний
        </p>

        <Question question={introQuestionsData[step]} onAnswer={onAnswer}/>

    </main>;
};