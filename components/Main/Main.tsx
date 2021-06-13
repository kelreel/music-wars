import React from 'react';
import {useStore} from "effector-react";
import {profileState$} from "../../models/profile";
import styles from './Main.module.scss';
import {Task} from "./Task/Task";

export const Main = () => {
    const state = useStore(profileState$);
    return <div className={styles.main}><h2>Task {state.questionNumber + 1}</h2>
        <Task/>
    </div>;
};