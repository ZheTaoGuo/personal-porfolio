'use client'
import Button from './Button'

export default function SkillTag({
	name,
}: {
	name: string
}) {
	switch (name) {
		case 'ExpressJS':
			return <Button name='ExpressJS' />
		case 'Python Flask':
			return <Button name='Python Flask' />
		case 'PostgreSQL':
			return <Button name='PostgreSQL' />
		case 'Python':
			return <Button name='Python'/>
		case 'Rabbitmq':
			return <Button name='RabbitMQ'/>
		case 'Bootstrap':
			return <Button name='Bootstrap' />
		case 'Tailwind':
			return <Button name='Tailwind CSS'/>
		case 'Temporal':
			return <Button name='Temporal'/>
		case 'Nextjs':
			return <Button name='NextJS' />
		case 'Typescript':
			return <Button name='Typescript' />
		case 'VueJS':
			return <Button name='VueJS' />
		case 'Spring Boot':
			return <Button name='Spring Boot' />
		case 'Firebase':
			return <Button name='FireBase' />
		case 'ThymeLeaf':
			return <Button name='ThymeLeaf' />
		case 'Java Spring Boot':
			return <Button name='Java Spring Boot' />
		case 'MySQL':
			return <Button name='MySQL' />
		case 'Auth0':
			return <Button name='Auth0' />
		case 'Netlify':
			return <Button name='Netlify' />
		default:
			return <></>
	}
}