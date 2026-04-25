// import React, { useState } from "react";
// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGmail,SiExpress, SiMysql, SiGooglecloud, SiDocker,SiWhatsapp,SiLinkedin, SiNodedotjs, SiAmazon } from "react-icons/si";
// import Balaji from '../assets/Balajisundar.jfif'
// export default function Portfolio() {
//   // const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   // const [status, setStatus] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   // const handleChange = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   const technologies = [
  
  
//     { name: "React.js", icon: <SiReact /> },
//     { name: "Express.js", icon: <SiExpress /> },
//      { name: "Node.js", icon: <SiNodedotjs /> },
//     { name: "MySQL", icon: <SiMysql /> },
//     { name: "Google Cloud Compute Engine", icon: <SiGooglecloud /> },
//       { name: "Google Cloud App Engine", icon: <SiGooglecloud /> },
//     { name: "Docker", icon: <SiDocker /> },
//        { name: "AWS", icon: <SiAmazon /> },
//   ];


//   return (
//     <div className="">
//       {/* Navigation Bar */} 
//       <div className="w-full bg-white shadow-md">
//   <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//     <div className="flex justify-between items-center">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-gray-800">Balaji P</h1>
//       {/* Hamburger Icon - Mobile */}
//       <button
//         className="md:hidden focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           className="w-6 h-6 text-gray-800"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </button>

//       {/* Desktop Links */}
//       <div className="hidden md:flex flex-wrap justify-end space-x-4 lg:space-x-6">
//         <a href="#languageskills" className="hover:text-sky-600 transition duration-300">Language Skills</a>
//         <a href="#organizationalprojects" className="hover:text-sky-600 transition duration-300">Organizational Projects</a>
//         <a href="#capstoneprojects" className="hover:text-sky-600 transition duration-300">Capstone Projects</a>
//         <a href="#contact" className="hover:text-sky-600 transition duration-300">Let’s Work Together</a>
//       </div>
//     </div>

//     {/* Mobile Menu */}
//     <div
//       className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//         isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
//       }`}
//     >
//       <nav className="flex flex-col space-y-2 text-center text-gray-700">
       
//         <a href="#languageskills" className="py-2 hover:text-sky-600 transition-colors">Language Skills</a>
//         <a href="#organizationalprojects" className="py-2 hover:text-sky-600 transition-colors">Organizational Projects</a>
//         <a href="#capstoneprojects" className="py-2 hover:text-sky-600 transition-colors">Capstone Projects</a>
//         <a href="#contact" className="py-2 hover:text-sky-600 transition-colors">Let’s Work Together</a>
//       </nav>
//     </div>
//   </nav>
// </div>


// {/* Overview section */}
//     <section id="overview" className="p-8">
//   <h2 className="text-2xl font-semibold">Personal Overview</h2>
//   <div className="mt-4 flex flex-col-reverse md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 justify-between">
    
//     {/* Left Column (Shown second on mobile): About Me Text */}
//     <div className="flex-1 text-center md:text-justify">
//       <p className="text-lg">
//    I’m Balaji P, a passionate Full Stack & Cloud Developer with expertise in building scalable, high-performance web applications using React.js, Express.js, and MySQL, and deploying them securely on AWS and GCP.
//    Skilled in designing and implementing role-based access systems, developing APIs, and managing production-level cloud deployments. Experienced in configuring VPCs, Load Balancers, Private Subnets, and RDS, optimizing cloud costs, and ensuring reliable, secure, and efficient application delivery across multiple platforms.
//       </p>
//     </div>

//     {/* Right Column (Shown first on mobile): Profile Picture */}
//     <div className="flex-shrink-0">
//       <img
//         src={Balaji} // Replace with your actual image import or path
//         alt="Profile"
//         className="rounded-full w-40 h-40 object-cover border-4 border-gray-300 shadow-lg"
//       />
//     </div>

//   </div>
// </section>

// {/* Career Journey */}
// <section id="careerjourney" className="p-8 bg-gray-100">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Career Journey</h2>

//   <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//     {/* Experience 1 */}
//     <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
//       <h3 className="text-2xl font-semibold">Junior Web Developer</h3>
//       <p className="text-lg text-gray-600">
//         <strong>September 2024 to Present | Datasolve Analytics</strong><br />
//         110, Manickam Lane, Anna Salai, Guindy, Chennai - 600 032
//       </p>
//       <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
//         <li>Contributed to the development of an internal web application aimed at streamlining company operations and enhancing team productivity.</li>
//         <li>Collaborated with cross-functional teams to design, develop, and deploy scalable web solutions tailored for internal use.</li>
//         <li>Utilized modern technologies such as React.js, Express.js, and MySQL to build dynamic interfaces and efficient backend services.</li>
//         <li>Ensured smooth deployment and performance optimization on Google Cloud Platform (GCP) using Docker and Compute Engine.</li>
//         <li>Maintained code quality using version control (Git) and followed iterative development practices for efficient delivery.</li>
//       </ul>
//     </div>

