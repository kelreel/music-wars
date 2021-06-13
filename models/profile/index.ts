import {combine, createEffect, createEvent, restore} from "effector";
import {Storage} from "../../utils/Storage";

export const initFx = createEffect((params: any) => {
    Storage.init(params);
});


export const levelChanged = createEvent<number | null>();
export const level$ = restore(levelChanged, null);

export const questionNumberChanged = createEvent<number>();
export const questionNumber$ = restore(questionNumberChanged, 0);

export const scoreChanged = createEvent<number>();
export const score$ = restore(scoreChanged, 0);

export const fingerprintChanged = createEvent<string | null>();
export const fingerprint$ = restore(fingerprintChanged, null);

export const profileState$ = combine({
    level: level$,
    score: score$,
    questionNumber: questionNumber$,
    fingerprint: fingerprint$
});
