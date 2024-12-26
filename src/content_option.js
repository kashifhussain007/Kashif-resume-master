
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
  your_img_url:'/kashif_hussain.png',  
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

const dataportfolio = [
  {
    title: 'Primary Website of Faremakers Travel Channel Int’l (Pvt) Ltd',
    description: `As a Front-End Developer at Faremakers, I developed their responsive website from the ground up using React JS, ensuring seamless performance with Redux-Saga. I integrated Sabre REST and Amadeus SOAP APIs to enhance booking functionalities, implemented secure payment methods, and conducted comprehensive SEO optimization to improve search engine visibility.`,
    img: require('../src/components/images/faremakers.png'),
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
    "img": require('../src/components/images/fastsports.PNG'),
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
    "img": require('../src/components/images/uniquelinks.PNG'),
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
    "img": require('../src/components/images/lawyer.PNG'),
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
    "img":require('../src/components/images/foodfolio.PNG'),
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
