import { Experience, SkillCategory, Reference, Education, Certification } from './types';

export const CONTACT_INFO = {
  name: "Brian Burns",
  location: "Canton, GA 30115",
  phone: "(321) 591-4426",
  email: "btburns308@icloud.com",
  linkedin: "https://www.linkedin.com/in/brian-burns-b7716a4/",
  // Ensure these files are in your root folder
  profileImage: "brian-burns.jpg", 
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
      "Managing the company's enterprise reporting database (Azure SQL) through the monthly close-out process involving complex data transformation and ETL imports.",
      "Achieved 100% balance to company volume, receivables and liquidations during entire tenure.",
      "Executing, validating and delivering monthly, quarterly, and fiscal quarterly cadence reports for the entire enterprise.",
      "One of three core Business Intelligence members for new report development via Tableau Server / Power BI.",
      "Re-deployed over 30 core business reports in Tableau, drastically decreasing load times."
    ]
  },
  {
    company: "Angel Oak Capital Advisors, LLC",
    location: "Atlanta, GA",
    role: "Senior Operations Systems Analyst",
    period: "2019 – 2020",
    description: "Responsible for development, testing and support of data management and business intelligence systems, with extensive use of Microsoft SQL Server database.",
    achievements: [
      "Created the first SQL Server database for the operations group for all private investment fund derivatives.",
      "Developed standardized operations reporting used in cadence with loan blotter updates and bank collateral custody reconciliation.",
      "Reduced reconciliation time by 50% compared to previous manual methods."
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
      "Created all UAT test plans for the integration of Tempo, a large-scale risk mitigation platform.",
      "Deployed the first loan servicing database used to cure document errors for over 10,000 files."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Stack",
    items: ["Azure SQL", "Tableau", "Power BI", "MS Excel (Expert)", "MS SQL Server", "SSIS", "SAP Data Warehouse"]
  },
  {
    category: "Tools",
    items: ["ServiceNow!", "MS Visio", "MS Access", "MS SharePoint", "iMeet Central"]
  },
  {
    category: "Methodology",
    items: ["Process Improvement", "UAT Testing", "Root Cause Analysis", "Pareto Analysis", "Balanced Scorecards"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Business Administration",
    institution: "Oregon State University",
    location: "Corvallis, Oregon",
    details: "Concentration in Management, Minor in Economics"
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
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    name: "Former Colleague",
    title: "Project Lead",
    relation: "Worked together at PGi",
    quote: "A true professional who understands both the business requirements and the technical execution. Brian is the bridge between operations and IT.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
  }
];
