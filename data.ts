import { Experience, SkillCategory, Reference, Education, Certification } from './types';

export const CONTACT_INFO = {
  name: "Brian Burns",
  location: "Canton, GA 30115",
  phone: "(321) 591-4426",
  email: "btburns308@icloud.com",
  linkedin: "https://www.linkedin.com/in/brian-burns-b7716a4/",
  // This calculates the absolute URL of the image relative to this code file.
  // It handles hosting in subfolders (like /brian-portfolio/) automatically.
  profileImage: new URL('./brian-burns.jpg', import.meta.url).href, 
  fallbackImage: "", 
  resumeUrl: "Brian_Burns_Resume.pdf", 
  summary: "Extensive experience in large scale operational management, process improvement initiatives, business analysis, business intelligence, and systems analyst roles.",
  headline: "Operations / Business / Business Intelligence Analyst"
};

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    company: "Northpoint Commercial Finance",
    location: "Alpharetta, GA",
    role: "Business Intelligence Analyst",
    period: "2021 – Present",
    description: "Responsible for managing the company's enterprise reporting database (Azure SQL) monthly close-out process, report development and deployment.",
    achievements: [
      "Managing the company's enterprise reporting database (Azure SQL) through the monthly close-out process involving complex data transformation and ETL imports (SSIS/SQL Agent jobs).",
      "Achieved 100% balance to company volume, receivables and liquidations during entire tenure.",
      "Executing, validating and delivering monthly, quarterly, and fiscal quarterly cadence reports for the entire enterprise (50+ currently).",
      "One of three core BI members for new report development, testing and release in Azure SQL via Tableau Server / Power BI.",
      "Developed, tested and re-deployed over 30 pre-existing core business reports in Tableau Server, drastically decreasing report load times."
    ]
  },
  {
    company: "Angel Oak Capital Advisors, LLC",
    location: "Atlanta, GA",
    role: "Senior Operations Systems Analyst",
    period: "2019 – 2020",
    description: "Responsible for development, testing and support of data management and business intelligence systems, with extensive use of Microsoft SQL Server database.",
    achievements: [
      "Created the first SQL Server database for the operations group - a scalable, secure, and permanent data source for all private investment fund derivatives.",
      "Developed standardized operations reporting used in cadence with loan blotter updates, bank collateral custody reconciliation, and loan servicing data reconciliation.",
      "Reduced time spent by 50% compared to previous manual reconciliation methods through standardized reporting."
    ]
  },
  {
    company: "HomeBridge Financial Services, Inc.",
    location: "Kennesaw, GA",
    role: "Senior Business Analyst",
    period: "2017 – 2018",
    description: "Senior Business Analyst within national servicing center, responsible for detailed system analysis and development of formalized change requirements.",
    achievements: [
      "Closed over 31 complicated enterprise level trouble and change tickets in less than one year.",
      "Created all UAT test plans and associated documentation for the company’s integration of Tempo, a large-scale risk mitigation platform.",
      "Designed, developed, and deployed the company’s first loan servicing database used to document and cure enterprise-level loan document errors/exceptions for over 10,000 files."
    ]
  },
  {
    company: "Premiere Global Services, Inc. (PGi)",
    location: "Alpharetta, GA",
    role: "Business Process Engineer",
    period: "2015 – 2017",
    description: "Provided Global operational support for clients in North America, Latin America, Europe, and Asia Pacific regions. Managed large scale projects involving numerous continual improvement initiatives.",
    achievements: [
      "Reduced report delivery cycle times by over five weeks and reduced report error rates by more than 50%.",
      "Decreased staff training time by more than 20% and increased productivity by centralizing all departmental policies into one online intranet portal.",
      "Saved over $1k in recurring monthly expenses by migrating and centralizing multiple Microsoft SharePoint sites into the iMeet Central platform."
    ]
  },
  {
    company: "American Advisors Group",
    location: "Kennesaw, GA",
    role: "Operations Manager",
    period: "2013 – 2015",
    description: "Complete operational management of our Georgia Regional Operations Center. Leading and managing several national operational projects.",
    achievements: [
      "Improved Approved to CTC cycle times 33% through technology augmentation and operational reorganization.",
      "Increased average individual production 30% through the creation of a balanced scorecard measurement system.",
      "Reduced operational expenses 25% through effective management of overtime expenses.",
      "Improved quality 50% through Pareto analysis and associated team coaching."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Platforms",
    items: ["Windows", "Cloud"]
  },
  {
    category: "Tools & Applications",
    items: ["Azure SQL", "Tableau Desktop / Server", "Power BI", "MS Excel (Expert)", "MS SQL Server", "SSIS", "SAP Data Warehouse", "ServiceNow!", "MS Visio", "MS Access"]
  },
  {
    category: "Specializations",
    items: ["Business Intelligence", "ETL Processes", "Data Visualization", "Process Improvement", "UAT Testing", "Operational Management", "Root Cause Analysis", "Pareto Analysis"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Business Administration",
    institution: "Oregon State University",
    location: "Corvallis, Oregon",
    details: "Concentration in Management, Minor in Economics"
  },
  {
    degree: "Database Technologies Coursework",
    institution: "Eastern Florida State College",
    location: "Cocoa, Florida",
    details: "42 hours of IT coursework (3.78 GPA)"
  },
  {
    degree: "Network Security & SQL Coursework",
    institution: "Chattahoochee Technical College",
    location: "Marietta, GA",
    details: "8 hours of IT coursework (4.00 GPA)"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2024",
    status: "In Progress"
  }
];

export const REFERENCES: Reference[] = [
  {
    name: "LinkedIn Endorsement",
    title: "Senior Manager",
    relation: "Direct Report",
    quote: "Brian's ability to transform complex data into actionable insights is unparalleled. He built reporting systems from the ground up that saved our team hundreds of hours.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Former Colleague",
    title: "Project Lead",
    relation: "Worked together at PGi",
    quote: "A true professional who understands both the business requirements and the technical execution. Brian is the bridge between operations and IT.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Operations Director",
    title: "Executive Director",
    relation: "Managed Brian",
    quote: "Brian managed our regional operations center with extreme efficiency. His introduction of balanced scorecards drastically improved our team's output.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];