//     {/* Experience 2 */}
//     <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
//       <h3 className="text-2xl font-semibold">MCA Final Year Internship Trainee</h3>
//       <p className="text-lg text-gray-600">
//         <strong>January 2024 to April 2024 | eFloz IT Services</strong><br />
//         B58/1, 2nd Cross,
//         NGO A Colony, Palayamkottai,
//         Tirunelveli, Tamil Nadu,
//         India - 627007
//       </p>
//       <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
//         <li>I developed and maintained RESTful APIs using Express.js, facilitating efficient communication between the front-end and back-end systems.</li>
//         <li>Implemented front-end components and user interfaces using React.js, enhancing user experience and interactivity.</li>
//         <li>Utilized MongoDB to design and manage databases, ensuring optimal data storage and retrieval for web applications.</li>
//         <li>Ensured high code quality through version control (Git) and adopted iterative development for timely delivery.</li>
//       </ul>
//     </div>
//   </div>
// </section>


//       {/* Languages Known Section */}
//       <section id="languageskills" className="p-6 sm:p-8 ">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-center">Language Skills</h2>

//   {/* Mobile & iPad Grid */}
//   <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
//     {technologies.map((tech) => (
//       <div key={tech.name} className="flex flex-col items-center bg-gray-100 text-dark p-3 rounded shadow">
//         <div className="text-2xl mb-1">{tech.icon}</div>
//         <span className="text-sm font-medium text-center">{tech.name}</span>
//       </div>
//     ))}
//   </div>

//   {/* Desktop: Animated scroll */}
//   <div className="overflow-hidden relative hidden md:block">
//     <div className="flex space-x-12 animate-scroll whitespace-nowrap">
//       {technologies.map((tech) => (
//         <div key={tech.name} className="min-w-fit flex items-center space-x-2 px-4 py-2 bg-gray-100 text-dark rounded shadow">
//           <div className="text-xl">{tech.icon}</div>
//           <span className="text-lg lg:text-xl font-medium">{tech.name}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//  {/* Projects Section */}
//       <section id="organizationalprojects" className="p-6 sm:p-8 bg-white">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-center">Organizational Projects</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {/* Project Card 1 */}
//     <div className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition">
//       <h3 className="text-lg font-semibold mb-2 text-[#301934]">Refsolve App</h3>
//       <ul className="list-disc list-inside text-gray-700 text-justify">
//   <li>
//     Developed a role-based medical web app using React.js, Express.js, and MySQL with advanced search, user/admin access, and hierarchical data grouping.
//   </li>
//   <li>
//     Deployed via Docker on GCP Compute Engine with data protection controls (cut/copy/paste disabled) for secure, scalable delivery.
//   </li>
// </ul>
//     </div>
//     {/* Project Card 2 */}
//     <div className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition">
//       <h3 className="text-lg font-semibold mb-2 text-[#301934]">Trove App</h3>
//       <ul className="list-disc list-inside text-gray-700 text-justify">
//   <li>
//   Developed a responsive web application using React for managing medical-related data. Implemented two core search functionalities:
//   </li>
//   <li>
//   Search with Excel – Users upload Excel files which are parsed and filtered to match records in a MySQL database. Matching data is fetched via Express.js APIs and displayed in a responsive, dynamic table.
//   </li>
//   <li>
//   Keyword Search – Users can search using keywords, which are matched against the database, with results retrieved through Express.js APIs and displayed in a structured table format.
//   </li>
// </ul>
//     </div>
//   </div>
// </section>

// {/* Professional Achievements */}

// <section id="educationalqualification" className="p-8 bg-gray-100">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Professional Achievements</h2>

//   <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//     {/* Experience 1 */}
//     <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
 
//   <p className="text-lg text-gray-600">
//     <span className="font-semibold">Awarded Best Performer of the Month (October 2025) for
// outstanding contribution to project deliverables.

// </span><br />
  
  
//   </p>
// </div>

//     <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
 
//   <p className="text-lg text-gray-600">
//     <span className="font-semibold">Optimized Google Cloud Platform (GCP) Compute Engine costs,
// reducing monthly infrastructure expenses and improving
// efficiency

// </span><br />
  
  
//   </p>

// </div>
// </div>



//     {/* Experience 1 */}




// </section>


//   {/* capstone projects */}

// {/* Capstone Projects */}
// {/* <section id="capstoneprojects" className="p-6 sm:p-8 bg-white">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Capstone Projects</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {/* Project 1 */}
//     <a
//       href="https://movieapp-qptd.onrender.com/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition block"
//     >
//       <h3 className="text-lg font-semibold mb-2 text-[#301934]">MovieApp</h3>
//       <p className="text-gray-700 mb-4 text-justify">
//         Built a movie app using React.js and integrated the TMDb API to display real-time movie data
//         with a clean, responsive interface.
//       </p>
//       <span className="text-dark-600 hover:underline inline-flex items-center gap-1">
//         Check it Out
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </span>
//     </a>

