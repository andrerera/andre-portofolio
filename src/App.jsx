import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, Database, Server, Monitor, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "BTN Project - L2 Application Support",
      company: "PT Swadharma Duta Data",
      period: "May 2025 - Present",
      description: "Leading L2 support operations with focus on system stability and user enablement",
      highlights: [
        "Analyzing escalated tickets with 95% resolution rate",
        "Created comprehensive user guides for new features",
        "Managing Zimbra Email Server administration",
        "SQL operations (DML/DDL) for data validation",
        "POC implementation for IBM Instana monitoring"
      ],
      tech: ["Linux", "SQL", "Zimbra", "IBM Instana", "BMC Remedy"]
    },
    {
      title: "Telkomsel Project - Application Support Developer",
      company: "PT Solusi 247",
      period: "May 2024 - Mar 2025",
      description: "Extended L1 role with automation and team mentorship responsibilities",
      highlights: [
        "Developed Bash scripts for operational automation",
        "Led issue resolution meetings",
        "Mentored new team members on change management",
        "Improved operational efficiency through scripting"
      ],
      tech: ["Bash", "Linux", "Automation", "Mentoring"]
    },
    {
      title: "Telkomsel CIAM & Payment Gateway Support",
      company: "PT Solusi 247",
      period: "Mar 2023 - May 2024",
      description: "Supporting critical applications including CIAM, Payment Gateway, CRM, and Mediation systems",
      highlights: [
        "Maintained 98% SLA adherence for ticket resolution",
        "Managed BMC Remedy incident tracking system",
        "Performed log analysis using Splunk",
        "Executed daily data reprocessing operations",
        "Coordinated with cross-functional teams and vendors"
      ],
      tech: ["SQL", "Splunk", "BMC Remedy", "Tomcat", "Grafana", "DynaTrace"]
    }
  ];

  const skills = [
    {
      category: "System Administration",
      icon: <Server className="w-6 h-6" />,
      items: ["Linux", "Docker", "OpenStack", "Ceph", "Windows Server"]
    },
    {
      category: "Monitoring & Analysis",
      icon: <Monitor className="w-6 h-6" />,
      items: ["Splunk", "Grafana", "DynaTrace", "IBM Instana"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["Oracle SQL", "PostgreSQL", "SQLYog", "DBeaver"]
    },
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      items: ["Bash Scripting", "JavaScript", "Node.js", "SQL (DML/DDL)"]
    }
  ];

  const certificates = [
    { name: "Ceph Cluster Administration", issuer: "Adinusa", year: "2027" },
    { name: "Docker Fundamental", issuer: "Adinusa", year: "2027" },
    { name: "Basic Programming Javascript", issuer: "Dicoding", year: "2028" },
    { name: "Linux System Administrator", issuer: "Adinusa", year: "2026" }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Andre Nur Setyawan
          </div>
          <div className="flex gap-6">
            {['Home', 'Projects', 'Skills', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold">
              AN
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Andre Nur Setyawan
          </h1>
          <p className="text-2xl text-cyan-400 mb-6">Application Support Developer</p>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            2+ years experience in production support, Linux administration, and system monitoring. 
            Passionate about DevOps and System Administration.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <a href="mailto:andrewan653@gmail.com" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="https://github.com/Andrerera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <div className="flex gap-6 justify-center text-slate-400">
            <a href="tel:082136372567" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4" />
              0821-3637-2567
            </a>
            <a href="https://linkedin.com/in/andre-nur-setyawan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-cyan-400">{projects[currentProject].title}</h3>
                  <p className="text-slate-400 mb-1">{projects[currentProject].company}</p>
                  <p className="text-sm text-slate-500">{projects[currentProject].period}</p>
                </div>
                <Briefcase className="w-12 h-12 text-cyan-400" />
              </div>
              <p className="text-lg text-slate-300 mb-6">{projects[currentProject].description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Achievements:</h4>
                <ul className="space-y-2">
                  {projects[currentProject].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[currentProject].tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center mt-8">
                <button onClick={prevProject} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-all duration-300 transform hover:scale-105">
                  ← Previous
                </button>
                <div className="flex items-center gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProject(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentProject ? 'bg-cyan-400 w-8' : 'bg-slate-600'}`}
                    />
                  ))}
                </div>
                <button onClick={nextProject} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-all duration-300 transform hover:scale-105">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-cyan-400">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-cyan-400">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                  <Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-200">{cert.name}</p>
                    <p className="text-sm text-slate-400">{cert.issuer} • Valid until {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm an Application Support Developer with 2+ years of hands-on experience supporting production environments. 
              My expertise spans Linux administration, monitoring tools, ticket management systems, and database operations.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Currently enhancing my skills in Docker, OpenStack, and Ceph while working on complex production systems. 
              I'm passionate about DevOps practices and System Administration, always seeking new challenges to grow both 
              technically and professionally.
            </p>
            <div className="flex items-center gap-3 text-cyan-400 italic">
              <span className="text-2xl">"</span>
              <p className="text-lg">Stay Foolish, Stay Hungry</p>
              <span className="text-2xl">"</span>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-cyan-400">Education</h3>
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-200">Universitas Siber Asia</p>
              <p className="text-slate-400 mb-2">Bachelor Degree in Informatics • GPA: 3.8/4.00</p>
              <p className="text-sm text-slate-500">Oct 2023 - Present</p>
              <p className="text-slate-300 mt-3">
                Pursuing fully online undergraduate program with focus on self-paced learning and hands-on coursework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Andre Nur Setyawan. Built with React & Tailwind CSS</p>
          <p className="text-sm">Available for opportunities in System Administration & DevOps</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;