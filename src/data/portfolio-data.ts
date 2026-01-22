export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "Private" | "Open Source" | "Enterprise";
  hasDemo: boolean;
  demourl?: string; // Note: lowercase to match your data
  detailsUrl?: string;
}


export const portfolioData = {
  personal: {
    name: "Noel Balita",
    title: "IT Specialist | System Admin • SaaS | Network & Database Specialist | VB.NET Developer | Digital Designer | IT Freelancer",
   // tagline: "Detail-oriented and self-motivated IT Professional with a Bachelor of Science in Computer Science. Proficient in leading teams and collaborating with cross-functional departments to develop innovative solutions.",
    about: "Experienced IT professional with  5 years in infrastructure management, system and database administration, system development, end-user support, and data research/manipulation. Proven track record across healthcare, finance, andeducation sectors in delivering reliable, high-performance, and secure IT solutions.",
    email: "noelb.itprofessional@gmail.com",
    location: "Lipa City, Batangas, Philippines",
    linkedin: "https://www.linkedin.com/in/noel-balita-431bb81b6/",
    website: "https://nbalita.github.io/portfolio/",
    // Add picture URL
    picture: "https://lh3.googleusercontent.com/d/1MJquqxwDpExEU6wQ7i6jw_lAoAyFfQXT",
    altText: "Noel Balita - IT Professional",
  },

  
  
  coreCompetencies: [
    { name: "System & Network Administration", percentage: 95 },
    { name: "Cloud & Productivity Platforms", percentage: 90 },
    { name: "Database & Reporting", percentage: 85 },
    { name: "Scripting & Programming", percentage: 80 },
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Kolehiyo ng Lungsod ng Lipa",
    period: "July 2016 – July 2020",
  },
  
  highlights: [
    {
      title: "Resource Speaker at Edustria High School by FEU & T.I.P.",
      description: "Feeling grateful for another wonderful opportunity to share my knowledge! A big thank you to Edustria High School by FEU & T.I.P. for inviting me as a resource person during their ICT month.",
    },
    {
      title: "Resource Speaker at Deped Tayo - Luta Sur National High School",
      description: "Honored to have been invited as a resource speaker by Deped Tayo - Luta Sur National High School! It was a pleasure sharing insights and knowledge with such an attentive audience of educators.",
    },
  ],
  

  //Experience Section  
  experience: [
    {
      id: "exp-1",
      title: "IT Freelancer",
      company: "",
      period: "JANUARY 2021 - PRESENT",
      description: [
        "Provide end-to-end IT support including troubleshooting and repair for computers/laptops—resolving hardware, software, and performance issues efficiently.",
        "Perform system reformatting and clean OS installations, including data backup, software setup, and optimization for secure and smooth operation.",
        "Design structured LAN cabling and implement network infrastructure, ensuring reliable connectivity and efficient data flow across client environments.",
        "Set up and manage Google Workspace and Microsoft 365 tenants, including domain purchase, license setup, user/group management, email system support, and creating automations to streamline workflows and enhance productivity.",
        "Offer graphic design services such as logos, banners, and marketing assets—tailored to clients' branding and specific visual needs.",
        "Offer system development and thesis assistance, supporting students and professionals in creating custom applications and comprehensive research documentation aligned with academic or business goals.",
      ],
    },
  {
      id: "exp-2",
      title: "Digital Designer & IT Support (Part-Time)",
      type: "Part-Time",
      company: "Headway Shropshire",
      period: "JULY 2025 - DECEMBER 2025",
      description: [
        "Design and produce a range of digital assets including infographics, booklets, leaflets, and posters for social media campaigns, collaborating closely with the social media specialist.",
        "Design, build, and maintain the company website, ensuring it is visually compelling, user-friendly, and aligned with brand identity.",
        "Implement and manage website SEO strategies to improve search engine rankings, drive organic traffic, and enhance online visibility.",
        "Provide general IT support to staff for hardware, software, and network-related issues, ensuring smooth daily operations.",
        "Organize and manage digital documentation by restructuring and maintaining the company's SharePoint file system for improved accessibility and efficiency.",
      ],
    },

    {
      id: "exp-3",
      title: "IT Officer",
      company: "EDUSTRIA HIGH SCHOOL BY FEU & T.I.P.",
      period: "JANUARY 2024 - JULY 2025",
      description: [
        "Administered and maintained Canvas LMS, Google Workspace, Microsoft 365, and overall ITS infrastructure.",
        "Developed Windows-based system solutions and provided user support for EmpowerED and other e-learning tools.",
        "Conducted ITS orientations and managed software subscriptions and expense tracking.",
        "Oversaw inventory and logging systems for tools, equipment, materials, and CCTV assets.",
        "Assisted in website updates, digital marketing efforts, academic content management, and ID creation for students and employees.",
      ],
    },
    {
      id: "exp-4",
      title: "MIS Head",
      company: "LIPA MEDIX MEDICAL CENTER",
      period: "JULY 2023 - DECEMBER 2023",
      description: [
        "Led strategic planning and project management to align IT initiatives with organizational goals, ensuring timely and cost-effective execution.",
        "Oversaw system development, infrastructure, and data management to maintain secure and accessible technology environments.",
        "Evaluated emerging technologies and managed vendor relationships to support innovation and efficiency.",
        "Ensured IT operations met security standards and complied with regulatory requirements.",
        "Provided user support and training while fostering communication between stakeholders and IT teams.",
      ],
    },
    {
      id: "exp-5",
      title: "IT Specialist - System Admin",
      company: "LOLC BANK PHILIPPINES INC.",
      period: "APRIL 2022 - OCTOBER 2022",
      description: [
        "Maintained and secured IT infrastructure by minimizing network interruptions, configuring devices, and enhancing security and connectivity.",
        "Supported business operations through troubleshooting, system maintenance, email and account management, and administration of Active Directory and Office 365.",
        "Served as first contact in IT operations, enforced compliance standards, and collaborated with internal teams through implementations and on-site visits.",
        "Oversaw IT asset management, user account setup, and helpdesk support.",
      ],
    },
    {
      id: "exp-6",
      title: "Chief IT",
      company: "N.L.VILLA MEMORIAL MEDICAL CENTER",
      period: "NOVEMBER 2021 - FEBRUARY 2022",
      description: [
        "Managed network, systems, databases, and security infrastructure to ensure enterprise stability, reliable backups, and compliance with safety standards.",
        "Led technical projects, system upgrades, and integrations while collaborating with stakeholders, consultants, and executive leadership.",
        "Delivered excellent user support service, efficiently resolved technical issues, and coordinated with external agencies and vendors.",
        "Oversaw team performance, server room operations, biometrics, CCTV, email systems, and firewall/IP configurations, providing regular updates to executives.",
      ],
    },
    {
      id: "exp-7",
      title: "IT STAFF",
      company: "N.L.VILLA MEMORIAL MEDICAL CENTER",
      period: "JANUARY 2021 - NOVEMBER 2021",
      description: [
        "Managed IT procurement, inventory tracking, and hardware/software deployment to ensure efficient asset assignment and prevent shortages.",
        "Installed, configured, and maintained IT infrastructure including PCs, networks, telephony systems, routers, and structured cabling.",
        "Oversaw onboarding and offboarding processes, ensuring seamless system access and device provisioning.",
        "Resolved technical issues related to networks, BIZBOX hospital systems, and applications; supported remote users and maintained SQL Server and Windows Server environments.",
        "Handled web and social media updates, printer and biometrics maintenance, and developed desktop applications using VB.NET.",
        "Assisted the marketing team with graphic design and ad materials.",
      ],
    },
    {
      id: "exp-8",
      title: "IT ADMIN (OJT)",
      company: "New Nemar Development Corp.",
      period: "JANUARY 2020 - MAY 2020",
      description: [
        "Evaluated and recommended IT purchases including computers, networks, peripherals, and software.",
        "Installed, configured, and maintained PCs, Ethernet networks, and network cabling; performed routine system maintenance.",
        "Troubleshot and resolved issues related to networks, systems, applications, printers, and user accounts.",
        "Provided user support by creating employee IDs and managing new user account setups.",
      ],
    },
   
  ],
  
  //Skills Section
  skills: [
    {
      id: "skill-1",
      category: "Hardware and Peripherals",
      description: "Computer, laptop, and peripheral troubleshooting • Hardware upgrade and replacement • Printer, biometric, and telephone system support • Router/modem setup and maintenance • Server infrastructure management",
      items: ["Computer", "Laptop", "Server", "Telephone", "Biometric", "Printer", "Router/modem", "Switches", "PABX"],
    },
    {
      id: "skill-2",
      category: "Operating Systems and Servers",
      description: "Windows OS and Windows Server • NAS Server, Hyper-V virtualization • Remote Desktop Protocol (Anydesk, TeamViewer, TightVNC, Quick Assist and other) • Active Directory and Domain Management",
      items: ["Windows XP,7,8,10,11", "Windows Server 2008 - 2019", "Microsoft SQL Server 2008 - 2019", "Synology", "Remote Desktop Protocol", "Active Directory"],
    },
    {
      id: "skill-3",
      category: "Database Management",
      description: "MS SQL • MySQL • Oracle • MariaDB • PostgreSQL • Microsoft Access • Firebase • Supabase •Database installation, configuration, and troubleshooting",
      items: ["Microsoft SQL Server 2008 - 2019", "Xampp", "MySQL Workbench"],
    },
    {
      id: "skill-4",
      category: "Domain Registrar / Web Hosting",
      description: "GoDaddy • Name.com • Namecheap • Google Domain • Cloudflare • Hostgator",
      items: ["Cpanel", "DNS Records", "Email Hosting", "Website Builder"],
    },
    {
      id: "skill-5",
      category: "Web, Programming & App Development",
      description: "WordPress, Google Sites, Wix, Strikingly • Microsoft Power Platform: Power Automate, Power Apps, Power Pages • Visual Basic / VB.NET • HTML, CSS • Javascript • C# • ASP.NET",
      items: ["Devexpress Tools", "WPF Controls", "Telerik UI", "Syncfusion", "Guna UI", "Bunifu UI", "Krypton Toolkit", "Email Automation", "Workflow Automation", "Windows Form"],
    },
    {
      id: "skill-6",
      category: "Multimedia & Design",
      description: "Adobe Photoshop • Adobe Lightroom • Adobe Illustrator • Adobe Express • Canva • Filmora • PowerDirector • Capcut",
      items: ["Infographics", "Poster Design", "Social Media Graphic", "Photo Enhancement", "Simple Video", "Intro/Outro", "Dynamic Video"],
    },
    {
      id: "skill-7",
      category: "Security & Monitoring",
      description: "pfSense, FortiGate • PRTG • Antivirus deployment and maintenance • VPN configuration and management",
      items: ["Firewall configuration", "VPN", "Web Filter", "Malicious File Filter"],
    },
    {
      id: "skill-8",
      category: "Business & IT Systems",
      description: "BIZBOX (HMS, PMS, MMS, FMS) • Ticketing Systems: HESK, ServiceNow (SNOW), Jira, Zendesk, Zoho Helpdesk, RAVE • Canvas LMS administration • Empowered • KOHA • Snipe-IT",
      items: ["Ticketing Tools", "Hospital System", "Asset Management", "Enrollment Management", "Library Management System", "Learning Management System", "Software as a Service(SAAS)"],
    },
    {
      id: "skill-9",
      category: "Software as a Service (SaaS)",
      description: "Google Workspace • Microsoft 365 • Zoho • Slack • Mailchimp • Trello • Asana • Adobe Creative Cloud • Salesforce • Hubspot",
      items: ["Microsoft Power Apps", "Productivity Tools", "Approval Automation", "CRM", "Email Automation", "Workflow Automation"],
    },
    {
      id: "skill-10",
      category: "Network & Other",
      description: "Network connectivity setup and troubleshooting • TCP/IP, DHCP, LAN/WLAN configuration • VLANs and switching concepts • Network monitoring tools and protocols • Network application communications • LAN tracing and telephone/network cabling • Network patch panel management • Router/switch/Wi-Fi configuration • File and printer sharing over network • Omada Controller setup • VPN and firewall deployment • Synology",
      items: ["Security Configuration", "Troubleshooting", "Patch Management", "File Server", "Access Point"],
    },
  ],
  

  //Projects Section
  projects: [

    {
      id: "proj-1",
      title: "Queueing Management System",
      description: "A modern, efficient QMS designed to streamline customer flow with digital queue displays, priority management, and real-time monitoring.",
      tags: ["VB.NET", "SQL Server", "Reporting", "Windows Forms", "Column Filtering"],
      status: "Private",
      hasDemo: true,
      demourl: "https://www.youtube.com/watch?v=psFsaWEVc8U",
    },
    {
      id: "proj-2",
      title: "Inventory Management System",
      description: "A Windows-based solution for streamlined inventory tracking with role-based access, real-time stock alerts, and supplier management.",
      tags: ["VB.NET", "SQL Server", "Reporting", "Auto-highlighted low stock items", "Windows Forms","Column Filtering"],
      status: "Private",
      hasDemo: true,
      demourl: "https://www.youtube.com/watch?v=jytRuwCg42g",
    },
    {
      id: "proj-3",
      title: "Barangay Management System",
      description: "Transform your barangay operations with our all-in-one digital solution designed to streamline services, improve record-keeping, and enhance community engagement! Say goodbye to paper-based processes and hello to efficient, transparent, and modern barangay management!",
      tags: ["VB.NET", "SQL Server", "Reporting", "Column Filtering", "Windows Forms"],
      status: "Private",
      hasDemo: true,
      demourl: "https://www.youtube.com/watch?v=WSsSXN35cww",
    },
    {
      id: "proj-4",
      title: "RFID Attendance System",
      description: "The Edustria High School Attendance Monitoring System is an RFID-based solution that automates student attendance and instantly notifies parents via email. It offers real-time alerts, exportable reports (Word/Excel/CSV/PDF), and smart filtering by grade or date.",
      tags: ["Email Automation", "VB.NET", "Reporting", "RFID", "SQL Server", "Windows Form","Column Filtering"],
      status: "Private",
    },
    {
      id: "proj-5",
      title: "EHS Trip Ticket",
      description: "Edustria High School Trip Ticket System - A Power Automate-integrated solution that streamlines trip scheduling with auto-generated IDs, multi-level approvals (FTS/HR), and real-time notifications. Features include color-coded trip indicators (today/future) and automated duration calculations.",
      tags: ["Email Automation", "Power Automate", "Reporting", "Sharepoint", "Microsoft Teams","Column Filtering"],
      status: "Private",
    },
    {
      id: "proj-6",
      title: "Edustria High School Clinic Management System",
      description: "A comprehensive digital solution designed to optimize student healthcare with centralized patient records, automated inventory tracking, and real-time stock alerts. The system features medical history tracking, auto-deduction of supplies, and detailed audit logs for full transparency.",
      tags: ["VB.NET", "Reporting", "Auto-highlighted low stock items", "SQL Server", "Windows Form", "Column Filtering"],
      status: "Private",
    },
    {
      id: "proj-7",
      title: "Computer Lab Upgrade",
      description: "A security-focused modernization featuring Active Directory management, strict web filtering, and USB restrictions for safe digital learning.",
      tags: ["Active Directory", "Group Policy", "Network Security", "DNS"],
      status: "Private",
    },
    {
      id: "proj-8",
      title: "Hesk Ticketing System - Lipa Medix Medical Center",
      description: "Lipa Medix Medical Center has transformed its IT support with the Hesk Ticketing System, streamlining technical issue resolution through structured workflows, real-time transparency, and actionable analytics. Key outcomes include 30% faster resolution times and 100% request tracking.",
      tags: ["IT Support", "Ticketing System", "Workflow Automation", "Email Automation", "MySQL", "Reporting"],
      status: "Private",
    },
    {
      id: "proj-9",
      title: "Room Management System - Lipa Medix Medical Center",
      description: "This intuitive dashboard revolutionizes hotel operations with live room status visualization, automated workflow triggers, and unified PMS integration. Key benefits include 30% faster room turnover and 100% accurate vacancy data.",
      tags: ["VB.NET", "Workflow Automation", "Reporting", "SQL Server", "Windows Form", "Column Filtering"],
      status: "Private",
    },
    {
      id: "proj-10",
      title: "LOLC IT TICKET HELPDESK",
      description: "A digital transformation of support operations featuring automated ticket routing & real-time alerts, user-friendly portal with full audit trails, and integrated knowledge base. Key results include 50% faster response times and 35% reduction in IT downtime.",
      tags: ["Email Automation", "Power Automate", "Workflow Automation", "Reporting", "Sharepoint", "Microsoft Teams", "Column Filtering", "IT Support"],
      status: "Private",
    },
    {
      id: "proj-11",
      title: "Biometrics Monitoring",
      description: "Enhanced attendance monitoring system with user-friendly interface for easy login, attendance marking, and history viewing. Features automatic detection of discrepancies, exportable reports, and customizable settings for various organizations.",
      tags: ["VB.NET", "Workflow Automation", "Reporting", "SQL Server", "Windows Form", "Column Filtering"],
      status: "Private",
    },
  ],
};
