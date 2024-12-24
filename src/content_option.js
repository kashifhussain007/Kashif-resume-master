const logotext = 'Kashif Hussain';
var startDate = new Date('2021-04-01');
var currentYear = new Date().getFullYear();
var experienceYears = currentYear - startDate.getFullYear();

const meta = {
  title: 'Kashif Hussain',
  description: `I am Front End Developer
  With over ${experienceYears <= 9 ? experienceYears + ` years` : 'a decade'} of experience in building and deploying complex web applications using a variety of technologies.
  I am a passionate front-end developer with a strong focus on delivering visually appealing and user-friendly interfaces. My expertise spans across design tools like Photoshop for creating intuitive layouts, and cutting-edge technologies such as HTML, CSS, Bootstrap, JavaScript, React JS, and Next JS. I specialize in state management using React-Redux-Saga to build scalable and maintainable applications.
  I have extensive experience working with international-level APIs, including Sabre, Amadeus, AirSial, and Serene, enabling seamless integration and advanced functionality for web-based platforms. 
  `  
};

const introdata = {
  title: 'Kashif Hussain',
  subTitle: 'Front End Developer',
  highlight: `With over ${experienceYears <= 9 ? experienceYears + ` years` : 'a decade'} of experience in designing and developing  complex web applications using a variety of technologies.`,
  description: `I am a passionate front-end developer with a strong focus on delivering visually appealing and user-friendly interfaces. My expertise spans across design tools like Photoshop for creating intuitive layouts, and cutting-edge technologies such as HTML, CSS, Bootstrap, JavaScript, React JS, and Next JS. I specialize in state management using React-Redux-Saga to build scalable and maintainable applications.
  I have extensive experience working with international-level APIs, including Sabre, Amadeus, AirSial, and Serene, enabling seamless integration and advanced functionality for web-based platforms.
  From conceptualization to deployment, I thrive in collaborative environments, working closely with product managers, designers, and developers to bring ideas to life.`,
  your_img_url:
  '/kashif_hussain.png',  
  technologies: [
    ['HTML + CSS','Bootstrap', 'JavaScript', 'JQuery'],
    ['React.js', 'Next.js', 'REACT_REDUX_SAGA', 'Nest.js'],
    ['MySQL','wordpress','Photoshop','Figma'],
  ],
  mobile_technologies: [
    ['HTML + CSS', 'Bootstrap',],
    ['JavaScript', 'React'],
    ['Next.js', 'REACT_REDUX_SAGA','Nest.js'],
    ['MySQL', 'Photoshop'],
    ['Figma'],
  ],
};

const dataabout = {
  title: 'About myself',
  aboutme: [
    `I am a passionate front-end developer with over ${experienceYears <= 9 ? experienceYears + ` years` : 'a decade'} of experience in building and deploying complex web applications using a variety of technologies. I have a strong track record of delivering innovative solutions that improve user experience and drive business results.I am a passionate front-end developer with a strong focus on delivering visually appealing and user-friendly interfaces. My expertise spans across design tools like Photoshop for creating intuitive layouts, and cutting-edge technologies such as HTML, CSS, Bootstrap, JavaScript, React JS, and Next JS. I specialize in state management using React-Redux-Saga to build scalable and maintainable applications.
    I have extensive experience working with international-level APIs, including Sabre, Amadeus, AirSial, and Serene, enabling seamless integration and advanced functionality for web-based platforms. My work combines technical proficiency with a keen eye for design, ensuring optimal user experiences.From conceptualization to deployment, I thrive in collaborative environments, working closely with product managers, designers, and developers to bring ideas to life.`,
  ],
};

const worktimeline = [
  {
    jobtitle: 'Full-time Web Developer',
    where: 'Faremakers Travel Channel In`l (Pvt).Ltd',
    date: 'May 2023 - Present',
  },
  {
    jobtitle: 'React JS Developer',
    where: 'Faremakers Travel Channel In`l (Pvt).Ltd',
    date: 'May 2023 - Present',
  },
  {
    jobtitle: 'Front End Developer',
    where: 'unique-links',
    date: 'July 2022 - May 2023',
  },
  {
    jobtitle: 'Web Developer',
    where: 'Web Smart Academy',
    date: 'Feb 2020 - Nov 2022',
  },
  {
    jobtitle: 'Wordpress Developer',
    where: 'Web Smart Academy',
    date: 'Feb 2019 - Feb 2020',
  },
];

const skills = [
  {
    name: 'HTML + CSS',
  },
  {
    name: 'Bootstrap',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'J Query',
  },
  {
    name: 'React JS',
  },
  {
    name: 'NextJs',
  },
  {
    name: 'NestJs',
  },
  {
    name: 'Redux',
  },
  {
    name: 'Redux Sagas',
  },
  {
    name: 'Material UI',
  },
  {
    name: 'RESTfull API',
  },
  {
    name: 'SOAP API',
  },
  {
    name: 'Sabre Integration',
  },
  {
    name: 'Amadeus Integration',
  },
  {
    name: 'Git Version Control',
  },
  {
    name: 'Photoshop',
  },
  {
    name: 'Figma/Adobe',
  },
  {
    name: 'Payment Gateway Integration',
  },
  {
    name: 'PHP (custom)',
  },
  {
    name: 'MySQL',
  },
  {
    name: 'Python',
  },
];

const services = [
  {
    title: 'Web Developer',
    description: `I am a highly professional front-end developer with expertise in building responsive, scalable web applications and intuitive user interfaces. Using modern technologies like React JS, Next JS, HTML, CSS, Bootstrap, and JavaScript, I create seamless, user-friendly experiences. I am skilled in state management with React-Redux-Saga and proficient in API integrations, including international systems like Sabre, Amadeus, AirSial, and Serene.`,
    bulletTitle: '💫  WHY CHOOSE MY ?  💫',
    bullets: [
      `➡️ Results-Oriented:Delivered high-performing, user-focused web platforms, enabling seamless international API integrations (Sabre, Amadeus) for travel-related applications and enhancing functionality for AirSial and Serene systems.`,
      `➡️ Front-End Expertise: Specializing in front-end technologies, including HTML, CSS, Bootstrap, JavaScript, React JS, and Next JS, to deliver visually appealing and high-performance websites.`,
      `➡️ Responsiveness: Being extremely responsive and keeping all line of communication is a priority, ensuring clients are informed throughout the development process.`,
      `🙋‍♂️ Ready to discuss your project? I am eager to work with you, to provide consistent, High-Level solutions to design/development challenges.  Let's connect and turn your vision into reality. Please contact me, so we can discuss how we can work together to FULLY meet you Business Needs!`
    ]
  },
  {
    title: 'Frontend Development',
    description: `I have a strong background in frontend development. I am specialized in building website's landing pages and complex single-page applications (SPAs).`,
    bulletTitle: '⭐  Tech and Tools  ⭐',
    bullets: [
    `➡️ Languages: JavaScript`,
    `➡️ Frameworks & Libraries: React, NextJs,  jQuery`,
    `➡️ State Management: Redux, RTK Query, Redux Toolkit`,
    `➡️ Styling: CSS, SCSS, SASS`,
    `➡️ Tools: Webpack, Git, Jest, NPM, Prettier, Figma, `  
    ]
  },
];

// const dataportfolio = [
//   {
//     // Sprout
//     title: 'Sprout',
//     description: `As the Backend Engineering Lead at Via Sprout, I took responsibility to develop a backend application with Nest JS - the latest Node. js framework. The app was developed to connect the investors with private funds in the market and co-investment opportunities as per the individual needs of each investor.`,
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042507/sprout_jhedah.png',
//     link: 'https://www.viasprout.com/',
//     tech_stacks: [
//       'Nest JS',
//       'Prisma ORM',
//       'PostgreSQL',
//       'AWS S3',
//       'AWS EC2',
//       'AWS CloudWatch',
//       'Stripe Payment Gateway',
//     ],
//     caseStudy: {
//       title: `Backend Engineering Lead`,
//       overview: `During my tenure as the Backend Engineering Lead at Via Sprout from November 2023 to April 2024, I spearheaded the development of a robust backend application using Nest JS, a progressive Node.js framework. This application aimed to connect investors with private market funds and co-investment opportunities tailored to their individual needs.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://www.viasprout.com/',
//         },
//         {
//           name: 'Onboarding',
//           link: 'https://www.platform.viasprout.com/auth',
//         },
//       ],
//       technologies: [
//         {
//           key: `Nest JS`,
//           value: `Used as the primary framework for backend development.`,
//         },
//         {
//           key: `Prisma ORM`,
//           value: `Employed for database interaction and management.`,
//         },
//         {
//           key: `PostgreSQL`,
//           value: `Chosen as the relational database for data storage.`,
//         },
//         {
//           key: `AWS S3, AWS CloudWatch, AWS EC2`,
//           value: `Leveraged AWS services for storage, monitoring, and deployment.`,
//         },
//         {
//           key: `Stripe Payment Gateway`,
//           value: `Integrated to facilitate secure payment transactions within the platform.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `Building a Robust Backend Architecture`,
//           value: [
//             `Architected and developed a scalable backend infrastructure capable of efficiently handling API requests from the frontend platform.`,
//             `Ensured the architecture's resilience and scalability to accommodate future growth and increased user demand.`,
//           ],
//         },
//         {
//           key: `Development of RESTful APIs`,
//           value: [
//             `Designed and implemented a comprehensive set of RESTful APIs to facilitate seamless communication between the frontend and backend systems.`,
//             `Ensured API endpoints were well-documented and adhered to industry best practices for clarity and ease of integration.`,
//           ],
//         },
//         {
//           key: `Addressing Onboarding Challenges`,
//           value: [
//             `Identified and addressed onboarding challenges faced by individual investors and Venture Capitalists (VCs) during the platform's adoption phase.`,
//             `Engineered backend solutions to streamline the onboarding process, enhancing efficiency and user-friendliness.`,
//           ],
//         },
//         {
//           key: `CI/CD Pipeline Implementation`,
//           value: [
//             `Established a robust Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate the building, testing, and deployment processes.`,
//             `Implemented automated testing to validate code changes and ensure deployment readiness, thereby reducing the risk of human error and enhancing development efficiency.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched the backend application, enabling seamless connectivity between investors and private market opportunities.`,
//         `Significantly improved the onboarding process, resulting in enhanced user satisfaction and increased platform adoption rates.`,
//         `Established a reliable CI/CD pipeline, reducing deployment times and enhancing overall development productivity.`,
//       ],
//       conclusion: `My role as the Backend Engineering Lead at Via Sprout was instrumental in developing a resilient and scalable backend infrastructure to support the platform's growth and facilitate seamless user experiences. Through strategic technology selection and innovative solutions, we were able to overcome challenges and deliver a robust backend application that met the needs of investors and VCs alike.`,
//     },
//   },
//   {
//     // Monadd
//     title: 'Monadd',
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042504/monadd-app_yluroz.png',
//     link: 'https://www.monadd.io/',
//     description: `I was the Frontend Lead Engineer at Monadd and was responsible for the development of a subscription management software that was designed to make the process of discovering and managing services linked to residences easier. Utilizing React, Typescript, Redux, Redux Sagas, and Google Authentication, we developed an easy-to-use and comprehensive application that provided residents an opportunity to manage their subscriptions efficiently.`,
//     tech_stacks: [
//       'React',
//       'Typescript',
//       'Redux',
//       'Redux Sagas',
//       'Google Authentication',
//       'AWS S3',
//       'AWS EC2',
//       'Stripe Payment Gateway',
//     ],
//     caseStudy: {
//       title: `Frontend Lead Engineer`,
//       overview: `As a Frontend Lead Engineer at Monadd from June 2020 to March 2021, I played a key role in developing a subscription management software aimed at simplifying the process of discovering and managing services linked to residences. Leveraging technologies such as React JS, Typescript, Redux, Redux Sagas, and Google Authentication, we created an intuitive application that empowered residents to efficiently manage their subscriptions.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://www.monadd.io/',
//         },
//         {
//           name: 'Onboarding',
//           link: `https://app.monadd.io/login`,
//         },
//       ],
//       technologies: [
//         {
//           key: `React, Typescript`,
//           value: `Utilized for frontend development to create dynamic and responsive user interfaces.`,
//         },
//         {
//           key: `Redux, Redux Sagas`,
//           value: `Implemented for state management and asynchronous data handling, ensuring data consistency and seamless user experiences.`,
//         },
//         {
//           key: `Google Authentication`,
//           value: `Integrated for secure and seamless authentication using third-party Google accounts.`,
//         },
//         {
//           key: `Stripe Payment Gateway`,
//           value: `Integrated to facilitate secure payment transactions within the platform.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `Subscription Management Application Development`,
//           value: [
//             `Spearheaded the development of a React application tailored to subscription management, enabling residents to discover and manage services linked to their residences.`,
//             `Utilized React JS and Typescript to create a robust and user-friendly interface, allowing residents to easily navigate and interact with the application.`,
//           ],
//         },
//         {
//           key: `Third-Party Authentication Integration`,
//           value: [
//             `Implemented third-party Google login functionality using Google Auth, enabling seamless authentication and user account creation.`,
//             `Ensured secure and reliable authentication processes, adhering to industry best practices and standards.`,
//           ],
//         },
//         {
//           key: `Onboarding Process Design`,
//           value: [
//             `Designed and implemented an intuitive onboarding process that guided users through the process of connecting, adding, and listing all of their service providers within the application.`,
//             `Enhanced user engagement and satisfaction by providing a seamless and personalized onboarding experience.`,
//           ],
//         },
//         {
//           key: `Third-Party API Integration`,
//           value: [
//             `Integrated various third-party APIs, including Google Maps, Google Analytics, Hotjar, and Crashlytics, to enhance the application's functionality and user experience.`,
//             `Leveraged APIs to provide additional features such as location-based services, analytics tracking, and error monitoring.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched the Subscription Management Software, providing residents with a centralized platform to discover and manage services linked to their residences.`,
//         `Enhanced user engagement and satisfaction through intuitive user interfaces and seamless authentication processes.`,
//         `Improved application functionality and user experience through the integration of third-party APIs, enabling additional features and services.`,
//       ],
//       conclusion: `My tenure as a Frontend Lead Engineer at Monadd was marked by the successful development and launch of a subscription management software that simplified the process of discovering and managing services linked to residences. By leveraging cutting-edge technologies and collaborative design processes, we created an intuitive application that empowered residents to efficiently manage their subscriptions and enhance their living experience.`,
//     },
//   },
//   {
//     // Wild.AI
//     title: 'Wild.AI',
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042529/wild-coach_etskch.png',
//     link: 'https://www.wild.ai/',
//     description: `In my capacity as the Web Engineering Lead at Wild. I was responsible for the development of a multi-functional platform that enabled coaches and athletes to engage with each other,in a smooth way. Employing technologies like React, Next JS, Redux, Redux Sagas, Node JS, Strapi CMS and Stripe Payment Gateway, we conjured an all-inclusive environment that allowed both coaches and athletes to enhance their training program and constantly trace performance parameters.`,
//     tech_stacks: [
//       'React',
//       'Next.js',
//       'Typescript',
//       'Redux',
//       'Redux Sagas',
//       'Node.js',
//       'Strapi CMS',
//       'Stripe Payment Gateway',
//     ],
//     caseStudy: {
//       title: `Web Engineering Lead`,
//       overview: `During my tenure as the Web Engineering Lead at Wild.AI from April 2021 to August 2023, I played a pivotal role in developing a comprehensive platform that facilitated seamless interactions between coaches and athletes. Leveraging technologies such as React JS, Next JS, Redux, Node JS, Strapi CMS, and Stripe Payment Gateway, we created an integrated ecosystem that empowered both coaches and athletes to optimize training regimens and track performance metrics.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://wild.ai/',
//         },
//         {
//           name: 'Coach Dashboard',
//           link: 'https://coach.wild.ai/',
//         },
//         {
//           name: 'Athlete Dashboard',
//           link: 'https://athlete.wild.ai/',
//         },
//       ],
//       technologies: [
//         {
//           key: `React, Next.js`,
//           value: `Utilized for frontend development to create dynamic and responsive user interfaces for coaches and athletes.`,
//         },
//         {
//           key: `Redux, Redux Sagas`,
//           value: `Implemented for state management to ensure data consistency and seamless user experiences.`,
//         },
//         {
//           key: `Node.js`,
//           value: `Employed for backend development and API integration, supporting platform functionality and data management.`,
//         },
//         {
//           key: `Strapi CMS`,
//           value: `Integrated as the content management system to facilitate content creation and management for coaches and athletes.`,
//         },
//         {
//           key: `Stripe Payment Gateway`,
//           value: `Integrated for secure payment processing within the platform, enabling subscription-based access and product purchases.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `Coach Management Platform`,
//           value: [
//             `Spearheaded the development of a robust Coach Management Platform, enabling coaches to efficiently manage athletes and track performance metrics.`,
//             `Designed and implemented features such as menstrual cycle reports and performance tracking tools to enhance coach-athlete interactions and training outcomes.`,
//             `Led technical architecture discussions with the core team and founder to define the platform's overall architecture and scalability.`,
//           ],
//         },
//         {
//           key: `Athlete Dashboard and Store Integration`,
//           value: [
//             `Developed a personalized Athlete Dashboard, allowing athletes to track performance metrics, access training plans, and view menstrual cycle reports.`,
//             `Established a Wild.AI store within the application, offering athletes discounts on products from partners like Garmin and Oura.`,
//             `Implemented subscription-based access and referral incentives, fostering engagement and retention among athletes.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched the Coach and Athlete Platform, providing a centralized ecosystem for coaches and athletes to collaborate and optimize training regimens.`,
//         `Enhanced coach-athlete interactions through intuitive features such as menstrual cycle reports and performance tracking tools.`,
//         `Fostered partnerships with industry-leading companies like Garmin and Oura, enriching the athlete experience through product discounts and integration.`,
//         `Increased platform engagement and retention through subscription-based access and referral incentives.`,
//       ],
//       conclusion: `My tenure as the Web Engineering Lead at Wild.AI was marked by the successful development and launch of a comprehensive Coach and Athlete Platform. By leveraging cutting-edge technologies and collaborative design processes, we created an integrated ecosystem that empowered coaches and athletes alike to optimize training regimens, track performance metrics, and achieve peak performance.`,
//     },
//   },
//   {
//     // The Zensory
//     title: 'The Zensory',
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042524/thezensory_lcbhag.png',
//     link: 'https://thezensory.com/',
//     description: `As a Frontend Engineer of Zensory, I jointly worked with the team to create a mobile application in React Native that was responsible for promoting mental wellness and health. Making use of technologies like React Native, Typescript, Redux toolkit, and Firebase Firestore, we developed a scientifically proven productivity and well-being toolkit which is designed to help users in attaining a better work-life balance and also in preventing burnout.`,
//     tech_stacks: [
//       'React',
//       'React Native',
//       'Typescript',
//       'Redux',
//       'Redux toolkit',
//       'Firebase Firestore',
//     ],
//     caseStudy: {
//       title: `Frontend Engineer`,
//       overview: `As a Frontend Engineer at Zensory, I collaborated with the team to develop a React Native mobile application dedicated to promoting mental health and well-being. Leveraging technologies such as ReactJs, Typescript, Redux toolkit, and Firebase Firestore, we created a scientifically-supported productivity and well-being toolkit aimed at assisting users in achieving a healthier work-life balance and preventing burnout.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://www.thezensory.com/',
//         },
//         {
//           name: 'App Store',
//           link: 'https://apps.apple.com/sa/app/the-zensory/id1582845981',
//         },
//         {
//           name: 'Google PlayStore',
//           link: 'https://play.google.com/store/apps/details?id=com.thezensory.app&hl=en_ZA&gl=US',
//         },
//       ],
//       technologies: [
//         {
//           key: `React, Typescript`,
//           value: `Utilized for frontend development to create a dynamic and responsive user interface.`,
//         },
//         {
//           key: `Redux toolkit`,
//           value: `Implemented for state management, ensuring data consistency and seamless user experiences.`,
//         },
//         {
//           key: `Firebase Firestore`,
//           value: `Utilized as the backend database to store and manage user data securely.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `React Native Mobile Application Development`,
//           value: [
//             `Collaborated with the team to develop a React Native mobile application dedicated to promoting mental health and well-being.`,
//             `Leveraged ReactJs and Typescript to create a dynamic and intuitive user interface, ensuring a seamless user experience across devices.`,
//           ],
//         },
//         {
//           key: `Productivity and Well-being Toolkit Design and Development`,
//           value: [
//             `Developed a scientifically-supported productivity and well-being toolkit within the app, aimed at assisting users in achieving a healthier work-life balance and preventing burnout.`,
//             `Implemented features such as stress-relief exercises, mindfulness practices, and productivity tools to empower users to manage their mental health effectively.`,
//           ],
//         },
//         {
//           key: `Intuitive User Interface Design`,
//           value: [
//             `Designed an intuitive user interface to ensure that users can swiftly transition from stress to calmness and from mental fog to mental clarity in just a few minutes of app usage.`,
//             `Prioritized user experience and accessibility, incorporating user feedback and best practices to create a seamless and engaging app interface.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched the Zensory mobile application, providing users with a comprehensive toolkit for managing mental health and well-being.`,
//         `Empowered users to achieve a healthier work-life balance and prevent burnout through scientifically-supported practices and tools.`,
//         `Enhanced user engagement and satisfaction through an intuitive user interface and seamless app experience.`,
//       ],
//       conclusion: `My role as a Frontend Engineer at Zensory was instrumental in developing a React Native mobile application dedicated to promoting mental health and well-being. By leveraging cutting-edge technologies and best practices, we created a comprehensive toolkit that empowers users to manage their mental health effectively and achieve a healthier work-life balance.`,
//     },
//   },
//   {
//     // Forest.ly
//     title: 'Forest.ly',
//     description: `My roles and responsibilities at Forest is that of a Product Engineer. Specifically, I was in charge of the whole process of making a bilingual website and an admin panel. Through the use of technologies like React, Next.js, Node.js/Express.js, Stripe Payment, Cloudinary, and Github Actions, I have developed a robust and scalable platform that meets the needs of our different users.`,
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042509/forestly-website_golakv.png',
//     link: 'https://forest.ly/',
//     tech_stacks: [
//       'React',
//       'Next JS',
//       'Node.js',
//       'Express.js',
//       'Stripe Payment Gateway',
//       'Cloudinary',
//       'Github Actions',
//     ],
//     caseStudy: {
//       title: `Product Engineer`,
//       overview: `As a Product Engineer at Forest.ly, I led the development of a dual-lingual website and an admin dashboard from the ground up. Leveraging technologies such as React JS, Next JS, Node JS, Stripe Payment, Cloudinary, and Github Actions, we created a robust and scalable platform that catered to the needs of our diverse user base.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://forest.ly/',
//         },
//         {
//           name: 'Onboarding',
//           link: 'https://app.forest.ly/login',
//         },
//       ],
//       technologies: [
//         {
//           key: `React, Next JS`,
//           value: `Utilized for frontend development to create dynamic and responsive user interfaces.`,
//         },
//         {
//           key: `Node JS`,
//           value: `Employed for backend development to build a robust RESTful API backend seamlessly integrated with the Stripe payment gateway.`,
//         },
//         {
//           key: `Stripe Payment`,
//           value: `Integrated for secure and seamless payment processing within the platform.`,
//         },
//         {
//           key: `Cloudinary`,
//           value: `Used for image and video management, ensuring efficient handling of multimedia content.`,
//         },
//         {
//           key: `Github Actions`,
//           value: `Implemented for continuous integration and deployment automation, streamlining the development and deployment processes.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `Dual-Lingual Website Development`,
//           value: [
//             `Led the development of a dual-lingual website from the ground up using the Next.js framework.`,
//             `Implemented internationalization features to support multiple languages, providing a seamless user experience for users worldwide.`,
//           ],
//         },
//         {
//           key: `Admin Dashboard Design and Implementation`,
//           value: [
//             `Designed and implemented an admin dashboard from scratch, leveraging the React.js library.`,
//             `Developed intuitive user interfaces and interactive data visualizations to empower administrators to efficiently manage the platform.`,
//           ],
//         },
//         {
//           key: `Robust RESTful API Backend`,
//           value: [
//             `Built a robust RESTful API backend using Node.js, providing comprehensive functionality as per project requirements.`,
//             `Seamlessly integrated the backend with the Stripe payment gateway to facilitate secure and efficient payment processing.`,
//           ],
//         },
//         {
//           key: `Scalable Deployment on AWS`,
//           value: [
//             `Deployed the platform on AWS EC2, AWS Amplify, AWS S3, and Netlify, ensuring a scalable and efficient hosting environment.`,
//             `Leveraged AWS services to optimize performance, reliability, and scalability, meeting the needs of our growing user base.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched a dual-lingual website and admin dashboard, providing a comprehensive platform for users and administrators.`,
//         `Enhanced user engagement and satisfaction through intuitive user interfaces and seamless payment processing.`,
//         `Achieved scalable and efficient hosting on AWS, ensuring reliable performance and uptime for users worldwide.`,
//       ],
//       conclusion: `My role as a Product Engineer at Forest.ly was instrumental in developing a dual-lingual website and admin dashboard that met the diverse needs of our user base. By leveraging cutting-edge technologies and best practices, we created a robust and scalable platform that empowered users and administrators alike to achieve their goals efficiently and effectively.`,
//     },
//   },
//   {
//     // We Over I
//     title: 'We Over I',
//     img: 'https://res.cloudinary.com/farooq-storage/image/upload/v1719042509/weoveri_puxcw7.png',
//     link: 'https://www.we-over-i.com/',
//     description: `I am working as a Senior Engineer at We Over I, Recently I took the initiative and become responsible for developing the company's primary website with the use of Next.js. By means of technologies such as React, Storybook, Next.js, NestJS, and Prisma ORM, we developed a responsive and visually appealing website that was in line with our brand identity, thus, increasing our brand visibility and online presence.`,
//     tech_stacks: [
//       'React',
//       'Next.js',
//       'Typescript',
//       'Redux',
//       'Redux Sagas',
//       'Nest JS',
//       'AWS S3',
//       'AWS EC2',
//       'Storybook',
//       'Prisma ORM',
//       'TypeORM',
//     ],
//     caseStudy: {
//       title: `Senior Software Engineer`,
//       overview: `As a Senior Software Engineer at We Over I, I led the strategic initiative to develop and launch our company's flagship website, utilizing Next.js as the primary framework. Leveraging technologies such as React JS, Storybook, Next JS, NestJs, and Prisma ORM, we built a responsive and visually appealing website tailored to our brand identity, enhancing our brand visibility and online presence.`,
//       platform_links: [
//         {
//           name: 'Website',
//           link: 'https://www.we-over-i.com/',
//         },
//       ],
//       technologies: [
//         {
//           key: `React`,
//           value: `Utilized for frontend development to create dynamic and responsive user interfaces.`,
//         },
//         {
//           key: `Storybook`,
//           value: `Employed for component-driven development, enabling rapid prototyping and UI testing.`,
//         },
//         {
//           key: `Next JS`,
//           value: `Utilized as the primary framework for building the website, enabling server-side rendering and optimized SEO performance.`,
//         },
//         {
//           key: `NestJs`,
//           value: `Employed for backend development to build robust APIs and handle server-side logic.`,
//         },
//         {
//           key: `Prisma ORM, TypeORM`,
//           value: `Utilized for database interaction and management.`,
//         },
//         {
//           key: `Node JS, ExpressJS`,
//           value: `Employed for backend development and API integration.`,
//         },
//       ],
//       contributions: [
//         {
//           key: `Strategic Website Development Initiative`,
//           value: [
//             `Led the strategic initiative to develop and launch the company's flagship website, utilizing Next.js as the primary framework.`,
//             `Collaborated with cross-functional teams to define project requirements and align development efforts with business goals.`,
//           ],
//         },
//         {
//           key: `Custom Next.js-based Solution`,
//           value: [
//             `Implemented a custom Next.js-based solution to create a responsive and visually appealing website tailored to our brand identity.`,
//             `Employed Storybook for component-driven development, enabling rapid prototyping and UI testing to ensure a unique online presence.`,
//           ],
//         },
//         {
//           key: `Ground-Up Website Development`,
//           value: [
//             `Built the website from the ground up, employing custom widgets and components within the Next.js framework.`,
//             `Utilized NestJs and Prisma ORM for backend development to ensure seamless integration with frontend components and achieve a seamless user experience.`,
//           ],
//         },
//         {
//           key: `SEO Optimization with Next.js`,
//           value: [
//             `Leveraged Next.js to optimize SEO performance, achieving a 100% SEO score and enhancing the website's search engine visibility.`,
//             `Integrated server-side rendering, dynamic routing, and optimized code splitting to ensure fast page load times and improved SEO rankings.`,
//           ],
//         },
//       ],
//       results: [
//         `Successfully launched the We Over I company website, enhancing brand visibility and online presence.`,
//         `Built a responsive and visually appealing website tailored to our brand identity, resulting in increased user engagement and improved site performance.`,
//         `Optimized SEO performance using Next.js, achieving a 100% SEO score and enhancing search engine visibility.`,
//       ],
//       conclusion: `My role as a Senior Software Engineer at We Over I is instrumental in developing and launching our company's flagship website using Next.js. By leveraging cutting-edge technologies and best practices, we built a responsive and visually appealing website that enhances our brand visibility and online presence. Through strategic planning and meticulous execution, we achieved a 100% SEO score and created a website that excels in user experience and search engine visibility.`,
//     },
//   },
// ];

const dataportfolio = [
  {
    title: 'Primary Website of Faremakers Travel Channel Int’l (Pvt) Ltd',
    description: `As a Front-End Developer at Faremakers, I developed their responsive website from the ground up using React JS, ensuring seamless performance with Redux-Saga. I integrated Sabre REST and Amadeus SOAP APIs to enhance booking functionalities, implemented secure payment methods, and conducted comprehensive SEO optimization to improve search engine visibility.`,
    img: 'https://res.cloudinary.com/example/image/upload/v123456789/faremakers.png',
    link: 'https://www.faremakers.com/',
    tech_stacks: [
      'React JS',
      'Next JS',
      'Redux-Saga',
      'Sabre REST API',
      'Amadeus SOAP API',
      'Airsial and Serene API',
      'Payment Method Integration'
    ],
    caseStudy: {
      title: `Front-End Developer`,
      overview: `Since May 2023, as a Front-End Developer at Faremakers, I have been instrumental in developing their responsive website from the ground up using React JS. My responsibilities include designing intuitive user interfaces, ensuring seamless state management with Redux-Saga, integrating advanced APIs such as Sabre REST and Amadeus SOAP for enhanced travel booking functionalities, implementing secure payment methods, and conducting comprehensive SEO optimization to improve search engine visibility.`,
      platform_links: [
        {
          name: 'Website',
          link: 'https://www.faremakers.com/',
        },
      ],
      technologies: [
        {
          key: `React JS & Next JS`,
          value: `Utilized for creating responsive and dynamic front-end applications.`,
        },
        {
          key: `Redux-Saga`,
          value: `Implemented for managing application state effectively.`,
        },
        {
          key: `Sabre & Amadeus APIs`,
          value: `Integrated these APIs to enhance travel booking capabilities.`,
        },
      ],
      contributions: [
        {
          key: `Responsive Web Development`,
          value: [
            `Designed and implemented mobile-first, responsive web interfaces.`,
            `Developed reusable components to streamline development and maintain code quality.`,
          ],
        },
        {
          key: `API Integration`,
          value: [
            `Integrated Sabre REST and Amadeus SOAP APIs for real-time travel booking features.`,
            `Collaborated with backend teams to ensure seamless API communication.`,
            `Integrated AirSial and SereneAir APIs to expand flight options for users.`,
            `Integrated payment gateway APIs to facilitate secure and efficient transactions.`,
          ],
        },
        {
          key: `State Management`,
          value: [
            `Managed application state with Redux and Redux-Saga, improving performance and user experience.`,
          ],
        },
      ],
      results: [
        `Delivered a user-friendly travel booking platform with enhanced performance.`,
        `Achieved faster booking response times through optimized API integration.`,
        `Developed a scalable and maintainable front-end codebase, reducing future development time.`,
      ],
      conclusion: `As a Front-End Developer at Faremakers, I successfully built and maintained high-performance web applications. My work improved user engagement and operational efficiency through strategic use of technology and API integrations.`,
    },
  },
  {
    "title": "FastSports.tv",
    "description": "A dynamic sports streaming platform delivering live matches, highlights, and exclusive content across various sports.",
    "img": "",
    "link": "https://www.fastsports.tv/",
    "tech_stacks": [
      "WordPress",
      "Elementor",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "caseStudy": {
      "title": "Front-End Developer",
      "overview": "Developed a responsive and engaging sports streaming website for FastSports.tv, utilizing WordPress and Elementor.",
      "platform_links": [
        {
          "name": "Website",
          "link": "https://www.fastsports.tv/"
        }
      ],
      "technologies": [
        {
          "key": "WordPress & Elementor",
          "value": "Employed for building and customizing the website's structure and design.",
          "image_query": "WordPress Elementor logo"
        },
        {
          "key": "HTML5 & CSS3",
          "value": "Used for crafting responsive and visually appealing front-end layouts.",
          "image_query": "HTML5 CSS3 logo"
        },
        {
          "key": "JavaScript",
          "value": "Implemented for interactive features and dynamic content.",
          "image_query": "JavaScript logo"
        }
      ],
      "contributions": [
        {
          "key": "Responsive Design",
          "value": [
            "Created mobile-friendly layouts ensuring optimal viewing across devices.",
            "Utilized Elementor's responsive settings to adjust designs for various screen sizes."
          ]
        },
        {
          "key": "Custom Features",
          "value": [
            "Integrated live sports feeds and video content for real-time updates.",
            "Developed interactive elements to enhance user engagement."
          ]
        },
        {
          "key": "Performance Optimization",
          "value": [
            "Optimized images and scripts to improve page load times.",
            "Ensured cross-browser compatibility for consistent user experience."
          ]
        }
      ],
      "results": [
        "Launched a fully functional sports streaming website with a user-friendly interface.",
        "Enhanced user engagement through interactive features and real-time content.",
        "Achieved improved site performance and responsiveness across devices."
      ],
      "conclusion": "This project showcases my ability to develop dynamic and responsive websites using WordPress and Elementor, delivering engaging user experiences in the sports streaming domain."
    }
  },
  {
    "title": "Unique-Links",
    "description": "As a Front-End Developer at Unique-Links, I specialized in building responsive interfaces using React, Next.js, and Material UI. I also customized WordPress themes and created plugins to enhance website functionality.",
    "img": "",
    "link": "https://www.unique-links.com/",
    "tech_stacks": [
      "React JS",
      "Next JS",
      "Material UI",
      "WordPress",
      "JavaScript"
    ],
    "caseStudy": {
      "title": "Front-End Developer",
      "overview": "From July 2022 to May 2023, I contributed to developing modern, responsive websites for Unique-Links, leveraging advanced front-end technologies and WordPress customizations.",
      "platform_links": [
        {
          "name": "Website",
          "link": "https://www.unique-links.com/"
        }
      ],
      "technologies": [
        {
          "key": "React JS & Next JS",
          "value": "Used for building dynamic and interactive web interfaces."
        },
        {
          "key": "Material UI",
          "value": "Employed for designing aesthetically pleasing, responsive layouts."
        },
        {
          "key": "WordPress",
          "value": "Customized themes and built plugins to meet specific client needs."
        }
      ],
      "contributions": [
        {
          "key": "Responsive Design",
          "value": [
            "Designed and developed mobile-friendly, SEO-optimized websites."
          ]
        },
        {
          "key": "Custom WordPress Development",
          "value": [
            "Enhanced website functionality through custom plugins and theme customization."
          ]
        },
        {
          "key": "Code Reusability",
          "value": [
            "Created reusable components to improve development efficiency and maintainability."
          ]
        }
      ],
      "results": [
        "Improved website performance and user experience.",
        "Increased client satisfaction through bespoke solutions and customization."
      ],
      "conclusion": "At Unique-Links, I delivered tailored solutions that combined advanced front-end development techniques and WordPress expertise to create impactful digital experiences."
    }
  },
  {
    "title": "Lawyer Directory Platform",
    "description": "A responsive web application that connects users with legal professionals across Pakistan, facilitating easy search, profile viewing, and appointment scheduling.",
    "img": "",
    "link": "https://www.lawyer-directory.com/",
    "tech_stacks": [
      "Next.js",
      "React-Redux-Saga",
      "Nest.js",
      "MySQL",
      "JWT",
      "Zoom API"
    ],
    "caseStudy": {
      "title": "Freelance Developer",
      "overview": "Developed a Lawyer Directory platform connecting users with legal professionals across Pakistan.",
      "platform_links": [
        {
          "name": "Website",
          "link": "https://www.lawyer-directory.com/"
        }
      ],
      "technologies": [
        {
          "key": "Next.js & React-Redux-Saga",
          "value": "Utilized for building dynamic and responsive user interfaces."
        },
        {
          "key": "Nest.js",
          "value": "Employed for creating a scalable and efficient backend architecture."
        },
        {
          "key": "MySQL",
          "value": "Used for structured data storage and management."
        },
        {
          "key": "JWT",
          "value": "Implemented for secure user authentication and authorization."
        },
        {
          "key": "Zoom API",
          "value": "Integrated to facilitate virtual meetings between users and lawyers."
        }
      ],
      "contributions": [
        {
          "key": "Frontend Development",
          "value": [
            "Designed and implemented responsive layouts using Next.js and React-Redux-Saga.",
            "Ensured cross-browser compatibility and optimized performance."
          ]
        },
        {
          "key": "Backend Development",
          "value": [
            "Developed RESTful APIs with Nest.js to handle user and lawyer data.",
            "Integrated JWT for secure authentication and role-based access control."
          ]
        },
        {
          "key": "Database Management",
          "value": [
            "Structured and managed relational data using MySQL."
          ]
        },
        {
          "key": "API Integration",
          "value": [
            "Integrated Zoom API to enable virtual meetings between users and lawyers."
          ]
        }
      ],
      "results": [
        "Launched a fully functional Lawyer Directory platform with role-based access control.",
        "Enhanced user engagement by providing a seamless search and appointment scheduling experience.",
        "Improved accessibility to legal services across Pakistan."
      ],
      "conclusion": "This project demonstrates my ability to develop comprehensive web applications that connect users with professionals, leveraging modern technologies to create efficient and user-friendly platforms."
    }
  },
  {
    "title": "FoodFolio",
    "description": "As a Web Designer and Developer at WebSmart Academy, I designed and developed the FoodFolio website, creating responsive layouts, interactive features, and custom backend solutions using HTML5, CSS3, Bootstrap, JavaScript, PHP, and MySQL.",
    "img": "",
    "link": "https://www.websmartacademy.com/",
    "tech_stacks": [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    "caseStudy": {
      "title": "Web Designer and Developer",
      "overview": "From January to June 2022, I was involved in designing and developing the FoodFolio website for WebSmart Academy. I focused on creating a seamless user experience through responsive front-end designs and custom backend solutions.",
      "platform_links": [
        {
          "name": "Website",
          "link": "https://www.websmartacademy.com/"
        }
      ],
      "technologies": [
        {
          "key": "HTML5 & CSS3",
          "value": "Used for creating responsive and visually appealing front-end designs."
        },
        {
          "key": "JavaScript & jQuery",
          "value": "Implemented interactive features and dynamic elements for enhanced user engagement."
        },
        {
          "key": "PHP & MySQL",
          "value": "Developed custom backend solutions and managed data storage for functionality."
        }
      ],
      "contributions": [
        {
          "key": "Responsive Layouts",
          "value": [
            "Developed mobile-first designs using Bootstrap and custom CSS3 for optimal viewing on various devices."
          ]
        },
        {
          "key": "Interactive Features",
          "value": [
            "Implemented dynamic functionality using JavaScript and jQuery to enhance the user experience."
          ]
        },
        {
          "key": "Custom Solutions",
          "value": [
            "Built tailored backend solutions with PHP and MySQL to meet client-specific requirements."
          ]
        }
      ],
      "results": [
        "Successfully launched the FoodFolio website with a user-friendly, responsive design.",
        "Increased user engagement with interactive and dynamic website features."
      ],
      "conclusion": "At WebSmart Academy, I successfully developed the FoodFolio website, combining modern web technologies to create a responsive, interactive, and customized solution that met client needs."
    }
  },
  {
    "title": "Blood Bucket",
    "description": "As a Web Designer and Developer at WebSmart Academy, I developed the Blood Bucket website, where users can donate and receive blood in emergency situations across Pakistan, using HTML5, CSS3, Bootstrap, JavaScript, PHP, and MySQL.",
    "img": "",
    "link": "https://www.websmartacademy.com/",
    "tech_stacks": [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    "caseStudy": {
      "title": "Web Designer and Developer",
      "overview": "From January to June 2022, I developed the Blood Bucket website for WebSmart Academy. This platform allows users to donate and receive blood during emergencies, leveraging responsive front-end designs and custom back-end solutions.",
      "platform_links": [
        {
          "name": "Website",
          "link": "https://www.websmartacademy.com/"
        }
      ],
      "technologies": [
        {
          "key": "HTML5 & CSS3",
          "value": "Used for creating responsive and visually appealing front-end designs."
        },
        {
          "key": "JavaScript & jQuery",
          "value": "Implemented interactive features and dynamic elements to improve user engagement."
        },
        {
          "key": "PHP & MySQL",
          "value": "Developed custom backend solutions to manage blood donation and emergency requests effectively."
        }
      ],
      "contributions": [
        {
          "key": "Responsive Layouts",
          "value": [
            "Created mobile-first, responsive layouts using Bootstrap to ensure the website is accessible on all devices."
          ]
        },
        {
          "key": "Interactive Features",
          "value": [
            "Incorporated JavaScript and jQuery for dynamic features like real-time blood availability and donor requests."
          ]
        },
        {
          "key": "Custom Backend Solutions",
          "value": [
            "Built a robust backend system using PHP and MySQL to handle donor information and blood requests efficiently."
          ]
        }
      ],
      "results": [
        "Successfully launched the Blood Bucket platform, providing a seamless experience for blood donation and emergency requests.",
        "Improved the efficiency of blood donation processes, especially in emergency situations across Pakistan."
      ],
      "conclusion": "At WebSmart Academy, I developed the Blood Bucket website, providing a vital platform for blood donation and emergency blood requests across Pakistan. By using modern web technologies, I delivered an interactive and responsive solution that met both functional and user needs."
    }
  }
];
const contactConfig = {
  YOUR_PERSONAL_EMAI: `kashifaurangzaib777@gmail.com`,
  YOUR_EMAIL: 'engr.kashif111@gmail.com',
  YOUR_FONE: '+92 3408922375',
  description:
    'With a wealth of development experience under my belt, I am confident in my ability to contribute significantly to your team and projects. I invite you to connect with me to explore potential collaborations and opportunities for mutual growth.',
  YOUR_SERVICE_ID: 'service_qgu8igk',
  YOUR_TEMPLATE_ID: 'template_ctf21o8',
  YOUR_USER_ID: '9r6Dst4S3VZecAvyw',
};

const socialprofils = {
  github: 'https://github.com/kashifhussain007',
  linkedin: 'https://www.linkedin.com/in/kashif-hussain-a48482251',
  behance: 'http://www.behance.net/eng_Kashif_Hussain',
};
export {
  contactConfig,
  dataabout,
  dataportfolio,                    
  introdata,
  logotext,
  meta,
  services,
  skills,
  socialprofils,
  worktimeline,
};
