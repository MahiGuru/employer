export const freelanceRecruitersData = [
  {  
      id: 101,
      freelancer: true,
      about: `I'm a Recruiter with 8 years of experience in full-cycle recruiting.
      I have worked with well-known companies, startups and have placed candidates in different countries.
      Because the clients were from various countries, I worked during different hours.`,
      Job_success: 95,
      recruiterId: 101,
      name: 'Suren A',
      skills: ['Candidate Interviewing',
        'Technical Recruiter',
        'IT Recruiting',
        'Executive Search',
        'Researcher',
        'Business Development',
        'Management Skills',
        'Talent Management',
        'Internet Recruiting',
        'Recruiting'],
      related_expereince: '8 years',
      price_per_resource: 'On-demand',
      avalable_profiles: 10,
      job: {
        id: 1,
        title: 'Full Stack Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'}, 
        location: 'Hyderabad',
      },
      created_at: '20/04/2022',
      modified_at: '20/04/2022',   
  },
  {  
      id: 102,
      freelancer: true,
      about: `I'm a Recruiter with 10 years of experience in full-cycle recruiting.
      I have worked with well-known companies, startups and have placed candidates in different countries.
      Because the clients were from various countries, I worked during different hours.`,
      Job_success: 95,
      recruiterId: 101,
      name: 'Antony Michel',
      skills: ['Candidate Interviewing',
        'Technical Recruiter',
        'IT Recruiting',
        'Executive Search',
        'Researcher',
        'Business Development',
        'Management Skills', 
        'Recruiting'],
      related_expereince: '8 years',
      price_per_resource: 'On-demand',
      avalable_profiles: 10,
      job: {
        id: 1,
        title: 'Full Stack Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'}, 
        location: 'Hyderabad',
      },
      created_at: '20/04/2022',
      modified_at: '20/04/2022',   
  },
  {  
      id: 103,
      freelancer: true,
      about: `I'm a Recruiter with 5 years of experience in full-cycle recruiting.
      I have worked with well-known companies, startups and have placed candidates in different countries.
      Because the clients were from various countries, I worked during different hours.`,
      Job_success: 95,
      recruiterId: 101,
      name: 'Naveen Mishra',
      skills: [ 
        'IT Recruiting',
        'Executive Search',
        'Researcher', 
        'Recruiting'],
      related_expereince: '8 years',
      price_per_resource: 'On-demand',
      avalable_profiles: 4,
      job: {
        id: 1,
        title: 'Full Stack Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'}, 
        location: 'Hyderabad',
      },
      created_at: '20/04/2022',
      modified_at: '20/04/2022',   
  } 
];
 
export const recruiterFirmsData = [
    {
      id: 1,
      freelancer: false,
      about: `Sigmoidal is a machine learning consulting firm based in New York, with offices in Warsaw, Poland. Founded in 2016, Sigmoidal's team of around 20 employees provides AI, BI/SI, and big data consulting services.`,
      firm : {
        name: 'Sigmoidal',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://sigmoidal.io/'
        
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'On-demand',
      avalable_profiles: 10,
      job: {
        id: 1,
        title: 'Full Stack Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'}, 
        location: 'Hyderabad', 
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `
      },
      creatd_at: '20/04/2022',
      modified_at: '20/04/2022', 
      profiles: 10, 
      request_to_employer: 'Extra 10k expecting per resource', 
      finished_jobs: 5,  
    },
    {
      id: 2, 
      freelancer: false,
      about: `Talent Place is an HR agency founded in 2016 with more than 50 experts. They provide HR services from their office in Krakow, Poland. They work with clients in the industries of business, IT, and financial services.`,
      firm : {
        name: 'Talent Place',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://talentplace.pl/'
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'on-demand',
      job: {
        id: 2,
        title: 'Associate Software Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'},
        location: 'Hyderabad', 
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `
      },
      created_at: '20/04/2022',
      modified_at: '20/04/2022', 
      profiles: 5, 
      request_to_employer: 'Expecting 10% resource', 
      finished_jobs: 5,  
    },
    {
      id:3, 
      freelancer: false,
      about: `DevsData LLC is an IT consulting company based in New York City with an office in San Francisco. The company, founded in 2016, has more than 30 employees that provide, among others, IT strategy consulting, BI & big data consulting & SI, and custom software development services to enterprise and midmarket companies and institutions. `,
      firm : {
        name: 'DevsData LLC',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://devsdata.com/'
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'on-demand',
      job: {
        id: 4,  
        title: 'Technical Lead Developer',
        status: 'Active',
        experience:  {min: 3, max: 7, type:'Years'},
        location: 'Hyderabad',
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `, 
      },
      created_at: '20/04/2022',
      modified_at: '20/04/2022', 
      profiles: 5, 
      request_to_employer: 'Expecting 10% resource', 
      finished_jobs: 5,  
    }, 
    {
      id:4, 
      freelancer: false,
      about: `RemoDevs is an IT recruitment agency founded in 2020 in Gdańsk, Poland. Their 5-person team focuses on HR services and IT staff augmentation for small businesses as well as mid-sized and enterprise clients in IT and business industries.`,
      firm : {
        name: 'RemoDevs',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://remodevs.com/'
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'on-demand',
      job: {
        id: 6,  
        title: 'Content Writer',
        status: 'Completed', 
        experience:  {min: 5, max:8, type:'Years'},
        location: 'Hyderabad',
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `, 
      },
      created_at: '18/04/2022',
      modified_at: '18/04/2022', 
      profiles: 5, 
      request_to_employer: 'Expecting 10% resource', 
      finished_jobs: 5,  
    }, 
    {
      id:5, 
      freelancer: false,
      about: `DNA325 is a recruitment and business process outsourcing provider based in Austin, TX, with a second office in Odessa, TX. Founded in 2016, their team of around 10 employees primarily provide mid-market businesses with non-voice BPO/back office services, IT strategy consulting, IT staff augmentation, HR consulting and outsourcing, and business consulting services.`,
      firm : {
        name: 'DNA325',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://dna325.com/'
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'on-demand',
      job: {
        id: 8,  
        title: 'Architect',
        status: 'Completed', 
        experience:  {min: 1, max: 3, type:'Years'},
        location: 'Hyderabad',
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `, 
      },
      created_at: '15/04/2022',
      modified_at: '15/04/2022', 
      profiles: 5, 
      request_to_employer: '1L per resource', 
      finished_jobs: 5,  
    },
    {
      id:6, 
      freelancer: false,
      about: `Soshace is a recruitment company focused on IT specialists from all over the world. Founded in 2015, Soshace connects companies with Angular, React.js, Node.js, Python, and Java developers.`,
      firm : {
        name: 'Soshace',
        registered: 2018,
        resources: 40,
        bench_resources: 20,
        website_link: 'https://soshace.com/'
      },
      freelancer_name: '',
      related_expereince: '8 years',
      price_per_resource: 'on-demand',
      job: {
        id: 10,  
        title: 'Architect',
        status: 'Active', 
        experience:  {min: 10, max: 14, type:'Years'},
        location: 'Hyderabad',
        job_description_html: `
          <div id="jobDescriptionText" class="jobsearch-jobDescriptionText"><p>Developer with 6 to 10 yrs of hands-on experience on Fullstack development.<br>Responsibilities</p><ul><li>Work with development teams and product managers to ideate software solutions</li><li>Design client-side and server-side architecture</li><li>Build the front-end of applications through appealing visual design</li><li>Develop and manage well-functioning databases and applications</li><li>Write effective APIs</li><li>Test software to ensure responsiveness and efficiency</li><li>Troubleshoot, debug and upgrade software</li><li>Create security and data protection settings</li><li>Build features and applications with a mobile responsive design</li><li>Write technical documentation</li><li>Work with data scientists and analysts to improve software</li></ul><p>Requirements and skills</p><ul><li>Proven experience as a Full Stack Developer or similar role</li><li>Experience developing desktop and mobile applications</li><li>Familiarity with common stacks</li><li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li><li>Knowledge of multiple back-end languages (e.g. C#, Java, .Net, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li><li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li><li>Excellent communication and teamwork skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>An analytical mind</li><li>Experience with science labs is an added advantage</li></ul><p>Job Types: Full-time, Regular / Permanent</p><p>Salary: ₹1,000,000.00 - ₹2,500,000.00 per year</p><p>Benefits:</p><ul><li>Health insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Day shift</li><li>Evening shift</li><li>Flexible shift</li><li>Monday to Friday</li><li>US shift</li></ul><p>Supplemental Pay:</p><ul><li>Yearly bonus</li></ul><p>Ability to commute/relocate:</p><ul><li>Hyderabad, Telangana: Reliably commute or planning to relocate before starting work (Preferred)</li></ul><p>Education:</p><ul><li>Bachelor's (Preferred)</li></ul><p>Experience:</p><ul><li>total work: 6 years (Required)</li></ul><p>Willingness to travel:</p><ul><li>25% (Preferred)</li></ul><p>Expected Start Date: 19/04/2022</p></div>
        `, 
      },
      created_at: '15/04/2022',
      modified_at: '15/04/2022', 
      profiles: 5, 
      request_to_employer: '1.5L per resource', 
      finished_jobs: 5,  
    }
  ];