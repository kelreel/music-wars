import React from "react";
import styles from './Task.module.scss';
import {Music} from "../Music/Music";
import {MusicRange} from "./Range";
import {useStore} from "effector-react";
import {
    baselinePlayedChanged,
    baselineRateChanged,
    humanPlayedChanged,
    humanRateChanged, modelPlayedChanged,
    modelRateChanged, sendData,
    TaskGate,
    taskState$
} from "../../../models/task";

export const Task = () => {
    const {modelRate, humanRate, baselineRate, humanSrc, modelSrc, baselineSrc, isSending } = useStore(taskState$);
    return <div className={styles.main}>
        <TaskGate/>
        <div className={styles.top}>
            <div className="human">
                {humanSrc && <Music src={humanSrc} onPlayed={() => humanPlayedChanged(true)}/>}
            </div>
            <div className={styles.range}>
                <MusicRange value={modelRate} onChange={(val) => modelRateChanged(val)}/>
            </div>
            <div className="model">
                {modelSrc && <Music src={modelSrc} onPlayed={() => modelPlayedChanged(true)} />}
            </div>
        </div>
        <div className={styles.rangesContainer}>
            <div className={styles.range}>
                <MusicRange value={humanRate} onChange={(val) => humanRateChanged(val)}/>
            </div>
            <div className={styles.range}>
                <MusicRange value={baselineRate}
                            onChange={(val) => baselineRateChanged(val)}/>
            </div>

        </div>
        <div className="center">
            {baselineSrc && <Music src={baselineSrc} onPlayed={() => baselinePlayedChanged(true) } />}
        </div>
        <button disabled={isSending} onClick={() => sendData()} className={styles.nextBtn}>Next</button>
    </div>;
};