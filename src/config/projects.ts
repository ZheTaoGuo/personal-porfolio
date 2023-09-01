import {Project} from './types'

const projects: Project[] = [
    {
        id: 'carbon-offset-marketplace',
        coverImageUrl: '/CarbonMarketplace.png',
        title: 'Carbon Offset Marketplace',
        description: 'A platform that enables individuals and organisations to reduce greenhouse gases through voluntary carbon offsetting.',
        sourcecode: 'https://github.com/IS213-G9-tokyobanana/carbon-marketplace-backend'
    },
    {
        id: 'free-foodie',
        coverImageUrl: '/FreeFoodie.png',
        title: 'Free Foodie',
        description: 'A platform that provides users dietary consumptions insights and empower them to manage what they intend to consume with existing ingredients that they have to reduce unnecessary food waste.',
        sourcecode: 'https://github.com/ZheTaoGuo/IS216Project'
    },
    {
        id: 'corporate-pass-system',
        coverImageUrl: '/SSS_Corporate_Pass_System.png',
        title: 'Corporate Pass System',
        description: 'A platform that facilitates the booking of corporate passes for internal Singapore Sports School Staff.',
        sourcecode: 'https://github.com/Hoo-dkwozD/PassAway'
    }

]

export { projects }