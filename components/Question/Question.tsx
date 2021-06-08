import React from "react";
import styles from './Question.module.scss'

export const Question = () => {
    let a = 123;

    return <div className={styles.root}>
        <p className={styles.title}>
            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, in.
        </p>
        <ul className={styles.variants}>
            <li className={styles.option}>Option 1</li>
            <li className={styles.option}>Lorem ipsum dolor sit amet.</li>
            <li className={styles.option}>Lorem</li>
        </ul>
    </div>
}