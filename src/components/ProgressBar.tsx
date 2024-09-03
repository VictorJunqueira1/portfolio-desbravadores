import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(updateProgress);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(updateProgress);
    }, []);

    const topics = [
        { title: "Aventura", value: progress },
        { title: "Diretoria", value: progress },
        { title: "Amizade", value: progress }
    ];

    return (
        <div className="flex flex-col gap-4">
            {topics.map((topic, index) => (
                <div key={index} className="flex flex-col justify-between gap-1">
                    <div className="flex justify-between">
                        <div className="text-base font-semibold">{topic.title}</div>
                        <div className="text-lg">{`${topic.value}%`}</div>
                    </div>
                    <div className="w-full">
                        <Progress value={topic.value} className="w-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};