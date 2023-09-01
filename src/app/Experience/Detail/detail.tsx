import experiences from '../../../config/experiences'
import styles from './style.module.css'

export default function Detail({
                                   selectedExperienceIndex,
                               }: {
    selectedExperienceIndex: number
}) {
    const experience = experiences[selectedExperienceIndex]
    return (
        <div className="flex flex-col md:w-2/3 gap-2">
            <div className="text-xl lg:text-2xl text-slate-100 font-bold">
                {experience.jobPosition}{' '}
                <span className="text-[#8de8ff]">@ {experience.company}</span>
            </div>
            <div className="text-slate-200 text-md">{experience.duration}</div>
            <ul className='text-slate-300'>
                {experience.achievements.map((a, i) => (
                    <li className={`text-md relative pl-6 ${styles.list} ${i === experience.achievements.length - 1 ? 'mb-0' : 'mb-3'}`} key={i}>{a}</li>
                ))}
            </ul>
        </div>
    )
}