//     {/* Project 2 (no link) */}
//     <div className="bg-gray-100 rounded-lg shadow-md p-5 transition block">
//       <h3 className="text-lg font-semibold mb-2 text-[#301934]">
//         Three-Tier Web Application Deployment on AWS
//       </h3>
//    <ul className="text-gray-700 mb-4 list-disc list-inside">
//   <li>Designed and deployed a production-ready <strong>three-tier architecture</strong> on AWS VPC with 6 subnets (Web, App, DB) across multiple Availability Zones.</li>
//   <li>Configured Internet Gateway, NAT Gateways, custom Route Tables, and 5 Security Groups following least-privilege principles.</li>
//   <li>Deployed a Flask backend on private EC2 instances with RDS MySQL in isolated subnets and Apache Web Server on a public EC2.</li>
//   <li>Configured Application Load Balancers for frontend and backend with health checks, routing, and secure communication.</li>
//   <li>Achieved full stack connectivity: Web → ALB → App → RDS, validating an enterprise-grade architecture.</li>
//   <li>Gained hands-on experience in <strong>VPC networking, subnet design, security, Linux server setup</strong>, and <strong>cloud deployment</strong>.</li>
// </ul>

//     </div>
//   </div>
// </section> */}




// {/* Educational Qualification */}

// <section id="educationalqualification" className="p-8 bg-gray-100">
//   <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Academic Qualifications</h2>

//   <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//     {/* Experience 1 */}
//     <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
//   <h3 className="text-2xl font-semibold">Postgraduate – Master of Computer Applications</h3>
//   <p className="text-lg text-gray-600">
//     <span className="font-semibold">St. Xavier's College, Palayamkottai – 627002</span><br />
//     <span className="font-medium">July 2022 – April 2024</span><br />
//     CGPA: 7.59
//   </p>
// </div>



//         {/* Experience 2 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
//   <h3 className="text-2xl font-semibold">Undergraduate – B.Sc. Computer Science</h3>
//   <p className="text-lg text-gray-600">
//     <span className="font-semibold">Karpagam Academy of Higher Education</span><br />
//     <span className="font-medium">June 2019 – April 2022</span><br />
//     CGPA: 8.69
//   </p>
// </div>
//   </div>
// </section>










// <footer id="contact" className="bg-gray-800 text-white py-6 mt-12">
//   <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
   
    
//     <div className="flex flex-wrap justify-center md:justify-start space-x-3 mt-4 md:mt-0">
//       <p>Drop Me a Message</p>
//       {/* LinkedIn */}
//       <a href="https://www.linkedin.com/in/balajip23/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 mb-2 md:mb-0">
//         <SiLinkedin className="w-6 h-6" />
//       </a>
      
//       {/* WhatsApp */}
//       <a href="https://wa.me/6383387454" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 mb-2 md:mb-0">
//         <SiWhatsapp className="w-6 h-6" />
//       </a>
//       <a
//   href="https://mail.google.com/mail/?view=cm&fs=1&to=balajipsundar@gmail.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="hover:text-red-500 mb-2 md:mb-0"
// >
//   <SiGmail className="w-6 h-6" />
// </a>


//     </div>
//   </div>
// </footer>

//     </div>
//   );
// }


// import React, { useState } from "react";
// import {
//   SiReact,
//   SiExpress,
//   SiMysql,
//   SiGooglecloud,
//   SiDocker,
//   SiWhatsapp,
//   SiLinkedin,
//   SiNodedotjs,
//   SiAmazon,
//   SiGmail
// } from "react-icons/si";
// import Balaji from "../assets/Balajisundar.jfif";

// export default function Portfolio() {
//   const [isOpen, setIsOpen] = useState(false);

//   const technologies = [
//     { name: "React.js", icon: <SiReact /> },
//     { name: "Express.js", icon: <SiExpress /> },
//     { name: "Node.js", icon: <SiNodedotjs /> },
//     { name: "MySQL", icon: <SiMysql /> },
//     { name: "Google Cloud Compute Engine", icon: <SiGooglecloud /> },
//     { name: "Google Cloud App Engine", icon: <SiGooglecloud /> },
//     { name: "Docker", icon: <SiDocker /> },
//     { name: "AWS", icon: <SiAmazon /> },
//   ];

//   return (
//     <div className="bg-[#0b1326] text-white font-[Poppins]">

//       {/* NAVBAR */}
//       <div className="w-full bg-[#0b1326]/80 backdrop-blur-md border-b border-white/10">
//         <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//           <h1 className="text-2xl font-bold text-sky-400">Balaji P</h1>

//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>

//           <div className="hidden md:flex gap-6 text-sm text-gray-300">
//             <a href="#languageskills" className="hover:text-sky-400">Language Skills</a>
//             <a href="#organizationalprojects" className="hover:text-sky-400">Organizational Projects</a>
//             <a href="#capstoneprojects" className="hover:text-sky-400">Capstone Projects</a>
//             <a href="#contact" className="hover:text-sky-400">Contact</a>
//           </div>
//         </nav>

