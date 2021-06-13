import {
    initFx,
    levelChanged,
    profileState$,
    questionNumber$,
    questionNumberChanged,
    scoreChanged
} from "./index";
import {merge, sample} from "effector";
import {sendDataFx} from "../task";

questionNumber$.on(sendDataFx.doneData, (state) => state + 1);

sample({
    clock: merge([levelChanged, scoreChanged, questionNumberChanged, sendDataFx.doneData]),
    source: profileState$,
    target: initFx
});