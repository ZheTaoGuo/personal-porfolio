'use client'
import ProjectComponent from '@/app/components/Project/Project'
import Tags from '@/app/components/Project/Tags'
import {ColorTags} from '@/app/components/Project/Tags'
export default function Project() {
	return (
		<section id="project_section" className="mx-auto max-w-5xl md:gap-5 lg:gap-4 xl:gap-3 py-20">
			<div className="flex flex-col justify-center items-center">
				<div
					className="text-xl font-bold md:text-4xl bg-clip-text text-cyan-400">
					Projects
				</div>
			</div>
			<div className="flex flex-col gap-6 mt-12">
				<ProjectComponent
					name="Carbon Offset Marketplace"
					description="Enables individuals and organisations to reduce greenhouse gases through voluntary carbon offsetting"
					link="https://github.com/IS213-G9-tokyobanana/carbon-marketplace-backend"
					img={{
						src: 'carbon-offset-marketplace.png',
						alt: 'Carbon Offset Marketplace',
					}}
					category={
						<>
							<Tags color={ColorTags.FUCHSIA}>Python Flask</Tags>
							<Tags color={ColorTags.LIME}>Next.js</Tags>
							<Tags color={ColorTags.YELLOW}>Express.js</Tags>
							<Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
							<Tags color={ColorTags.GRAY}>RabbitMQ</Tags>
							<Tags color={ColorTags.INDIGO}>Temporal</Tags>
						</>
					}
				/>
				<ProjectComponent
					name="Free Foodie"
					description="Provides users dietary insights and empower them to manage what they intend to consume with existing ingredients to reduce food waste."
					link="https://github.com/ZheTaoGuo/IS216Project"
					img={{ src: '/fflogo-white.png', alt: 'Free Foodie' }}
					category={
						<>
							<Tags color={ColorTags.VIOLET}>Vue.js</Tags>
							<Tags color={ColorTags.EMERALD}>BootStrap</Tags>
							<Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
							<Tags color={ColorTags.GREEN}>FireBase</Tags>
							<Tags color={ColorTags.CYAN}>Netlify</Tags>
						</>
					}
				/>
				<ProjectComponent
					name="Corporate Pass System"
					description="Facilitates the booking of corporate passes for internal Singapore Sports School Staff."
					link="https://github.com/ZheTaoGuo/SSP_Corporate-Pass-Booking"
					img={{ src: '/attractions-pass.png', alt: 'Corporate Pass System' }}
					category={
						<>
							<Tags color={ColorTags.VIOLET}>Vue.js</Tags>
							<Tags color={ColorTags.INDIGO}>Typescript</Tags>
							<Tags color={ColorTags.LIME}>Java Spring Boot</Tags>
							<Tags color={ColorTags.ZINC}>ThymeLeaf</Tags>
							<Tags color={ColorTags.ROSE}>MySQL</Tags>
							<Tags color={ColorTags.BLUE}>Auth0</Tags>
						</>
					}
				/>
			</div>
		</section>
	)
}