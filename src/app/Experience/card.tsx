import { Experience } from '../../config/types'
import experiences from '../../config/experiences'
import Image from 'next/image'

interface CardProps {
    selectedExperienceIndex: number
    handleExperienceClick: (index: number) => void
}

export default function Card({
    selectedExperienceIndex,
    handleExperienceClick,
}: CardProps) {
    {}
    return (
        <div>
            <ol className="relative border-l border-gray-200 min-w-full">
                {experiences.map((experience: Experience, index: number) => (
                    <li
                        className={`ml-6 ${
                            selectedExperienceIndex === index
                                ? 'bold underline-offset-[10px] text-cyan-400'
                                : ''
                        } ${index === experiences.length - 1 ? 'pb-0' : 'pb-10'}`}
                        key={index}
                        onClick={() => handleExperienceClick(index)}
                    >
                        <div
                            className={`absolute w-4 h-4 rounded-full mt-1.5 -left-2 border border-white ${
                                selectedExperienceIndex === index ? 'bg-cyan-400' : 'bg-slate-100'
                            }`}
                        ></div>
                        <div className="flex items-center mb-1">
                            <span className={`text-md lg:text-xl leading-none font-bold ${
                                    selectedExperienceIndex === index
                                        ? 'text-cyan-400'
                                        : 'text-slate-100'}`}
                            >
                            {experience.company}
                            </span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}