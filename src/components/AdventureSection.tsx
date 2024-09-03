"use client";

import React, { useState, useEffect } from 'react';

interface AdventureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    image?: React.ReactNode;
    foundationDate: Date;
}

const AdventureSection: React.FC<AdventureSectionProps> = ({ title, subtitle, description, image, foundationDate }) => {
    const [years, setYears] = useState<number>(0);
    const [progress, setProgress] = useState<number[]>([0, 0, 0]);
    const [currentTopic, setCurrentTopic] = useState<number>(0);
    const topics = ["Aventura", "Diretoria", "Amizades"];

    // Effect for calculating and updating years
    useEffect(() => {
        if (!(foundationDate instanceof Date) || isNaN(foundationDate.getTime())) {
            console.error("Invalid foundation date.");
            return;
        }

        const calculateYears = () => {
            const now = new Date();
            return now.getFullYear() - foundationDate.getFullYear();
        };

        const end = calculateYears();
        const incrementTime = 50;

        const increment = () => {
            setYears(prevYears => {
                if (prevYears < end) {
                    return Math.min(prevYears + 1, end);
                }
                return end;
            });
        };

        const timer = setInterval(increment, incrementTime);
        return () => clearInterval(timer);
    }, [foundationDate]);

    // Effect for animating progress bars
    useEffect(() => {
        const animateProgress = () => {
            const duration = 600000; // 10 minutes
            const intervalTime = 50;
            const incrementValue = 100 * (intervalTime / duration);

            const increment = (index: number) => {
                setProgress(prevProgress => {
                    const newProgress = [...prevProgress];
                    if (newProgress[index] < 94) {
                        newProgress[index] = Math.min(newProgress[index] + incrementValue, 100);
                    }
                    return newProgress;
                });
            };

            const updateProgress = () => {
                const nextTopic = (currentTopic + 1) % topics.length;
                setCurrentTopic(nextTopic);
                const startTime = Date.now();

                const timer = setInterval(() => {
                    if (Date.now() - startTime < duration) {
                        increment(currentTopic);
                    } else {
                        clearInterval(timer);
                        if (nextTopic !== 0) {
                            updateProgress();
                        }
                    }
                }, intervalTime);
            };

            updateProgress();
        };

        animateProgress();
    }, [currentTopic, topics]);

    return (
        <div className='min-h-screen bg-white mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-12">
                    <h3 className="text-2xl font-semibold text-orange-600">{title}</h3>
                    <h1 className="text-5xl font-extrabold text-gray-900">{subtitle}</h1>
                    <p className="text-lg text-gray-700">{description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-black text-white rounded-md flex flex-col items-center justify-center p-8">
                            <div className="text-6xl font-bold flex items-center">
                                {years}
                                <span className="text-orange-600 text-3xl ml-2">+</span>
                            </div>
                            <div className="text-xl mt-2">anos de Experiência</div> 
                        </div>
                        <article className="space-y-8"> 
                            {topics.map((topic, index) => (
                                <div key={index} className="flex flex-col-reverse">
                                    <div className="flex-1">
                                        <div className="relative w-full h-3 bg-gray-200 rounded-full">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-orange-600 rounded-full"
                                                style={{ width: `${progress[index]}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className="text-lg">
                                            {topic}
                                        </div>
                                        <div className="text-2xl font-bold">
                                            {Math.round(progress[index])}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
                    </div>
                </div>
                <div className="flex items-end justify-end col-span-1 lg:col-span-1">
                    <div className="w-full h-full flex items-end justify-end overflow-hidden rounded-md">
                        {image}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureSection;