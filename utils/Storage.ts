import FingerprintJS from '@fingerprintjs/fingerprintjs';

const LEVEL = 'LEVEL';
const QUESTION = 'QUESTION';
const SCORE = 'SCORE';
const FINGERPRINT = 'FINGERPRINT';

export abstract class Storage {
    static set level (value: any) {
        localStorage.setItem(LEVEL, String(value));
    }

    static get level (): number | null {
        const parsed = localStorage.getItem(LEVEL);
        return parsed ? parseInt(parsed) : null;
    }

    static set questionNumber (value: any) {
        localStorage.setItem(QUESTION, String(value));
    }

    static get questionNumber (): number | null {
        const parsed = localStorage.getItem(QUESTION);
        return parsed ? parseInt(parsed) : null;
    }

    static set score (value: any) {
        localStorage.setItem(SCORE, String(value));
    }

    static get score (): number | null {
        const parsed = localStorage.getItem(SCORE);
        return parsed ? parseInt(parsed) : null;
    }

    static async setFingerprint () {
        const fpPromise = await FingerprintJS.load();
        const {visitorId} = await fpPromise.get();
        localStorage.setItem(FINGERPRINT, visitorId);
    }

    static get fingerprint (): string | null {
        return localStorage.getItem(FINGERPRINT);
    }

    static isInited (): boolean {
        return this.level !== null && this.questionNumber !== null && this.fingerprint !== null && this.score !== null;

    }

    static async init (params: {level: number | null, score: number, questionNumber: number}) {
        if (!this.fingerprint) {
            this.setFingerprint();
        }
        this.level = params.level;
        this.score = params.score;
        this.questionNumber = params.questionNumber;
    }
}