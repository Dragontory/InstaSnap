import React, { useState, useEffect } from "react";
import "./Progressbar.css";

const Progressbar = ({ index, activeIndex, duration }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((previousProgress) => {
                if (previousProgress < 100) {
                    return previousProgress + 1;
                }
                clearInterval(interval);
                return previousProgress;
            });
        }, duration / 100);

        return () => clearInterval(interval);
    }, [duration, activeIndex]);

    useEffect(() => {
        setProgress(0);
    }, [activeIndex]);

    const isActive = index === activeIndex;

    return (
        <div>
            <div className={`${isActive ? "progress-bar" : ""}`} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default Progressbar;
