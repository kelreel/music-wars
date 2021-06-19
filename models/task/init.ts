import {combine, forward, merge, sample} from "effector";
import {Snippet, SnippetType} from "../../types/task";
import {
    baselineSrcChanged,
    fetchSnippetsFx,
    humanSrcChanged,
    modelSrcChanged,
    sendData,
    sendDataFx,
    snippetNumberChanged,
    TaskGate, taskState$
} from "./index";
import {API_BASE_URL} from "../../api";
import {profileState$} from "../profile";


forward({
    from: merge([sendDataFx.doneData, TaskGate.open]),
    to: fetchSnippetsFx
});

sample({
    clock: sendData,
    source: combine({
        task: taskState$,
        profile: profileState$
    }),
    fn: ({task, profile}) => {
        return {
            user: {
                id: profile.fingerprint,
                lvl: profile.level,
            },
            scores : {
                score_model_human: task.humanRate,
                score_baseline_human: task.baselineRate,
                score_model_baseline: task.modelRate
            },
            flags: {
                flag_human: task.humanPlayed,
                flag_model: task.modelPlayed,
                flag_baseline: task.baselinePlayed
            },
            sample: task.snippetNumber
        };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target: sendDataFx
});

fetchSnippetsFx.doneData.watch((data) => {
    console.log(`Snippet loaded: ${data[0].sample}`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const snippets: Snippet[] = data.map((item) => ({...item, source: `${API_BASE_URL}/${item.source}`}));
    humanSrcChanged(snippets.find((s) => s.type === SnippetType.human)?.source ?? null);
    modelSrcChanged(snippets.find((s) => s.type === SnippetType.model)?.source ?? null);
    baselineSrcChanged(snippets.find((s) => s.type === SnippetType.baseline)?.source ?? null);
    snippetNumberChanged(snippets[0].sample);
});