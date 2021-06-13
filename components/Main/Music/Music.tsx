import React from "react";
import {useEffect, useRef, useState} from "react";

type Props = {
    src: string;
    onPlayed?: Function;
};

export const Music = ({src, onPlayed}: Props) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlayed, setIsPlayed] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (!isPlayed) {
                const duration = audioRef.current?.duration ?? 10000;
                const currentTime = audioRef.current?.currentTime ?? 1000;

                if (currentTime > duration * 0.75) {
                    setIsPlayed(true);
                }
            }
        };
        audioRef.current?.addEventListener('timeupdate', listener);
        return () => audioRef.current?.removeEventListener('timeupdate', listener);
    }, []);

    useEffect(() => {
        if (isPlayed) {
            onPlayed && onPlayed();
        }
    }, [isPlayed]);

    return <div>
        <audio
            controls
            ref={audioRef}
            src={src}>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    </div>;
};