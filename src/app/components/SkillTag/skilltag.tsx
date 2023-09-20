import Button from './Button'

export default function SkillTag({
	name,
	width = 200,
	height = 20,
}: {
	name: string
	width: number
	height: number
}) {
	switch (name) {
		case 'ExpressJS':
			return <Button name='ExpressJS' width={width} height={height} />
		case 'Python Flask':
			return <Button name='Python Flask' width={width} height={height} />
		case 'PostgreSQL':
			return <Button name='PostgreSQL' width={width} height={height} />
		case 'Python':
			return <Button name='Python' width={width} height={height} />
		case 'Rabbitmq':
			return <Button name='RabbitMQ'width={width} height={height} />
		case 'Bootstrap':
			return <Button name='Bootstrap' width={width} height={height} />
		case 'Tailwind':
			return <Button name='Tailwind CSS' width={width} height={height} />
		case 'Temporal':
			return <Button name='Temporal' width={width} height={height} />
		case 'Nextjs':
			return <Button name='NextJS' width={width} height={height} />
		case 'Typescript':
			return <Button name='Typescript' width={width} height={height} />
		case 'VueJS':
			return <Button name='VueJS' width={width} height={height} />
		case 'Spring Boot':
			return <Button name='Spring Boot' width={width} height={height} />
		case 'Firebase':
			return <Button name='FireBase' width={width} height={height}/>
		case 'ThymeLeaf':
			return <Button name='ThymeLeaf' width={width} height={height} />
		case 'Java Spring Boot':
			return <Button name='Java Spring Boot' width={width} height={height} />
		case 'MySQL':
			return <Button name='MySQL' width={width} height={height} />
		case 'Auth0':
			return <Button name='Auth0' width={width} height={height} />
		case 'Netlify':
			return <Button name='Netlify' width={width} height={height} />
		default:
			return <></>
	}
}