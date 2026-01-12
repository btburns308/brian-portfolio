import { Experience, SkillCategory, Reference, Education, Certification } from './types';

export const CONTACT_INFO = {
  name: "Brian Burns",
  location: "Canton, GA 30115",
  phone: "(321) 591-4426",
  email: "btburns308@icloud.com",
  linkedin: "https://www.linkedin.com/in/brian-burns-b7716a4/",
  profileImage: "/brian-burns.jpg", 
  resumeUrl: "/Brian_Burns_Resume.pdf", 
  summary: "Accomplished analyst with a proven track record in large-scale operational management, process improvement, and enterprise-level business intelligence. Expert in transforming raw data into strategic operational insights.",
  headline: "Business Intelligence / Operations Analyst"
};

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    company: "Northpoint Commercial Finance",
    location: "Alpharetta, GA",
    role: "Business Intelligence Analyst",
    period: "2021 – Present",
    description: "Driving enterprise reporting and SQL database management for complex data transformation and ETL processes.",
    achievements: [
      "Manage enterprise reporting database (Azure SQL) through monthly close-out with 100% balance accuracy.",
      "Re-deployed 30+ core business reports in Tableau, significantly optimizing performance and load times.",
      "Partner with leadership to deliver monthly, quarterly, and fiscal reporting cadences across the enterprise.",
      "Lead developer for new Tableau Server and Power BI reporting initiatives."
    ]
  },
  {
    company: "Angel Oak Capital Advisors, LLC",
    location: "Atlanta, GA",
    role: "Senior Operations Systems Analyst",
    period: "2019 – 2020",
    description: "Developed and supported high-stakes data management and business intelligence systems for private investment funds.",
    achievements: [
      "Architected the first SQL Server database for private investment fund derivatives operations.",
      "Reduced manual reconciliation time by 50% through automated reporting standardization.",
      "Established standard operations reporting for bank collateral custody and loan blotter updates."
    ]
  },
  {
    company: "HomeBridge Financial Services, Inc.",
    location: "Kennesaw, GA",
    role: "Senior Business Analyst",
    period: "2017 – 2018",
    description: "Led system analysis and change requirements for a national loan servicing center.",
    achievements: [
      "Resolved 30+ complex enterprise-level trouble tickets within the first year.",
      "Designed UAT test plans for 'Tempo', a major large-scale risk mitigation platform integration.",
      "Deployed first-of-its-kind loan servicing database to audit and cure errors across 10,000+ files."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Expertise",
    items: ["Azure SQL", "Tableau", "Power BI", "MS Excel (Expert)", "MS SQL Server", "SSIS", "SAP Data Warehouse"]
  },
  {
    category: "Operational Systems",
    items: ["ServiceNow!", "MS Visio", "MS Access", "MS SharePoint", "iMeet Central"]
  },
  {
    category: "Strategic Frameworks",
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
    name: "C-Level Executive",
    title: "Chief Operating Officer",
    relation: "Former Supervisor",
    quote: "Brian is an exceptional analyst who bridges the gap between technical data and business strategy. His reporting systems transformed our decision-making process.",
  },
  {
    name: "Senior Program Manager",
    title: "Operations Director",
    relation: "Collaborator at HomeBridge",
    quote: "His attention to detail and ability to solve complex system issues is unmatched. Brian doesn't just find problems; he builds the databases that fix them.",
  }
];
