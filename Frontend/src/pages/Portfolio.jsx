import React, { useState } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGmail,SiExpress, SiMysql, SiGooglecloud, SiDocker,SiWhatsapp,SiLinkedin, SiNodedotjs, SiAmazon } from "react-icons/si";
import Balaji from '../assets/Balajisundar.jfif'
export default function Portfolio() {
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const technologies = [
  
  
    { name: "React.js", icon: <SiReact /> },
    { name: "Express.js", icon: <SiExpress /> },
     { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Google Cloud Compute Engine", icon: <SiGooglecloud /> },
      { name: "Google Cloud App Engine", icon: <SiGooglecloud /> },
    { name: "Docker", icon: <SiDocker /> },
       { name: "AWS", icon: <SiAmazon /> },
  ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://formspree.io/f/your-form-id", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       setStatus("Failed to send message.");
  //     }
  //   } catch (error) {
  //     setStatus("Error sending message.");
  //   }
  // };

  return (
    <div className="">
      {/* Navigation Bar */} 
      <div className="w-full bg-white shadow-md">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800">Balaji P</h1>
      {/* Hamburger Icon - Mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-wrap justify-end space-x-4 lg:space-x-6">
        <a href="#languageskills" className="hover:text-sky-600 transition duration-300">Language Skills</a>
        <a href="#organizationalprojects" className="hover:text-sky-600 transition duration-300">Organizational Projects</a>
        <a href="#capstoneprojects" className="hover:text-sky-600 transition duration-300">Capstone Projects</a>
        <a href="#contact" className="hover:text-sky-600 transition duration-300">Let’s Work Together</a>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}
    >
      <nav className="flex flex-col space-y-2 text-center text-gray-700">
       
        <a href="#languageskills" className="py-2 hover:text-sky-600 transition-colors">Language Skills</a>
        <a href="#organizationalprojects" className="py-2 hover:text-sky-600 transition-colors">Organizational Projects</a>
        <a href="#capstoneprojects" className="py-2 hover:text-sky-600 transition-colors">Capstone Projects</a>
        <a href="#contact" className="py-2 hover:text-sky-600 transition-colors">Let’s Work Together</a>
      </nav>
    </div>
  </nav>
</div>


{/* Overview section */}
    <section id="overview" className="p-8">
  <h2 className="text-2xl font-semibold">Personal Overview</h2>
  <div className="mt-4 flex flex-col-reverse md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 justify-between">
    
    {/* Left Column (Shown second on mobile): About Me Text */}
    <div className="flex-1 text-center md:text-justify">
      <p className="text-lg">
   I’m Balaji P, a passionate Full Stack & Cloud Developer with expertise in building scalable, high-performance web applications using React.js, Express.js, and MySQL, and deploying them securely on AWS and GCP.
   Skilled in designing and implementing role-based access systems, developing APIs, and managing production-level cloud deployments. Experienced in configuring VPCs, Load Balancers, Private Subnets, and RDS, optimizing cloud costs, and ensuring reliable, secure, and efficient application delivery across multiple platforms.
      </p>
    </div>

    {/* Right Column (Shown first on mobile): Profile Picture */}
    <div className="flex-shrink-0">
      <img
        src={Balaji} // Replace with your actual image import or path
        alt="Profile"
        className="rounded-full w-40 h-40 object-cover border-4 border-gray-300 shadow-lg"
      />
    </div>

  </div>
</section>

{/* Career Journey */}
<section id="careerjourney" className="p-8 bg-gray-100">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Career Journey</h2>

  <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    {/* Experience 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-semibold">Junior Web Developer</h3>
      <p className="text-lg text-gray-600">
        <strong>September 2024 to Present | Datasolve Analytics</strong><br />
        110, Manickam Lane, Anna Salai, Guindy, Chennai - 600 032
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
        <li>Contributed to the development of an internal web application aimed at streamlining company operations and enhancing team productivity.</li>
        <li>Collaborated with cross-functional teams to design, develop, and deploy scalable web solutions tailored for internal use.</li>
        <li>Utilized modern technologies such as React.js, Express.js, and MySQL to build dynamic interfaces and efficient backend services.</li>
        <li>Ensured smooth deployment and performance optimization on Google Cloud Platform (GCP) using Docker and Compute Engine.</li>
        <li>Maintained code quality using version control (Git) and followed iterative development practices for efficient delivery.</li>
      </ul>
    </div>

    {/* Experience 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-semibold">MCA Final Year Internship Trainee</h3>
      <p className="text-lg text-gray-600">
        <strong>January 2024 to April 2024 | eFloz IT Services</strong><br />
        B58/1, 2nd Cross,
        NGO A Colony, Palayamkottai,
        Tirunelveli, Tamil Nadu,
        India - 627007
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
        <li>I developed and maintained RESTful APIs using Express.js, facilitating efficient communication between the front-end and back-end systems.</li>
        <li>Implemented front-end components and user interfaces using React.js, enhancing user experience and interactivity.</li>
        <li>Utilized MongoDB to design and manage databases, ensuring optimal data storage and retrieval for web applications.</li>
        <li>Ensured high code quality through version control (Git) and adopted iterative development for timely delivery.</li>
      </ul>
    </div>
  </div>
</section>


      {/* Languages Known Section */}
      <section id="languageskills" className="p-6 sm:p-8 ">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-center">Language Skills</h2>

  {/* Mobile & iPad Grid */}
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
    {technologies.map((tech) => (
      <div key={tech.name} className="flex flex-col items-center bg-gray-100 text-dark p-3 rounded shadow">
        <div className="text-2xl mb-1">{tech.icon}</div>
        <span className="text-sm font-medium text-center">{tech.name}</span>
      </div>
    ))}
  </div>

  {/* Desktop: Animated scroll */}
  <div className="overflow-hidden relative hidden md:block">
    <div className="flex space-x-12 animate-scroll whitespace-nowrap">
      {technologies.map((tech) => (
        <div key={tech.name} className="min-w-fit flex items-center space-x-2 px-4 py-2 bg-gray-100 text-dark rounded shadow">
          <div className="text-xl">{tech.icon}</div>
          <span className="text-lg lg:text-xl font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* Projects Section */}
      <section id="organizationalprojects" className="p-6 sm:p-8 bg-white">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-center">Organizational Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Project Card 1 */}
    <div className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-[#301934]">Refsolve App</h3>
      <ul className="list-disc list-inside text-gray-700 text-justify">
  <li>
    Developed a role-based medical web app using React.js, Express.js, and MySQL with advanced search, user/admin access, and hierarchical data grouping.
  </li>
  <li>
    Deployed via Docker on GCP Compute Engine with data protection controls (cut/copy/paste disabled) for secure, scalable delivery.
  </li>
</ul>
    </div>
    {/* Project Card 2 */}
    <div className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-[#301934]">Trove App</h3>
      <ul className="list-disc list-inside text-gray-700 text-justify">
  <li>
  Developed a responsive web application using React for managing medical-related data. Implemented two core search functionalities:
  </li>
  <li>
  Search with Excel – Users upload Excel files which are parsed and filtered to match records in a MySQL database. Matching data is fetched via Express.js APIs and displayed in a responsive, dynamic table.
  </li>
  <li>
  Keyword Search – Users can search using keywords, which are matched against the database, with results retrieved through Express.js APIs and displayed in a structured table format.
  </li>
</ul>
    </div>
  </div>
</section>

{/* Professional Achievements */}

<section id="educationalqualification" className="p-8 bg-gray-100">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Professional Achievements</h2>

  <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    {/* Experience 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
 
  <p className="text-lg text-gray-600">
    <span className="font-semibold">Awarded Best Performer of the Month (October 2025) for
outstanding contribution to project deliverables.

</span><br />
  
  
  </p>
</div>

    <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
 
  <p className="text-lg text-gray-600">
    <span className="font-semibold">Optimized Google Cloud Platform (GCP) Compute Engine costs,
reducing monthly infrastructure expenses and improving
efficiency

</span><br />
  
  
  </p>

</div>
</div>



    {/* Experience 1 */}




</section>


  {/* capstone projects */}

{/* Capstone Projects */}
<section id="capstoneprojects" className="p-6 sm:p-8 bg-white">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Capstone Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Project 1 */}
    <a
      href="https://movieapp-qptd.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-100 rounded-lg shadow-md p-5 hover:shadow-lg transition block"
    >
      <h3 className="text-lg font-semibold mb-2 text-[#301934]">MovieApp</h3>
      <p className="text-gray-700 mb-4 text-justify">
        Built a movie app using React.js and integrated the TMDb API to display real-time movie data
        with a clean, responsive interface.
      </p>
      <span className="text-dark-600 hover:underline inline-flex items-center gap-1">
        Check it Out
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>

    {/* Project 2 (no link) */}
    <div className="bg-gray-100 rounded-lg shadow-md p-5 transition block">
      <h3 className="text-lg font-semibold mb-2 text-[#301934]">
        Three-Tier Web Application Deployment on AWS
      </h3>
   <ul className="text-gray-700 mb-4 list-disc list-inside">
  <li>Designed and deployed a production-ready <strong>three-tier architecture</strong> on AWS VPC with 6 subnets (Web, App, DB) across multiple Availability Zones.</li>
  <li>Configured Internet Gateway, NAT Gateways, custom Route Tables, and 5 Security Groups following least-privilege principles.</li>
  <li>Deployed a Flask backend on private EC2 instances with RDS MySQL in isolated subnets and Apache Web Server on a public EC2.</li>
  <li>Configured Application Load Balancers for frontend and backend with health checks, routing, and secure communication.</li>
  <li>Achieved full stack connectivity: Web → ALB → App → RDS, validating an enterprise-grade architecture.</li>
  <li>Gained hands-on experience in <strong>VPC networking, subnet design, security, Linux server setup</strong>, and <strong>cloud deployment</strong>.</li>
</ul>

    </div>
  </div>
</section>




{/* Educational Qualification */}

<section id="educationalqualification" className="p-8 bg-gray-100">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Academic Qualifications</h2>

  <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    {/* Experience 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
  <h3 className="text-2xl font-semibold">Postgraduate – Master of Computer Applications</h3>
  <p className="text-lg text-gray-600">
    <span className="font-semibold">St. Xavier's College, Palayamkottai – 627002</span><br />
    <span className="font-medium">July 2022 – April 2024</span><br />
    CGPA: 7.59
  </p>
</div>



        {/* Experience 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
  <h3 className="text-2xl font-semibold">Undergraduate – B.Sc. Computer Science</h3>
  <p className="text-lg text-gray-600">
    <span className="font-semibold">Karpagam Academy of Higher Education</span><br />
    <span className="font-medium">June 2019 – April 2022</span><br />
    CGPA: 8.69
  </p>
</div>
  </div>
</section>









      {/* Get in Touch Section */}
      {/* <section id="contact" className="p-8 bg-gray-100 flex justify-center items-center">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Send Message
      </button>
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  </div>
</section> */}

<footer id="contact" className="bg-gray-800 text-white py-6 mt-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
   
    
    <div className="flex flex-wrap justify-center md:justify-start space-x-3 mt-4 md:mt-0">
      <p>Drop Me a Message</p>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/balajip23/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 mb-2 md:mb-0">
        <SiLinkedin className="w-6 h-6" />
      </a>
      
      {/* WhatsApp */}
      <a href="https://wa.me/6383387454" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 mb-2 md:mb-0">
        <SiWhatsapp className="w-6 h-6" />
      </a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=balajipsundar@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-500 mb-2 md:mb-0"
>
  <SiGmail className="w-6 h-6" />
</a>


    </div>
  </div>
</footer>

    </div>
  );
}
