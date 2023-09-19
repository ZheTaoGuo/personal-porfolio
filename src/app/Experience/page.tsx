'use client'
import Card from './card'
import Detail from './Detail/detail'
import { useState } from 'react'

export default function Experience() {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

    const handleExperienceClick = (index: number) => {
        setSelectedExperienceIndex(index);
    };

    return (
        <section id="exp_section" className="py-20 md:pt-2 md:pb-20 mx-auto max-w-5xl">
            <div className="flex flex-col justify-center items-center gap-14">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl font-bold md:text-4xl bg-clip-text text-[#8de8ff]">
                        Experience
                    </div>
                </div>

                <div className="flex w-full justify-center flex-col md:flex-row gap-10 lg:gap-10 md:gap-10 cursor-pointer">
                    <Card
                        selectedExperienceIndex={selectedExperienceIndex}
                        handleExperienceClick={handleExperienceClick}
                    />
                    <Detail selectedExperienceIndex={selectedExperienceIndex}/>
                </div>
            </div>
        </section>
    );
}
