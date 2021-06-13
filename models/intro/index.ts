import {createEvent, createStore} from "effector";

export const upScore = createEvent<number>();
export const introScore$ = createStore<number>(0);

