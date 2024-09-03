"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from './ProgressBar';

interface AdventureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    image?: React.ReactNode;
    foundationDate: Date;
}

const AdventureSection: React.FC<AdventureSectionProps> = ({ title, subtitle, description, image, foundationDate }) => {
    const [years, setYears] = useState<number>(0);
    const yearIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const calculateYears = () => {
            const now = new Date();
            return now.getFullYear() - foundationDate.getFullYear();
        };

        const startYearCalculation = () => {
            const end = calculateYears();
            const incrementTime = 500;

            yearIntervalRef.current = setInterval(() => {
                setYears(prevYears => {
                    if (prevYears < end) {
                        return prevYears + 1;
                    } else {
                        if (yearIntervalRef.current) {
                            clearInterval(yearIntervalRef.current);
                        }
                        return end;
                    }
                });
            }, incrementTime);
        };

        startYearCalculation();

        return () => {
            if (yearIntervalRef.current) {
                clearInterval(yearIntervalRef.current);
            }
        };
    }, [foundationDate]);

    return (
        <div className='min-h-screen bg-white mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8'>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-12">
                    <h3 className="text-2xl font-semibold text-orange-600">{title}</h3>
                    <h1 className="text-5xl font-extrabold text-gray-900">{subtitle}</h1>
                    <p className="text-lg text-gray-700">{description}</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <div className="bg-black text-white rounded-md flex flex-col items-center justify-center p-8">
                            <div className="text-6xl font-bold flex items-center">
                                {years}
                                <span className="text-orange-600 text-3xl ml-2">+</span>
                            </div>
                            <div className="text-xl mt-2">anos de Experiência</div>
                        </div>
                        <article className="space-y-8">
                            <ProgressBar />
                        </article>
                    </div>
                </div>
                <div className="flex items-end justify-end col-span-1 xl:col-span-1">
                    <div className="w-full h-full flex items-end justify-end overflow-hidden rounded-md">
                        {image}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureSection;