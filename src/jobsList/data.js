import image from '/logo.png';

export const jobs = [
  {
    id: 1,
    name: 'Engineering Job',
    date: '2025-12-15',
    lastDateForSubmission: '2025-12-01',
    status: 'Upcoming',
    organizer: 'Engineering Society',
    venue: 'Expo Hall',
    category: 'Job Fair',
    imageUrl: image,
    candidatesNeeded: 12,
    jobDetails: [
      {
        title: 'Frontend Developer Internship',
        type: 'Internship',
        stipend: '$500-$1,000/month',
        responsibilities: [
          'Assist in building responsive web applications using HTML, CSS, and JavaScript.',
          'Support the frontend team with bug fixes, minor code reviews, and testing.',
          'Work with senior developers to implement UI components and improve UX.',
          'Stay updated with the latest trends in frontend technologies and frameworks.'
        ],
        qualifications: [
          "Currently pursuing a Bachelor's degree in Computer Science, Information Technology, or related fields.",
          'Basic understanding of frontend technologies (HTML, CSS, JavaScript).',
          'Familiarity with frameworks like React or Angular is a plus.',
          'Good communication and eagerness to learn.'
        ]
      },
      {
        title: 'Frontend Developer (Full-Time)',
        type: 'Full-Time',
        salary: '$50,000 - $70,000/year',
        responsibilities: [
          'Develop and maintain responsive web applications with a focus on performance and usability.',
          'Collaborate with backend developers, designers, and product managers to enhance the user experience.',
          'Convert UI/UX designs into interactive, functional components using React or Angular.',
          'Write clean, maintainable, and reusable code.',
          'Participate in code reviews to maintain high standards.',
          'Debug and optimize existing frontend applications.'
        ],
        qualifications: [
          "Master's degree in Computer Science, Software Engineering, or a related field.",
          'Proficiency in HTML, CSS, JavaScript, and at least one frontend framework (React, Angular, or Vue).',
          'Familiarity with CSS preprocessors like Sass or LESS.',
          'Knowledge of modern tools and libraries such as Webpack, Babel, and Git.',
          'Strong problem-solving skills and attention to detail.'
        ]
      },
      {
        title: 'Frontend Development Team Lead',
        type: 'Experienced',
        salary: '$90,000 - $130,000/year + bonuses',
        responsibilities: [
          'Lead the frontend team in developing scalable, high-quality applications.',
          'Design architecture for complex frontend applications, ensuring optimal performance and scalability.',
          'Mentor junior developers, conduct code reviews, and uphold coding standards.',
          'Collaborate with cross-functional teams to align the frontend architecture with backend services and database requirements.',
          'Research and implement new technologies to improve team efficiency and code quality.',
          'Drive project timelines, communicate progress, and handle any blockers.'
        ],
        qualifications: [
          '5+ years of experience in frontend development, with a strong portfolio of web applications.',
          'Expertise in modern JavaScript frameworks (React, Angular, Vue) and frontend architecture.',
          'Proficient in state management libraries (Redux, MobX, or equivalent).',
          'Solid understanding of RESTful services and/or GraphQL.',
          'Strong leadership and communication skills.',
          'Ability to balance hands-on coding with team management.'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Healthcare Recruitment Fair 2024',
    date: '2025-12-01',
    lastDateForSubmission: '2025-11-15',
    status: 'Upcoming',
    organizer: 'HealthNet',
    venue: 'Convention Center',
    category: 'Job Fair',
    imageUrl: image,
    candidatesNeeded: 10,
    jobDetails: [
      {
        title: 'Registered Nurse',
        type: 'Full-Time',
        salary: '$60,000 - $80,000/year',
        responsibilities: [
          'Provide direct patient care and support in a hospital setting.',
          'Administer medications and treatments as prescribed.',
          'Collaborate with healthcare teams to develop patient care plans.',
          'Educate patients and families about health management.'
        ],
        qualifications: [
          'Valid RN license.',
          "Bachelor's degree in Nursing (BSN) preferred.",
          'Excellent communication and interpersonal skills.',
          'Ability to work in a fast-paced environment.'
        ]
      },
      {
        title: 'Medical Assistant',
        type: 'Part-Time',
        salary: '$18 - $25/hour',
        responsibilities: [
          'Assist with patient intake and record keeping.',
          'Prepare patients for examinations and assist physicians.',
          'Perform basic laboratory tests and administer injections.',
          'Schedule appointments and manage office tasks.'
        ],
        qualifications: [
          'Certification as a Medical Assistant preferred.',
          'Strong organizational skills and attention to detail.',
          'Basic knowledge of medical terminology.',
          'Ability to maintain patient confidentiality.'
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Marketing Expo 2024',
    date: '2025-11-25',
    lastDateForSubmission: '2025-11-10',
    status: 'Upcoming',
    organizer: 'Marketing Pro',
    venue: 'City Center Plaza',
    category: 'Expo',
    imageUrl: image,
    candidatesNeeded: 8,
    jobDetails: [
      {
        title: 'Digital Marketing Specialist',
        type: 'Full-Time',
        salary: '$50,000 - $70,000/year',
        responsibilities: [
          'Develop and manage digital marketing campaigns.',
          'Monitor and analyze performance metrics to improve strategies.',
          'Create engaging content for various platforms.',
          'Collaborate with designers and developers to enhance user experience.'
        ],
        qualifications: [
          'Bachelor’s degree in Marketing, Communications, or a related field.',
          'Experience with SEO, PPC, and social media marketing.',
          'Strong analytical skills and proficiency in digital marketing tools.',
          'Creative mindset with attention to detail.'
        ]
      },
      {
        title: 'Content Writer',
        type: 'Freelance',
        salary: '$20 - $40/hour',
        responsibilities: [
          'Write clear, compelling content for websites, blogs, and social media.',
          'Research industry-related topics to create valuable content.',
          'Collaborate with marketing teams to develop content strategies.',
          'Edit and proofread content to ensure quality.'
        ],
        qualifications: [
          'Proven experience as a content writer or similar role.',
          'Excellent writing and editing skills.',
          'Familiarity with content management systems (CMS).',
          'Ability to meet deadlines and work independently.'
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Engineering Job Fair 2024',
    date: '2025-12-15',
    lastDateForSubmission: '2025-12-01',
    status: 'Upcoming',
    organizer: 'Engineering Society',
    venue: 'Expo Hall',
    category: 'Job Fair',
    imageUrl: image,
    candidatesNeeded: 12,
    jobDetails: [
      {
        title: 'Mechanical Engineer',
        type: 'Full-Time',
        salary: '$70,000 - $90,000/year',
        responsibilities: [
          'Design and develop mechanical systems and products.',
          'Conduct feasibility studies and cost analysis.',
          'Collaborate with cross-functional teams to bring products to market.',
          'Ensure compliance with safety and quality standards.'
        ],
        qualifications: [
          'Bachelor’s degree in Mechanical Engineering or related field.',
          'Proficient in CAD software and engineering analysis tools.',
          'Strong problem-solving skills and attention to detail.',
          'Ability to work collaboratively in a team environment.'
        ]
      },
      {
        title: 'Civil Engineer Intern',
        type: 'Internship',
        stipend: '$800 - $1,200/month',
        responsibilities: [
          'Assist with the planning and design of civil engineering projects.',
          'Conduct site visits and inspections.',
          'Support project managers in project documentation and reporting.',
          'Perform calculations and prepare technical reports.'
        ],
        qualifications: [
          'Currently pursuing a degree in Civil Engineering.',
          'Basic knowledge of civil engineering principles.',
          'Strong analytical and mathematical skills.',
          'Excellent communication and teamwork abilities.'
        ]
      }
    ]
  }
];
  