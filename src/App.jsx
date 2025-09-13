import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCode,
  FaTrophy,
  FaUser,
  FaBriefcase,
  FaComments,
  FaInstagram
} from "react-icons/fa";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Streamora – Video Content Platform",
      description:
        "Built a production-ready backend for a YouTube-like platform using Node.js, Express.js, and MongoDB, enabling secure JWT authentication, video uploads, playlist management, and subscription tracking. Designed optimized MongoDB schemas and aggregation pipelines to deliver subscriber counts and channel stats in a single query, improving API efficiency. Integrated Multer and Cloudinary for fast, cloud-based media delivery.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST",
        "Cloudinary",
        "JWT",
      ],
      github: "https://github.com/mhjnanshit/streamora-backend",
      demo: "https://demo-link.com",
      image:
        "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg",
    },
    {
      title: "LNMIIT Centre for Entrepreneurship (LCE) Platform",
      description:
        "Developed and deployed LNMIIT’s official E-Cell platform using React.js, Tailwind CSS, Node.js, and MongoDB, enabling dynamic event management and alumni engagement for 100+ users. Built secure, role-based REST APIs with JWT authentication and optimized MongoDB schemas for fast, scalable data handling.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "REST",
        "JWT",
        "Encryption",
      ],
      github: "https://github.com/mhjnanshit/LCE-app",
      demo: "https://lceapp.vercel.app",
      image:
        "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
    },
    {
      title: "Currency Converter",
      description:
        "Built a responsive currency conversion platform using React.js and Tailwind CSS, enabling real-time exchange rate calculations across multiple currencies. Integrated a third-party currency API for accurate and up-to-date rates, providing a smooth and intuitive user experience.",
      technologies: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/mhjnanshit/currency-converter",
      demo: "https://currency-converter-84zn.vercel.app",
      image: "https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg",
    },
    {
      title: "Weather Forecast Web App",
      description:
        "Developed a responsive weather forecasting application using HTML, CSS, and JavaScript, integrating the OpenWeatherMap API for real-time data. Enabled city-wise search with dynamic UI updates, error handling, and an intuitive user experience.",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/mhjnanshit/Weather-app",
      demo: "https://weather-app-gamma-eight-23.vercel.app",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    },
  ];

  const skills = [
    "JavaScript",
    "C++",
    "C",
    "Java",
    "Node.js",
    "Express.js",
    "React",
    "Redux",
    "MongoDB",
    "Tailwind",
    "MySQL",
    "Data Structures",
    "Algorithms",
    "OOPs",
    "Git",
    "REST APIs",
    "Operating Systems",
    "Computer Networking",
    "Databases",
    "Image Processing",
    "Compilers",
    "Linux",
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/anshitmahajan0/",
      icon: FaCode,
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/mahajanaep3x/",
      icon: FaTrophy,
    },
    {
      name: "Code360",
      url: "https://www.naukri.com/code360/profile/7f889caf-5de8-4b12-9d54-58c80328acae",
      icon: FaCode,
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/mahajananshit0",
      icon: FaTrophy,
    },
  ];

  const Button = ({
    children,
    onClick,
    variant = "primary",
    className = "",
    ...props
  }) => {
    const baseClasses =
      "px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
      outline:
        "border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      secondary:
        "bg-gray-800 hover:bg-gray-700 text-gray-200 focus:ring-gray-500",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  const Badge = ({ children, className = "" }) => (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 ${className}`}
    >
      {children}
    </span>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-lg shadow-2xl ${className}`}
    >
      {children}
    </div>
  );

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className="relative max-w-4xl max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
          >
            <FaTimes />
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Anshit Mahajan</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-blue-400">Anshit Mahajan</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                  Software Engineer & Competitive Programmer
                </p>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Full-stack engineer and strong problem solver with expertise
                  in building end-to-end web applications and tackling complex
                  algorithmic challenges. Experienced in modern frontend and
                  backend technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/anshitmahajan77/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/mhjnanshit"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/mahajan_.anshit/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-gray-800 p-2">
                  <img
                    src="/pa.jpeg"
                    alt="Anshit Mahajan"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a passionate backend engineer with expertise in building
              scalable systems and a strong background in competitive
              programming.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaUser className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Background
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I craft seamless digital experiences from pixel to database,
                    blending clean code with clear logic. Driven by curiosity, I
                    turn complex problems into elegant, functional solutions
                    that work as beautifully under the hood as they look on the
                    screen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaBriefcase className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Current Focus
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Currently focused on building impactful full-stack
                    applications and refining my skills in modern web
                    technologies. I enjoy turning ideas into functional products
                    and constantly explore new tools, frameworks, and best
                    practices to level up my craft.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-6 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">
                    mahajananshit0@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+91 82830 52378</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Jaipur, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="hover:bg-gray-700 hover:border-gray-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Coding Profiles */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Competitive Programming
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {codingProfiles.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      className="flex items-center space-x-3 p-4 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors"
                    >
                      <profile.icon className="h-5 w-5 text-blue-400" />
                      <span className="font-medium text-gray-200">
                        {profile.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my 
              engineering skills and technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="p-0">
                  <div
                    className="relative overflow-hidden rounded-t-lg cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-2">
                          <FaExternalLinkAlt className="h-5 w-5 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:mahajananshit0@gmail.com"
                      className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors group"
                    >
                      <FaEnvelope className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <div className="text-gray-300 group-hover:text-blue-400">
                          mahajananshit0@gmail.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+918283052378"
                      className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors group"
                    >
                      <FaPhone className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">Phone</div>
                        <div className="text-gray-300 group-hover:text-blue-400">
                          +91 82830 52378
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg">
                      <FaMapMarkerAlt className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">Location</div>
                        <div className="text-gray-300">Jaipur, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Social Media
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/anshitmahajan77/"
                      className="p-3 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors"
                    >
                      <FaLinkedin className="h-6 w-6 text-blue-400" />
                    </a>
                    <a
                      href="https://github.com/mhjnanshit"
                      className="p-3 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="h-6 w-6 text-blue-400" />
                    </a>
                    <a
                      href="https://www.instagram.com/mahajan_.anshit/"
                      className="p-3 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-colors"
                    >
                      <FaInstagram className="h-6 w-6 text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Quick Message
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full flex items-center justify-center">
                    <FaComments className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Anshit Mahajan
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Software Engineer passionate about building scalable systems and
                solving complex problems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-gray-200 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>mahajananshit0@email.com</div>
                <div>+91 82830 52378</div>
                <div>Jaipur, India</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Anshit Mahajan. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Project preview"
            className="w-full h-auto rounded-lg max-h-screen object-contain"
          />
        )}
      </Modal>
    </div>
  );
};

export default App;
