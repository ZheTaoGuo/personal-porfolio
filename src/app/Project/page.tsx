'use client'
import {projects} from '../../config/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Project () {
	return (
		<section id="project-section" className="py-20 md:py-2 mb-6 mx-auto max-w-6xl">
				<div className="flex flex-col justify-center items-center">
					<div
						className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
						Projects
					</div>
				</div>
			<div className="flex flex-row justify-center items-center gap-14 mt-5">
				{projects.map((project) => (
					<div
						className="rounded-xl max-w-[320px] min-h-[390px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 md:p-5 3xl:p-[18px] bg-[#18315b] duration-500 ease-in-out group-hover:translate-y-[-0.5rem]">
						<div key={project.id} className="flex flex-col items-center justify-between h-full w-full">
								<div className="relative w-full">
									<Image src={project.coverImageUrl}
										   alt={project.coverImageUrl}
										   width={100}
										   height={100}
										   loading="lazy"
										   className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
								</div>
								<div className="text-slate-100 flex flex-col">
									<div className="my-3 flex items-center justify-between">
										<div className="text-md font-bold text-slate-100 group-hover:text-[#8de8ff]">
											{project.title}
										</div>
									</div>
								</div>
								<div className="text-sm text-slate-3000">
									{project.description}
								</div>
						</div>

						<div className="flex flex-col justify-between">
							<div className="inset-x-0 bottom-0 text-sm font-bold bg-blue-100 text-slate-600 px-0.5 py-0.5 rounded justify-center">
								<Link href={project.sourcecode}> Source Code</Link>
							</div>
						</div>

					</div>
				))}
			</div>
		</section>
	)
}