//         {isOpen && (
//           <div className="md:hidden px-6 pb-4 text-gray-300 space-y-2">
//             <a href="#languageskills">Language Skills</a>
//             <a href="#organizationalprojects">Organizational Projects</a>
//             <a href="#capstoneprojects">Capstone Projects</a>
//             <a href="#contact">Contact</a>
//           </div>
//         )}
//       </div>

//       {/* OVERVIEW */}
//       <section className="p-8 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-sky-400">Personal Overview</h2>

//         <div className="mt-6 flex flex-col md:flex-row items-center gap-10">

//           <div className="flex-1 text-gray-300 text-lg text-justify text-gray-300">
//           I’m Balaji P, a passionate Full Stack & Cloud Developer with expertise in building scalable, high-performance web applications using React.js, Express.js, and MySQL, and deploying them securely on AWS and GCP. Skilled in designing and implementing role-based access systems, developing APIs, and managing production-level cloud deployments. Experienced in configuring VPCs, Load Balancers, Private Subnets, and RDS, optimizing cloud costs, and ensuring reliable, secure, and efficient application delivery across multiple platforms.
//           </div>

//           <img
//             src={Balaji}
//             className="w-44 h-44 rounded-full border border-sky-400 shadow-lg"
//           />
//         </div>
//       </section>

//       {/* CAREER */}
// <section className="p-8 bg-white/5">
//   <h2 className="text-3xl font-bold text-center text-sky-400 mb-10">
//     Career Journey
//   </h2>

//   <div className="max-w-6xl mx-auto relative border-l border-sky-500/40 pl-8 space-y-10">

//     {/* Job 1 */}
//     <div className="relative">
//       <span className="absolute -left-[10px] top-2 w-4 h-4 bg-sky-400 rounded-full shadow-lg"></span>

//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300">
        
//         <h3 className="text-xl text-sky-400 font-semibold">
//           Junior Web Developer
//         </h3>

//         <p className="text-gray-400 text-sm mt-1">
//           September 2024 to Present | Datasolve Analytics
//         </p>
//         <p className="text-gray-400 text-sm">
//           110, Manickam Lane, Anna Salai, Guindy, Chennai - 600 032
//         </p>

//         <ul className="text-gray-300 mt-4 space-y-2 text-sm list-disc list-inside">
//           <li>Contributed to the development of an internal web application aimed at streamlining company operations and enhancing team productivity.</li>
//           <li>Collaborated with cross-functional teams to design, develop, and deploy scalable web solutions tailored for internal use.</li>
//           <li>Utilized modern technologies such as React.js, Express.js, and MySQL to build dynamic interfaces and efficient backend services.</li>
//           <li>Ensured smooth deployment and performance optimization on Google Cloud Platform (GCP) using Docker and Compute Engine.</li>
//           <li>Maintained code quality using version control (Git) and followed iterative development practices for efficient delivery.</li>
//         </ul>

//       </div>
//     </div>

//     {/* Job 2 */}
//     <div className="relative">
//       <span className="absolute -left-[10px] top-2 w-4 h-4 bg-sky-400 rounded-full shadow-lg"></span>

//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300">

//         <h3 className="text-xl text-sky-400 font-semibold">
//           MCA Final Year Internship Trainee
//         </h3>

//         <p className="text-gray-400 text-sm mt-1">
//           January 2024 to April 2024 | eFloz IT Services
//         </p>
//         <p className="text-gray-400 text-sm">
//           B58/1, 2nd Cross, NGO A Colony, Palayamkottai, Tirunelveli, Tamil Nadu, India - 627007
//         </p>

//         <ul className="text-gray-300 mt-4 space-y-2 text-sm list-disc list-inside">
//           <li>I developed and maintained RESTful APIs using Express.js, facilitating efficient communication between the front-end and back-end systems.</li>
//           <li>Implemented front-end components and user interfaces using React.js, enhancing user experience and interactivity.</li>
//           <li>Utilized MongoDB to design and manage databases, ensuring optimal data storage and retrieval for web applications.</li>
//           <li>Ensured high code quality through version control (Git) and adopted iterative development for timely delivery.</li>
//         </ul>

//       </div>
//     </div>

//   </div>
// </section>
//     ]
//      {/* SKILLS */}
// <section id="languageskills" className="p-8 max-w-7xl mx-auto">

//   <h2 className="text-3xl font-bold text-sky-400 text-center mb-10">
//     Language Skills
//   </h2>

//   {/* GRID CARDS */}
//   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//     {technologies.map((tech) => (
//       <div
//         key={tech.name}
//         className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition duration-300"
//       >

//         {/* glow effect */}
//         <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition"></div>

//         <div className="relative flex flex-col items-center text-center space-y-3">

//           <div className="text-4xl text-sky-400 group-hover:scale-110 transition">
//             {tech.icon}
//           </div>

//           <p className="text-sm text-gray-300 font-medium">
//             {tech.name}
//           </p>

//         </div>
//       </div>
//     ))}

//   </div>

// </section>
   
//     {/* PROJECTS SECTION */}
// <section id="organizationalprojects" className="p-8 max-w-7xl mx-auto">

//   <h2 className="text-3xl font-bold text-sky-400 text-center mb-10">
//     Organizational Projects
//   </h2>

//   <div className="space-y-10">

//     {/* Project 1 */}
//     <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">

//       <div className="p-8">

//         <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl"></div>

//         <h3 className="text-2xl font-semibold text-sky-400 mb-6">
//           Refsolve App
//         </h3>

//         <ul className="space-y-4 text-gray-300 text-sm text-justify list-disc list-inside">

//           <li>
//             Developed a role-based medical web app using React.js, Express.js, and MySQL with advanced search, user/admin access, and hierarchical data grouping.
//           </li>

//           <li>
//             Implemented optimized REST APIs with secure authentication and improved response time for faster data retrieval.
//           </li>

//           <li>
//             Deployed via Docker on GCP Compute Engine with data protection controls (cut/copy/paste disabled) for secure, scalable delivery.
//           </li>

//         </ul>

//       </div>
//     </div>

//     {/* Project 2 */}
//     <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">

//       <div className="p-8">

//         <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl"></div>

//         <h3 className="text-2xl font-semibold text-sky-400 mb-6">
//           Trove App
//         </h3>

//         <ul className="space-y-4 text-gray-300 text-sm text-justify list-disc list-inside">

//           <li>
//             Developed a responsive web application using React for managing medical-related data.
//           </li>

//           <li>
//             Implemented Excel-based search where users upload Excel files, which are parsed and filtered to match records in a MySQL database; results are fetched via Express.js APIs and displayed in a dynamic table.
//           </li>

//           <li>
//             Built keyword search functionality where user queries are matched against the database and results are retrieved through Express.js APIs and displayed in a structured table format.
//           </li>

//         </ul>

//       </div>
//     </div>

//   </div>
// </section>

// {/* Professional Achievements */}

// <section id="achievements" className="p-8 bg-[#151c2e] text-white">

//   <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">
//     Professional Achievements
//   </h2>

//   <div className="max-w-5xl mx-auto relative border-l-2 border-sky-400/40 pl-8 space-y-10">

//     {/* Achievement 1 */}
//     <div className="relative bg-[#222b3d] border border-white/10 rounded-2xl p-6 shadow-lg">

//       {/* Dot */}
//       <div className="absolute -left-[42px] top-6 w-4 h-4 bg-sky-400 rounded-full"></div>

//       <p className="text-gray-300 leading-relaxed">
//         <span className="font-semibold text-white">
//           Awarded Best Performer of the Month (October 2025) for
//           outstanding contribution to project deliverables.
//         </span>
//       </p>

//     </div>

//     {/* Achievement 2 */}
//     <div className="relative bg-[#222b3d] border border-white/10 rounded-2xl p-6 shadow-lg">

//       {/* Dot */}
//       <div className="absolute -left-[42px] top-6 w-4 h-4 bg-sky-400 rounded-full"></div>

//       <p className="text-gray-300 leading-relaxed">
//         <span className="font-semibold text-white">
//           Optimized Google Cloud Platform (GCP) Compute Engine costs,
//           reducing monthly infrastructure expenses and improving
//           efficiency
//         </span>
//       </p>

//     </div>

//   </div>
// </section>


// {/* CAPSTONE PROJECTS */}
// <section id="capstoneprojects" className="p-10 max-w-7xl mx-auto">

//   <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
//     Capstone Projects
//   </h2>

//   <div className="space-y-10">

//     {/* Project 1 */}
//    {/* Project 1 */}
// <a
//   href="https://movieapp-qptd.onrender.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="group block rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition"
// >
//   <div className="p-8">
//     <h3 className="text-2xl font-semibold text-sky-400 mb-3 group-hover:translate-x-1 transition">
//       MovieApp
//     </h3>

//     <p className="text-gray-300 text-sm leading-relaxed text-justify mb-6">
//       Built a movie app using React.js and integrated the TMDb API to display real-time movie data
//       with a clean, responsive interface.
//     </p>

//     <ul className="text-gray-300 text-sm space-y-3 list-disc list-inside mb-6">

//       <li>
//         Built a responsive Movie Application using <strong>React.js</strong> with reusable component-based architecture.
//       </li>

//       <li>
//         Integrated <strong>TMDb API</strong> to fetch real-time movie data such as trending, popular, and search results.
//       </li>

//       <li>
//         Implemented <strong>React Hooks (useState, useEffect)</strong> for efficient state management and API handling.
//       </li>

//       <li>
//         Developed dynamic UI components including movie cards, search bar, and detailed movie view pages.
//       </li>

//       <li>
//         Added search functionality to allow users to quickly find movies by name.
//       </li>

//       <li>
//         Ensured responsive design across mobile, tablet, and desktop for better user experience.
//       </li>

//     </ul>

//     <div className="text-sky-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
//       Check it Out →
//     </div>
//   </div>
// </a>

//     {/* Project 2 */}
//     <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">

//       <div className="p-8">

//         <h3 className="text-2xl font-semibold text-sky-400 mb-6">
//           Three-Tier Web Application Deployment on AWS
//         </h3>

//         <ul className="space-y-4 text-gray-300 text-sm text-justify list-disc list-inside">

//           <li>
//             Designed and deployed a production-ready <strong>three-tier architecture</strong> on AWS VPC with 6 subnets (Web, App, DB) across multiple Availability Zones.
//           </li>

//           <li>
//             Configured Internet Gateway, NAT Gateways, custom Route Tables, and 5 Security Groups following least-privilege principles.
//           </li>

//           <li>
//             Deployed a Flask backend on private EC2 instances with RDS MySQL in isolated subnets and Apache Web Server on a public EC2.
//           </li>

//           <li>
//             Configured Application Load Balancers for frontend and backend with health checks, routing, and secure communication.
//           </li>

//           <li>
//             Achieved full stack connectivity: Web → ALB → App → RDS, validating an enterprise-grade architecture.
//           </li>

//           <li>
//             Gained hands-on experience in <strong>VPC networking, subnet design, security, Linux server setup</strong>, and <strong>cloud deployment</strong>.
//           </li>

//         </ul>

//       </div>
//     </div>

//   </div>
// </section>

// {/* Educational Qualification */}

// <section
//   id="educationalqualification"
//   className="p-8 bg-[#0f172a] text-white"
// >
//   <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-cyan-400">
//     Academic Qualifications
//   </h2>

//   <div className="relative max-w-5xl mx-auto">
//     {/* Vertical Line */}
//     <div className="absolute left-4 top-0 w-[2px] h-full bg-cyan-500"></div>

//     <div className="space-y-10">
      
//       {/* Item 1 */}
//       <div className="relative pl-12">
//         {/* Dot */}
//         <div className="absolute left-2 top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

//         <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md">
//           <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">
//             Postgraduate – Master of Computer Applications
//           </h3>

//            <p className="text-gray-400 text-sm mt-1">
//           St. Xavier's College, Palayamkottai – 627002
//         </p>
//         <p className="text-gray-400 text-sm">
//            July 2022 – April 2024
//         </p>
//           <p className="text-gray-400 text-sm">
//          CGPA: 7.59
//         </p>
//         </div>
//       </div>

//       {/* Item 2 */}
//       <div className="relative pl-12">
//         {/* Dot */}
//         <div className="absolute left-2 top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

//         <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 shadow-md">
//           <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">
//             Undergraduate – B.Sc. Computer Science
//           </h3>
//                 <p className="text-gray-400 text-sm mt-1">
//            Karpagam Academy of Higher Education
//         </p>
//         <p className="text-gray-400 text-sm">
//           June 2019 – April 2022
//         </p>
//           <p className="text-gray-400 text-sm">
//         CGPA: 8.69
//         </p>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

//       {/* FOOTER */}
//       <footer id="contact" className="p-6 border-t border-white/10">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">

//           <p className="text-gray-400">Drop Me a Message</p>

//           <div className="flex gap-4 text-xl text-sky-400">
//             <SiLinkedin />
//             <SiWhatsapp />
//             <SiGmail />
//           </div>

//         </div>
//       </footer>

//     </div>
//   );
// }


import React, { useState } from "react";
import {
  SiReact,
  SiExpress,
  SiMysql,
  SiGooglecloud,
  SiDocker,
  SiWhatsapp,
  SiLinkedin,
  SiNodedotjs,
  SiAmazon,
  SiGmail,
  SiGit
} from "react-icons/si";
import Balaji from "../assets/BalajiCoatSuit (1).jpg";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const technologies = [
    { name: "React.js", icon: <SiReact /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "GitHub", icon: <SiGit /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "AWS", icon: <SiAmazon /> },
  ];

  return (
    <div className="bg-[#0b1326] text-white font-[Poppins] overflow-x-hidden">
      {/* NAVBAR */}
      <div className="w-full bg-[#0b1326]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-400">
            Balaji P
          </h1>

          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-4 lg:gap-6 text-xs lg:text-sm text-gray-300 flex-wrap  justify-end ">
            <a href="#languageskills" className="hover:text-sky-400 whitespace-nowrap">
              Language Skills
            </a>
            <a href="#organizationalprojects" className="hover:text-sky-400 whitespace-nowrap">
              Organizational Projects
            </a>
            <a href="#capstoneprojects" className="hover:text-sky-400 whitespace-nowrap">
              Capstone Projects
            </a>
            <a href="#contact" className="hover:text-sky-400 whitespace-nowrap">
              Contact
            </a>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden px-4 sm:px-6 pb-4 text-gray-300 space-y-3 text-sm text-center">
            <a href="#languageskills" className="block">Language Skills</a>
            <a href="#organizationalprojects" className="block">Organizational Projects</a>
            <a href="#capstoneprojects" className="block">Capstone Projects</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
        
      </div>

      {/* OVERVIEW */}
     



      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">

  {/* Title */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400">
    Personal Overview
  </h2>

  <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">

    {/* IMAGE (mobile first) */}
    <div className="relative flex-shrink-0 order-1 md:order-2">

      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-3xl scale-110"></div>

      <div className="relative p-2 rounded-full border border-sky-400/40 bg-white/5 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src={Balaji}
          alt="Balaji"
          className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover"
        />
      </div>
    </div>

    {/* CONTENT (below image on mobile) */}
    <div className="flex-1 relative order-2 md:order-1">

      {/* Accent glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/10 to-transparent blur-2xl rounded-3xl"></div>

      <div className="relative bg-white/5 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
          I’m <span className="text-white font-semibold">Balaji P</span>, a passionate 
          <span className="text-sky-400 font-medium"> Full Stack Developer</span> specializing in building scalable, high-performance web applications using 
          <span className="text-white font-medium"> React.js, Express.js, and MySQL</span>, and deploying them securely on 
          <span className="text-white font-medium"> AWS and GCP</span>.
        </p>

        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed text-left">
          Skilled in designing and implementing role-based access systems, API development, and production-grade cloud infrastructure.
        </p>

        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed text-left">
          Experienced in configuring <span className="text-white font-medium">VPCs, Load Balancers, Private Subnets, and RDS</span>, optimizing cloud cost and ensuring secure, reliable application delivery.
        </p>

      </div>
    </div>

  </div>
</section>

      {/* CAREER */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-white/5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-sky-400 mb-8 sm:mb-10">
          Career Journey
        </h2>

        <div className="max-w-6xl mx-auto relative border-l border-sky-500/40 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {/* Job 1 */}
          <div className="relative">
            <span className="absolute -left-[8px] sm:-left-[10px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-sky-400 rounded-full shadow-lg"></span>

            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg sm:text-xl text-sky-400 font-semibold">
                Junior Web Developer
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                September 2024 to Present | Datasolve Analytics
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                110, Manickam Lane, Anna Salai, Guindy, Chennai - 600 032
              </p>

              <ul className="text-gray-300 mt-4 space-y-2 text-xs sm:text-sm list-disc list-inside">
                <li>Contributed to the development of an internal web application aimed at streamlining company operations and enhancing team productivity.</li>
                <li>Collaborated with cross-functional teams to design, develop, and deploy scalable web solutions tailored for internal use.</li>
                <li>Utilized modern technologies such as React.js, Express.js, and MySQL to build dynamic interfaces and efficient backend services.</li>
                <li>Ensured smooth deployment and performance optimization on Google Cloud Platform (GCP) using Docker and Compute Engine.</li>
                <li>Maintained code quality using version control (Git) and followed iterative development practices for efficient delivery.</li>
              </ul>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative">
            <span className="absolute -left-[8px] sm:-left-[10px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-sky-400 rounded-full shadow-lg"></span>

            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg sm:text-xl text-sky-400 font-semibold">
                MCA Final Year Internship Trainee
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                January 2024 to April 2024 | eFloz IT Services
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                B58/1, 2nd Cross, NGO A Colony, Palayamkottai, Tirunelveli, Tamil Nadu, India - 627007
              </p>

              <ul className="text-gray-300 mt-4 space-y-2 text-xs sm:text-sm list-disc list-inside">
                <li>I developed and maintained RESTful APIs using Express.js, facilitating efficient communication between the front-end and back-end systems.</li>
                <li>Implemented front-end components and user interfaces using React.js, enhancing user experience and interactivity.</li>
                <li>Utilized MongoDB to design and manage databases, ensuring optimal data storage and retrieval for web applications.</li>
                <li>Ensured high code quality through version control (Git) and adopted iterative development for timely delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="languageskills" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400 text-center mb-8 sm:mb-10">
          Language Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition duration-300"
            >
              <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="text-3xl sm:text-4xl text-sky-400 group-hover:scale-110 transition">
                  {tech.icon}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-medium break-words">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="organizationalprojects" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400 text-center mb-8 sm:mb-10">
          Organizational Projects
        </h2>

        <div className="space-y-8 sm:space-y-10">
          {/* Project 1 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-sky-500/10 rounded-full blur-2xl"></div>

              <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-5 sm:mb-6">
                Refsolve App
              </h3>

              <ul className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm text-justify list-disc list-inside">
                <li>
                  Developed a role-based medical web app using React.js, Express.js, and MySQL with advanced search, user/admin access, and hierarchical data grouping.
                </li>
                <li>
                  Implemented optimized REST APIs with secure authentication and improved response time for faster data retrieval.
                </li>
                <li>
                  Deployed via Docker on GCP Compute Engine with data protection controls (cut/copy/paste disabled) for secure, scalable delivery.
                </li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-sky-500/10 rounded-full blur-2xl"></div>

              <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-5 sm:mb-6">
                Trove App
              </h3>

              <ul className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm text-justify list-disc list-inside">
                <li>
                  Developed a responsive web application using React for managing medical-related data.
                </li>
                <li>
                  Implemented Excel-based search where users upload Excel files, which are parsed and filtered to match records in a MySQL database; results are fetched via Express.js APIs and displayed in a dynamic table.
                </li>
                <li>
                  Built keyword search functionality where user queries are matched against the database and results are retrieved through Express.js APIs and displayed in a structured table format.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Achievements */}
      <section id="achievements" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-[#151c2e] text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-sky-400 mb-10 sm:mb-12">
          Professional Achievements
        </h2>

        <div className="max-w-5xl mx-auto relative border-l-2 border-sky-400/40 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          <div className="relative bg-[#222b3d] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="absolute -left-[34px] sm:-left-[42px] top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-sky-400 rounded-full"></div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              <span className="font-semibold text-white">
                Awarded Best Performer of the Month (October 2025) for
                outstanding contribution to project deliverables.
              </span>
            </p>
          </div>

          <div className="relative bg-[#222b3d] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="absolute -left-[34px] sm:-left-[42px] top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-sky-400 rounded-full"></div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              <span className="font-semibold text-white">
                Optimized Google Cloud Platform (GCP) Compute Engine costs,
                reducing monthly infrastructure expenses and improving
                efficiency
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CAPSTONE PROJECTS */}
      <section id="capstoneprojects" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-sky-400 mb-10 sm:mb-12">
          Capstone Projects
        </h2>

        <div className="space-y-8 sm:space-y-10">
          {/* Project 1 */}
          <a
            href="https://movieapp-qptd.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition"
          >
            <div className="p-5 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-3 group-hover:translate-x-1 transition">
                MovieApp
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-justify mb-5 sm:mb-6">
                Built a movie app using React.js and integrated the TMDb API to display real-time movie data
                with a clean, responsive interface.
              </p>

              <ul className="text-gray-300 text-xs sm:text-sm space-y-3 list-disc list-inside mb-5 sm:mb-6">
                <li>
                  Built a responsive Movie Application using <strong>React.js</strong> with reusable component-based architecture.
                </li>
                <li>
                  Integrated <strong>TMDb API</strong> to fetch real-time movie data such as trending, popular, and search results.
                </li>
                <li>
                  Implemented <strong>React Hooks (useState, useEffect)</strong> for efficient state management and API handling.
                </li>
                <li>
                  Developed dynamic UI components including movie cards, search bar, and detailed movie view pages.
                </li>
                <li>
                  Added search functionality to allow users to quickly find movies by name.
                </li>
                <li>
                  Ensured responsive design across mobile, tablet, and desktop for better user experience.
                </li>
              </ul>

              <div className="text-sky-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Check it Out →
              </div>
            </div>
          </a>

          {/* Project 2 */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-sky-500/20 transition">
            <div className="p-5 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-5 sm:mb-6">
                Three-Tier Web Application Deployment on AWS
              </h3>

              <ul className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm text-justify list-disc list-inside">
                <li>
                  Designed and deployed a production-ready <strong>three-tier architecture</strong> on AWS VPC with 6 subnets (Web, App, DB) across multiple Availability Zones.
                </li>
                <li>
                  Configured Internet Gateway, NAT Gateways, custom Route Tables, and 5 Security Groups following least-privilege principles.
                </li>
                <li>
                  Deployed a Flask backend on private EC2 instances with RDS MySQL in isolated subnets and Apache Web Server on a public EC2.
                </li>
                <li>
                  Configured Application Load Balancers for frontend and backend with health checks, routing, and secure communication.
                </li>
                <li>
                  Achieved full stack connectivity: Web → ALB → App → RDS, validating an enterprise-grade architecture.
                </li>
                <li>
                  Gained hands-on experience in <strong>VPC networking, subnet design, security, Linux server setup</strong>, and <strong>cloud deployment</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Qualification */}
      <section
        id="educationalqualification"
        className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-[#0f172a] text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12 text-sky-400">
          Academic Qualifications
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-3 sm:left-4 top-0 w-[2px] h-full bg-sky-400"></div>

          <div className="space-y-8 sm:space-y-10">
            <div className="relative pl-10 sm:pl-12">
              <div className="absolute left-1 sm:left-2 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-sky-400 rounded-full"></div>

              <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-400">
                  Postgraduate – Master of Computer Applications
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  St. Xavier's College, Palayamkottai – 627002
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  July 2022 – April 2024
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm">
                  CGPA: 7.59
                </p>
              </div>
            </div>

            <div className="relative pl-10 sm:pl-12">
              <div className="absolute left-1 sm:left-2 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-cyan-400 rounded-full"></div>

              <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-400">
                  Undergraduate – B.Sc. Computer Science
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Karpagam Academy of Higher Education
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  June 2019 – April 2022
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm ">
                  CGPA: 8.69
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-4 sm:px-6 lg:px-8 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm sm:text-base">Drop Me a Message</p>

          <div className="flex gap-4 text-xl text-sky-400">
            <SiLinkedin />
            <SiWhatsapp />
            <SiGmail />
          </div>
        </div>
      </footer>
    </div>
  );
}