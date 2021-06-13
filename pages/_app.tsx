import 'normalize.css';
import '../styles/globals.css';
import type {AppProps} from 'next/app';

// import dynamic from 'next/dynamic';
//
// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../models/init'),
//     { ssr: false }
// );

import '../models/init';
import {useEffect} from "react";
import {Storage} from "../utils/Storage";
import {fingerprintChanged, levelChanged, questionNumberChanged, scoreChanged} from "../models/profile";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        if (Storage.isInited()) {
            const obj = {
                level: Storage.level,
                qn: Storage.questionNumber,
                score: Storage.score,
                fp: Storage.fingerprint
            };
            setTimeout(() => {
                levelChanged(obj.level);
                scoreChanged(obj.score!);
                questionNumberChanged(obj.qn!);
                fingerprintChanged(obj.fp);
            }, 0);
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
