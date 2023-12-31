export type Experience = {
    achievements: string[];
    company: string;
    iconUrl: string;
    jobPosition: string ;
    duration: string;
    companyUrl: string;
 }

const experiences: Experience[] = [
    {
        iconUrl: "/SAP.png",
        company: "SAP Labs Singapore",
        companyUrl: "https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/guides/getting-started/mdk/overview.html",
        duration: "September 2023 - Present",
        jobPosition: "Mobile Engineering Intern",
        achievements: [
            `Worked under the SAP Mobile Development Toolkit team, focusing on enabling developers and technical business users to build multi-channel applications for iOS and Android devices.`,
            `Investigated and fixed production issues related to reusable components on the Mobile Development Kit development platform by using Android, Swift and TypeScript`,

        ]
    },
    {
        iconUrl: "/SAP.png",
        company: "SAP Labs Singapore",
        companyUrl: "https://help.sap.com/docs/personalized-recommendation?locale=en-US",
        duration: "Jan 2023 - August 2023",
        jobPosition: "Software Engineer Intern",
        achievements: [
            `Led the design and development of a correlation id logging feature by using an internal Python Logging Library on the Kibana dashboard accompanied with comprehensive unit testing, reducing the the error monitoring process time process by 30% in the development environment.`,
            `Fixed the unit test stage on the Jenkins CI/CD pipeline that improved the efficiency of unit testing process by 10%.`,
            `Conducted end to end testing using Nosetests and developed a validator that adhered to Object-Oriented Design principles to ensure the functional and syntax correctness of the system’s input parameters.`,
            `Designed custom exceptions to handle user download errors from the application’s Amazon S3 object storage. `

        ]
    },
    {
        iconUrl: "/LTA.png",
        company: "Land Transport Authority",
        companyUrl: "https://www.lta.gov.sg/content/ltagov/en.html",
        duration: "March 2019 - June 2019",
        jobPosition: "Software Engineering Intern",
        achievements: [
            `Developed an android mobile application proof of concept using Java to integrate a location-based service API with speech recognition for 5 pilot visually impaired users.`,
            `Leveraged Amazon Alexa Voice AI as a natural language processing tool to handle speech to text recognition and custom Alexa skills on AWS Lambda to validate speech input.`,
            `Engineered optimal routes to commuter destinations and reduced commuter wait times for the visually impaired users by 20%.`
]
    },
    {
        iconUrl: "/BevEat.png",
        company: "Bev Eat",
        companyUrl: "http://www.beveat.com/",
        duration: "September 2018 - February 2019",
        jobPosition: "Software Engineering Intern",
        achievements: [
            `Developed a chatbot using React and JavaScript on a charity management platform that increased food delivery service acceptance rates by 50% for 10 pilot food delivery riders.`,
            `Deployed the chatbot on AWS Amplify to handle scalability based on usage and used AWS Lambda to handle user authentication.`,

        ]
    }
]

export default experiences;