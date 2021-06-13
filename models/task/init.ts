import {forward, sample} from "effector";
import {Snippet, SnippetType} from "../../types/task";
import {
    baselineSrcChanged,
    fetchSnippetsFx,
    humanSrcChanged,
    modelSrcChanged,
    sendData,
    sendDataFx,
    TaskGate
} from "./index";
import {questionNumber$} from "../profile";


// forward({
//     from: sendDataFx.doneData,
//     to: fetchSnippetsFx
// });

sample({
    clock: [sendDataFx.doneData, TaskGate.open],
    source: questionNumber$,
    target: fetchSnippetsFx
});

forward({
    from: sendData,
    to: sendDataFx
});

fetchSnippetsFx.doneData.watch((data) => {
    console.log('snippets loaded');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const snippets: Snippet[] = [...data];
    humanSrcChanged(snippets.find((s) => s.type === SnippetType.human)?.source ?? null);
    modelSrcChanged(snippets.find((s) => s.type === SnippetType.model)?.source ?? null);
    baselineSrcChanged(snippets.find((s) => s.type === SnippetType.baseline)?.source ?? null);
});