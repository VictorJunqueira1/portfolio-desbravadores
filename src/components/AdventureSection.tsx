"use client";

import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

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
    const topics = ["Aventura", "Diretoria", "Amizades"];

    useEffect(() => {
        if (!foundationDate) {
            console.error("Foundation date is not provided.");
            return;
        }

        const calculateYears = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            const foundationYear = foundationDate.getFullYear();
            return currentYear - foundationYear;
        };

        const end = calculateYears();
        const incrementTime = 500; // Intervalo de atualização

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

    useEffect(() => {
        const animateProgress = () => {
            const duration = 10000;
            const intervalTime = 1000;

            const increment = (index: number) => {
                setProgress(prevProgress => {
                    const newProgress = [...prevProgress];
                    if (newProgress[index] < 100) {
                        newProgress[index] = Math.min(newProgress[index] + 1, 100);
                    }
                    return newProgress;
                });
            };

            const timers = topics.map((_, index) => setInterval(() => increment(index), intervalTime));

            setTimeout(() => timers.forEach(timer => clearInterval(timer)), duration);
        };

        animateProgress();
    }, [topics]);

    return (
        <div className='min-h-screen bg-white mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
                    <h1 className="text-3xl font-semibold">{subtitle}</h1>
                    <p className="text-sm">{description}</p>
                    <div className="flex items-center space-x-4">
                        <div className="bg-black text-white rounded-md w-32 h-32 flex items-center justify-center text-4xl font-bold">
                            {years}+
                        </div>
                        <article className="text-xl font-medium">
                            anos de Experiência
                        </article>
                    </div>
                    <div className="mt-8 flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            {topics.map((topic, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="flex-1">
                                        <Progress
                                            value={progress[index]}
                                            className="w-full h-4 bg-gray-200 rounded-full"
                                        />
                                    </div>
                                    <div className="text-xl font-bold ml-4">
                                        {progress[index]}%
                                    </div>
                                    <div className="text-lg ml-2">
                                        {topic}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {image}
                </div>
            </div>
        </div>
    );
};

export default AdventureSection;