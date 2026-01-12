import { Experience, SkillCategory, Reference, Education, Certification } from './types';

export const CONTACT_INFO = {
  name: "Brian Burns",
  location: "Canton, GA 30115",
  phone: "(321) 591-4426",
  email: "btburns308@icloud.com",
  linkedin: "https://www.linkedin.com/in/brian-burns-b7716a4/",
  profileImage: "brian-burns.jpg", 
  resumeUrl: "Brian_Burns_Resume.pdf", 
  summary: "Accomplished Business Intelligence and Operations Specialist with over 15 years of success in the financial services industry. Expert in Azure SQL, Tableau, and Power BI, with a proven track record of optimizing enterprise reporting and streamlining complex operational workflows.",
  headline: "Business Intelligence / Operations"
};

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    company: "Northpoint Commercial Finance",
    location: "Alpharetta, GA",
    role: "Business Intelligence Specialist",
    period: "2021 – Present",
    description: "Leading enterprise reporting strategy and SQL database management for a premier commercial finance provider.",
    achievements: [
      "Transformed 30+ legacy reports into high-performance Tableau dashboards, reducing refresh latency by 40%.",
      "Manage Azure SQL databases ensuring 100% data integrity for critical monthly and quarterly financial close-outs.",
      "Developed comprehensive Power BI reporting suites for executive leadership visibility.",
      "Serve as the primary technical bridge between IT infrastructure and business operations."
    ]
  },
  {
    company: "Angel Oak Capital Advisors, LLC",
    location: "Atlanta, GA",
    role: "Senior Operations Systems Specialist",
    period: "2019 – 2020",
    description: "Architected data systems and operational controls for complex private investment funds.",
    achievements: [
      "Engineered a dedicated SQL Server database to track derivative operations and bank collateral.",
      "Automated daily loan blotter reconciliations, eliminating significant manual processing overhead.",
      "Established standardized UAT protocols for proprietary investment management system upgrades."
    ]
  },
  {
    company: "HomeBridge Financial Services, Inc.",
    location: "Kennesaw, GA",
    role: "Senior Business Specialist",
    period: "2017 – 2018",
    description: "Managed system auditing and technical change requirements for a national loan servicing center.",
    achievements: [
      "Led UAT testing for 'Tempo', a large-scale enterprise risk mitigation platform.",
      "Audited and remediated 10,000+ loan records using advanced SQL and MS Access queries.",
      "Acted as the subject matter expert for root cause analysis on high-priority system tickets."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Expertise",
    items: ["Azure SQL", "Tableau Desktop/Server", "Power BI", "MS SQL Server", "SSIS", "Excel Expert (VBA/PowerQuery)"]
  },
  {
    category: "Operational Tools",
    items: ["ServiceNow!", "MS Visio", "Salesforce", "iMeet Central", "SAP Data Warehouse"]
  },
  {
    category: "Strategic Frameworks",
    items: ["Process Improvement", "UAT Testing", "Root Cause Analysis", "Data Governance", "Change Management"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Business Administration",
    institution: "Oregon State University",
    location: "Corvallis, OR",
    details: "Concentration in Management, Minor in Economics"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2024",
    status: "Active"
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2023",
    status: "Active"
  },
  {
    name: "Querying Microsoft SQL Server 2012/2014",
    issuer: "Microsoft",
    date: "2020",
    status: "Certified"
  },
  {
    name: "Microsoft Office Specialist: Excel Expert",
    issuer: "Microsoft",
    date: "2019",
    status: "Certified"
  }
];

export const REFERENCES: Reference[] = [
  {
    name: "Professional Endorsement 1",
    title: "Paste Colleague Name & Title Here",
    relation: "Direct Report / Supervisor",
    quote: "Paste the actual quote from Brian's LinkedIn Recommendations section here to ensure it is 100% authentic.",
    avatar: ""
  },
  {
    name: "Professional Endorsement 2",
    title: "Paste Colleague Name & Title Here",
    relation: "Former Supervisor",
    quote: "Paste the actual quote from Brian's LinkedIn Recommendations section here to ensure it is 100% authentic.",
    avatar: ""
  },
  {
    name: "Professional Endorsement 3",
    title: "Paste Colleague Name & Title Here",
    relation: "Collaborator",
    quote: "Paste the actual quote from Brian's LinkedIn Recommendations section here to ensure it is 100% authentic.",
    avatar: ""
  }
];
