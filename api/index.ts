import axios from "axios";
import {Snippet} from "../types/task";

export const API_BASE_URL = 'https://music.mega-boosting.com';

export const getSnippet = async (): Promise<Snippet[]> => {
    const res = await axios.get(API_BASE_URL + '/snippet');
    return res.data as Snippet[];
};

interface Params {
    user: {
        id: string,
        lvl: number,
    }
    scores : {
        score_model_human: number,
        score_baseline_human: number,
        score_model_baseline: number
    },
    flags: {
        flag_human: boolean,
        flag_model: boolean,
        flag_baseline: boolean
    },
    sample: number
}

export const sendScore = async (params: Params): Promise<any> => {
    const res = await axios.post(API_BASE_URL + '/send_score', params);
    return res.data;
};