import {Project} from './types'

const projects: Project[] = [
    {
        id: 'carbon-offset-marketplace',
        coverImageUrl: '/carbon-offset-marketplace.png',
        title: 'Carbon Offset Marketplace',
        description: 'Enables individuals and organisations to reduce greenhouse gases through voluntary carbon offsetting.',
        sourcecode: 'https://github.com/IS213-G9-tokyobanana/carbon-marketplace-backend',
        tags: ['Python Flask', 'Nextjs', 'ExpressJS', 'PostgreSQL', 'Rabbitmq', 'Temporal'],

    },
    {
        id: 'free-foodie',
        coverImageUrl: '/fflogo-white.png',
        title: 'Free Foodie',
        description: 'Provides users dietary insights and empower them to manage what they intend to consume with existing ingredients to reduce food waste.',
        sourcecode: 'https://github.com/ZheTaoGuo/IS216Project',
        tags: ['VueJS', 'Bootstrap', 'PostgreSQL', 'Firebase', 'Netlify'],
    },
    {
        id: 'corporate-pass-system',
        coverImageUrl: '/attractions-pass.png',
        title: 'Corporate Pass System',
        description: 'Facilitates the booking of corporate passes for internal Singapore Sports School Staff.',
        sourcecode: 'https://github.com/Hoo-dkwozD/PassAway',
        tags: ['VueJS', 'Typescript', 'Java Spring Boot','Thymeleaf','MySQL','Auth0'],
    }

]

export default projects;