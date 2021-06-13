import React from 'react';
import { Range, getTrackBackground } from "react-range";

type Props = {
    value: number,
    onChange: (val: number) => void;
};

export const MusicRange = ({value, onChange}: Props) => {
    return <Range
        values={[value]}
        step={1}
        min={-2}
        max={2}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props, children }) => (
            <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%"
                }}
            >
                <div
                    ref={props.ref}
                    style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                            values: [value],
                            colors: ["#548BF4", "#f3f3f3"],
                            min: -2,
                            max: 2
                        }),
                        alignSelf: "center"
                    }}
                >
                    {children}
                </div>
            </div>
        )}
        renderThumb={({ props, isDragged }) => (
            <div
                {...props}
                style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA"
                }}
            >
                <div
                    style={{
                        height: "16px",
                        width: "5px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC"
                    }}
                />
            </div>
        )}
    />;
};