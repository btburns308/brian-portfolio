import { Experience, SkillCategory, Reference, Education, Certification, Passion } from './types';

export const CONTACT_INFO = {
  name: "Brian Burns",
  location: "Canton, GA 30115",
  phone: "(321) 591-4426",
  email: "btburns308@icloud.com",
  linkedin: "https://www.linkedin.com/in/brian-burns-b7716a4/",
  profileImage: "brian-burns.jpg", 
  resumeUrl: "Brian_Burns_Resume.pdf", 
  summary: "Extensive experience in large scale operational management, process improvement initiatives, business analysis, business intelligence, and systems analyst roles with a focused career and a track record of success.",
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
      "Managing Azure SQL enterprise reporting database through complex data transformation, ETL imports (SSIS/SQL Agent), and stored procedures with 100% balance to volume.",
      "Executing, validating and delivering monthly, quarterly, and fiscal quarterly cadence reports for the entire enterprise (50+ and growing).",
      "Core BI member for new report development and release in Azure SQL via Tableau Server and Power BI for all departments.",
      "Developed and re-deployed over 30 core business reports in Tableau Server as stored procedures, drastically decreasing report load times."
    ]
  },
  {
    company: "Angel Oak Capital Advisors, LLC",
    location: "Atlanta, GA",
    role: "Senior Operations Systems Analyst",
    period: "2019 – 2020",
    description: "Responsible for development, testing and support of data management and business intelligence systems, with extensive use of Microsoft SQL Server database.",
    achievements: [
      "Created the first SQL Server database for the operations group, providing a scalable source for all private investment fund derivatives.",
      "Developed standardized operations reporting used for loan blotter updates, bank collateral custody reconciliation, and loan servicing data reconciliation.",
      "Reduced time spent on reconciliation by 50% compared to previous manual methods."
    ]
  },
  {
    company: "HomeBridge Financial Services, Inc.",
    location: "Kennesaw, GA",
    role: "Senior Business Analyst",
    period: "2017 – 2018",
    description: "Senior Business Analyst within the national servicing center, responsible for detailed system analysis and development of formalized change requirements.",
    achievements: [
      "Closed over 31 complicated enterprise-level trouble and change tickets in less than one year including root cause analysis and UAT.",
      "Created all UAT test plans and documentation for the integration of Tempo, a large-scale risk mitigation platform.",
      "Designed and deployed the company’s first loan servicing database used to document and cure enterprise-level loan document errors for 10,000+ files."
    ]
  },
  {
    company: "Premiere Global Services, Inc. (PGi)",
    location: "Alpharetta, GA",
    role: "Business Process Engineer",
    period: "2015 – 2017",
    description: "Provided global operational support for North America, Latin America, Europe, and Asia Pacific regions using SQL Server, SAP data warehouse, and ServiceNow!.",
    achievements: [
      "Reduced report delivery cycle times by over five weeks and reduced report error rates by more than 50%.",
      "Decreased staff training time by more than 20% by centralizing all departmental policies and protocols into an online portal.",
      "Saved over $1k in recurring monthly expenses by migrating multiple SharePoint sites into the iMeet Central platform."
    ]
  },
  {
    company: "American Advisors Group",
    location: "Kennesaw, GA",
    role: "Operations Manager",
    period: "2013 – 2015",
    description: "Complete operational management of the Georgia Regional Operations Center, leading national projects as the business expands.",
    achievements: [
      "Improved Approved to CTC cycle times by 33% through technology augmentation and operational reorganization.",
      "Reduced operational expenses by 25% through effective management of overtime expenses.",
      "Lead project manager for the transition to a completely paperless environment and the HUD Financial Assessment method migration."
    ]
  },
  {
    company: "GB Shelter Mortgage",
    location: "Melbourne, FL",
    role: "Operations Manager",
    period: "2011",
    description: "Complete management of loan processing through funding for the Regional Operations Center.",
    achievements: [
      "Managed all on-site IT related projects in addition to loan processing operations."
    ]
  },
  {
    company: "Washington Mutual Bank",
    location: "Melbourne, FL / Houston, TX",
    role: "Operations Manager, Vice President",
    period: "2004 – 2008",
    description: "Managed three departments made up of 75 staff and managed groups as large as 150.",
    achievements: [
      "Created capacity modeling to operate departments with 20% less staff than sister sites.",
      "Led the first Total Quality Program, improving the Florida site’s total quality score over 13%.",
      "1st place winner, Production and Quality Dynamics Seminar, 2007."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Proficiencies",
    items: ["Azure SQL", "Tableau Desktop / Server", "Power BI", "Microsoft SQL Server", "MS Access", "MS Excel (Advanced)"]
  },
  {
    category: "Platforms & Tools",
    items: ["Windows", "Cloud", "MS Visio", "ServiceNow!", "SAP Data Warehouse", "iMeet Central", "SharePoint"]
  },
  {
    category: "Operational Strategy",
    items: ["Process Improvement", "UAT Testing", "Root Cause Analysis", "Capacity Modeling", "Total Quality Management (TQM)"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Business Administration",
    institution: "Oregon State University",
    location: "Corvallis, OR",
    details: "Concentration in Management, Minor in Economics"
  },
  {
    degree: "IT Coursework (Database Technologies)",
    institution: "Eastern Florida State College",
    location: "Cocoa, FL",
    details: "42 hours of coursework (3.78 GPA)"
  },
  {
    degree: "IT Coursework (Network Security & SQL)",
    institution: "Chattahoochee Technical College",
    location: "Marietta, GA",
    details: "8 hours of coursework (4.00 GPA)"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2024",
    status: "Verified"
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2023",
    status: "Verified"
  },
  {
    name: "Google Data Analytics Specialization",
    issuer: "Coursera / Google",
    date: "2024",
    status: "Verified"
  },
  {
    name: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "2023",
    status: "Verified"
  },
  {
    name: "Excel Skills for Business Specialization",
    issuer: "Macquarie University",
    date: "2023",
    status: "Verified"
  },
  {
    name: "Data Visualization with Tableau Specialization",
    issuer: "University of California, Davis",
    date: "2023",
    status: "Verified"
  },
  {
    name: "Querying Microsoft SQL Server 2012/2014",
    issuer: "Microsoft",
    date: "2020",
    status: "Verified"
  },
  {
    name: "Microsoft Office Specialist: Excel Expert",
    issuer: "Microsoft",
    date: "2019",
    status: "Verified"
  },
  {
    name: "Production and Quality Dynamics Seminar - 1st Place Winner",
    issuer: "Washington Mutual",
    date: "2007",
    status: "Awarded"
  }
];

export const REFERENCES: Reference[] = [
  {
    name: "Senior Leadership",
    title: "Northpoint Commercial Finance",
    relation: "Direct Reporting",
    quote: "Brian has excellent working relations with all members of the organization from the front line up to and including our President and CEO.",
    avatar: ""
  },
  {
    name: "Operations Group",
    title: "Angel Oak Capital",
    relation: "Systems Support",
    quote: "His database solutions provided a scalable and permanent data source that drastically reduced manual reconciliation methods.",
    avatar: ""
  },
  {
    name: "Servicing Center",
    title: "HomeBridge Financial",
    relation: "Business Analysis",
    quote: "Closed complicated enterprise-level tickets and documentation for large-scale risk mitigation platform integration.",
    avatar: ""
  }
];

export const PASSIONS: Passion[] = [
  {
    title: "The Rhythm of Analytics",
    role: "Music-Literate Drummer",
    description: "The same precision required to hold a complex jazz pocket is what I bring to large-scale data systems. Performance is about timing, teamwork, and a relentless pursuit of the perfect cadence.",
    highlights: [
      "First Chair Jazz Ensemble at Oregon State University",
      "Current Worship Drummer at Rising Hills Church",
      "Rhythmic Precision applied to Operational Strategy"
    ]
  }
];
