import {createGate} from "effector-react";
import {combine, createEffect, createEvent, restore} from "effector";
import {Snippet} from "../../types/task";
import {getSnippet, sendScore} from "../../api";

const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';

export const fetchSnippetsFx = createEffect<any, Snippet[]>();
fetchSnippetsFx.use(getSnippet);

export const sendDataFx = createEffect(sendScore);

export const TaskGate = createGate();

export const humanRateChanged = createEvent<number>();
export const modelRateChanged = createEvent<number>();
export const baselineRateChanged = createEvent<number>();

export const snippetNumberChanged = createEvent<number>();

export const humanPlayedChanged = createEvent<boolean>();
export const modelPlayedChanged = createEvent<boolean>();
export const baselinePlayedChanged = createEvent<boolean>();

export const humanRate$ = restore(humanRateChanged, 0).reset(sendDataFx.doneData);
export const modelRate$ = restore(modelRateChanged, 0).reset(sendDataFx.doneData);
export const baselineRate$ = restore(baselineRateChanged, 0).reset(sendDataFx.doneData);
export const snippetNumber$ = restore(snippetNumberChanged, 0);

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
    isSending: sendDataFx.pending,
    snippetNumber: snippetNumber$
});
