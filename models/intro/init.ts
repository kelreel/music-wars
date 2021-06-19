import {introScore$, upScore} from "./index";

introScore$.on(upScore, (val, score) => val + score);

introScore$.watch(console.log);
