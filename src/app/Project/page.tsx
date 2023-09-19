'use client'
import Image from 'next/image'
import Link from 'next/link'
import SkillTag from '@/app/components/SkillTag/page'
import projects from '../../config/projects'

export default function Project () {
	return (
		<section id="project_section" className="py-20 md:py-2 mb-6 mx-auto max-w-6xl">
				<div className="flex flex-col justify-center items-center">
					<div
						className="text-xl font-bold md:text-4xl bg-clip-text text-[#8de8ff]">
						Projects
					</div>
				</div>
			<div className="flex flex-row flex-wrap justify-center items-center gap-14 mt-5">
				{projects.map((project) => (
					<div key={project.id} className="group">

							<div className="rounded-xl min-h-[500px] max-w-[320px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 md:p-5 3xl:p-[18px] bg-[#18315b] duration-500 ease-in-out group-hover:translate-y-[-0.5rem]">
								<div className="h-full w-full">
									<div className="relative w-full">
										<Image src={project.coverImageUrl}
											   alt={project.coverImageUrl}
											   width={300}
											   height={200}
											   loading="lazy"
											   className="min-w-[200px] min-h-[200px] object-cover rounded-md opacity-60 group-hover:opacity-100 transition-opacity"/>
									</div>
									<div className="text-slate-100 flex flex-col">
										<div className="my-3 flex items-center justify-between">
											<div className="text-md font-bold text-slate-100 group-hover:text-[#8de8ff]">
												{project.title}
											</div>
										</div>
									</div>
									<div className="flex flex-wrap w-full text-sm text-slate-100">
										{project.description}
									</div>
									<div className="container mx-auto flex flex-wrap mt-3">
										<Link href={project.sourcecode} className="px-1 py-1 rounded bg-white text-gray-800 hover:bg-gray-100 font-bold border border-gray-400 rounded shadow">GitHub</Link>
									</div>
									<div className="flex flex-wrap mt-3 gap-2">
										{project.tags.map((tag) => (
											<SkillTag name={tag}/>
										))}
									</div>
								</div>
							</div>

					</div>
					))}
			</div>
		</section>
	)}