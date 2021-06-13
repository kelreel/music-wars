import {createGate} from "effector-react";
import {combine, createEffect, createEvent, restore} from "effector";
import {Snippet, SnippetType} from "../../types/task";
import {questionNumberChanged} from "../profile";

const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';

export const fetchSnippetsFx = createEffect((id: number) => {
    return new Promise((res) => {
        setTimeout(() => {
            res([{
                type: SnippetType.human,
                source
            },
                {
                    type: SnippetType.model,
                    source
                },
                {
                    type: SnippetType.baseline,
                    source
                }] as Snippet[]);
        }, 300);
    });
});

export const sendDataFx = createEffect((data: any) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('send data fx');
            res('ok');
        }, 300);
    });
});

export const TaskGate = createGate();

export const humanRateChanged = createEvent<number>();
export const modelRateChanged = createEvent<number>();
export const baselineRateChanged = createEvent<number>();

export const humanPlayedChanged = createEvent<boolean>();
export const modelPlayedChanged = createEvent<boolean>();
export const baselinePlayedChanged = createEvent<boolean>();

export const humanRate$ = restore(humanRateChanged, 0).reset(sendDataFx.doneData);
export const modelRate$ = restore(modelRateChanged, 0).reset(sendDataFx.doneData);
export const baselineRate$ = restore(baselineRateChanged, 0).reset(sendDataFx.doneData);

export const humanPlayed$ = restore(humanPlayedChanged, false).reset(sendDataFx.doneData);
export const modelPlayed$ = restore(modelPlayedChanged, false).reset(sendDataFx.doneData);
export const baselinePlayed$ = restore(baselinePlayedChanged, false).reset(sendDataFx.doneData);

export const humanSrcChanged = createEvent<string | null>();
export const modelSrcChanged = createEvent<string | null>();
export const baselineSrcChanged = createEvent<string | null>();

export const humanSrc$ = restore(humanSrcChanged, null).reset(sendDataFx.doneData);
export const modelSrc$ = restore(modelSrcChanged, null).reset(sendDataFx.doneData);
export const baselineSrc$ = restore(baselineSrcChanged, null).reset(sendDataFx.doneData);

export const sendData = createEvent();

export const taskState$ = combine({
    humanRate: humanRate$,
    modelRate: modelRate$,
    baselineRate: baselineRate$,
    humanSrc: humanSrc$,
    modelSrc: modelSrc$,
    baselineSrc: baselineSrc$,
    humanPlayed: humanPlayed$,
    modelPlayed: modelPlayed$,
    baselinePlayed: baselinePlayed$,
    isLoading: fetchSnippetsFx.pending,
    isSending: sendDataFx.pending
});
