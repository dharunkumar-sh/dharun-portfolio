import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  Calendar,
  X,
  GraduationCap,
  CircuitBoard,
  BadgeCheck,
  Rocket,
  NotebookPen,
  Sparkles,
  Search,
} from "lucide-react";
import SearchBar from "../components/SearchBar";

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: "Mobile Application Development Internship Certificate",
      issuer: "Skill Vertex",
      date: "October 2024",
      logo: "./certifications/logo1.png",
      verifyUrl: "./certifications/certificate1.jpeg",
      skills: ["Flutter", "Responsive Design", "Dart", "Android Studio"],
    },
    {
      id: 2,
      title: "Gnanatamizh Course Certification",
      issuer: "Sri Muruganar Educational and Charitable Trust",
      date: "June 2024",
      logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
      verifyUrl: "./certifications/certificate2.png",
      skills: ["Tamil", "Poetry", "Literature", "Grammar"],
    },
    {
      id: 3,
      title: "Mobile Application Development Training Certificate",
      issuer: "Skill Vertex",
      date: "September 2024",
      logo: "./certifications/logo1.png",
      verifyUrl: "./certifications/certificate3.png",
      skills: ["Flutter", "Responsive Design", "Dart", "Android Studio"],
    },
    {
      id: 4,
      title: "Flutter Workshop Certificate",
      issuer: "MSEC - Dev Dynasty Club",
      date: "October 2024",
      logo: "./certifications/logo2.png",
      verifyUrl: "./certifications/certificate4.png",
      skills: [
        "Flutter",
        "App Development",
        "Dart",
        "Chatbot",
        "Android Studio",
      ],
    },
    {
      id: 5,
      title: "National Level Technical Symposium - Hackathon",
      issuer: "S.A. Engineering College",
      date: "October 2024",
      logo: "./certifications/logo3.png",
      verifyUrl: "./certifications/certificate5.png",
      skills: ["HTML 5", "CSS 3", "Javascript", "Team Work", "Firebase"],
    },
    {
      id: 6,
      title: "Industrial Visit Certificate",
      issuer: "Redback IT Solutions Private Limited",
      date: "March 2025",
      logo: "./certifications/logo4.png",
      verifyUrl: "./certifications/certificate6.png",
      skills: ["Artificial Intelligence", "Cyber Security", "Team Work"],
    },
    {
      id: 7,
      title: "Building RAG Apps Using MongoDB Certificate",
      issuer: "MongoDB",
      date: "June 2025",
      logo: "./certifications/logo5.png",
      verifyUrl: "./certifications/certificate7.png",
      skills: ["Python", "RAG", "Database"],
    },
    {
      id: 8,
      title: "Internship Completion Certificate",
      issuer: "Tripletsoft LLC",
      date: "July 2025",
      logo: "./certifications/logo6.png",
      verifyUrl: "./certifications/certificate8.png",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "LocalStorage"],
    },
    {
      id: 9,
      title: "Web Development Hackathon",
      issuer: "Tutedude Private Limited",
      date: "July 2025",
      logo: "./certifications/logo7.png",
      verifyUrl: "./certifications/certificate9.jpg",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "PostgreSQL"],
    },
    {
      id: 10,
      title: "Introduction to Prompt Engineering",
      issuer: "Simplilearn | SkillUp",
      date: "August 2025",
      logo: "./certifications/logo8.png",
      verifyUrl: "./certifications/certificate10.jpg",
      skills: [
        "Python",
        "Creative Thinking",
        "Prompt Engineering",
        "Critical Thinking",
      ],
    },
    {
      id: 11,
      title: "Internship Certificate",
      issuer: "Tripletsoft LLC",
      date: "July 2025",
      logo: "./certifications/logo6.png",
      verifyUrl: "./certifications/certificate11.jpg",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "LocalStorage"],
    },
    {
      id: 12,
      title: "AOTS–JEC Programme Certificate",
      issuer:
        "Association for Overseas Technical Cooperation and Sustainable Partnerships (AOTS)",
      date: "June 2025",
      logo: "./certifications/logo9.png",
      verifyUrl: "./certifications/certificate12.jpg",
      skills: [
        "Problem-Solving Skills",
        "Leadership",
        "Marketing Stratergies",
        "Critical Thinking",
      ],
    },
    {
      id: 13,
      title: "Frontend Developer (React) Certificate",
      issuer: "HackerRank",
      date: "August 2025",
      logo: "./certifications/logo10.png",
      verifyUrl: "./certifications/certificate13.jpg",
      skills: [
        "React.js",
        "Frontend Development",
        "JavaScript",
        "Problem-Solving",
      ],
    },
    {
      id: 14,
      title: "REST API (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "September 2025",
      logo: "./certifications/logo10.png",
      verifyUrl: "./certifications/certificate14.jpg",
      skills: [
        "REST API",
        "Backend Development",
        "API Design",
        "Problem-Solving",
      ],
    },
    {
      id: 15,
      title: "CSS (Basic) Certificate",
      issuer: "HackerRank",
      date: "September 2025",
      logo: "./certifications/logo10.png",
      verifyUrl: "./certifications/certificate15.jpg",
      skills: [
        "CSS",
        "Frontend Development",
        "Web Design",
        "Responsive Layouts",
      ],
    },
    {
      id: 16,
      title: "Foundation: Introduction to LangGraph",
      issuer: "LangChain Academy",
      date: "October 2025",
      logo: "./certifications/logo11.png",
      verifyUrl: "./certifications/certificate16.jpg",
      skills: ["LangGraph", "NLP", "LLM Models"],
    },
    {
      id: 17,
      title: "AI in Education with Gemini",
      issuer: "Gemini for Education",
      date: "December 2025",
      logo: "./certifications/logo12.png",
      verifyUrl: "./certifications/certificate17.png",
      skills: ["AI in Education", "Gemini AI", "LLM Models"],
    },
    {
      id: 18,
      title: "Critical Thinking in the AI Era",
      issuer: "HP LIFE & HP Foundation",
      date: "December 2025",
      logo: "./certifications/logo13.png",
      verifyUrl: "./certifications/certificate18.jpg",
      skills: [
        "Critical Thinking",
        "Decision-Making",
        "AI Content Analysis",
        "Bias Mitigation",
        "Fact-Checking",
      ],
    },
    {
      id: 19,
      title: "Introduction to AWS Certification",
      issuer: "Amazon Web Services",
      date: "December 2025",
      logo: "./certifications/logo14.png",
      verifyUrl: "./certifications/certificate19.jpg",
      skills: ["AWS Cloud", "Cloud Computing", "EC2", "S3", "IAM"],
    },
    {
      id: 20,
      title: "Frontend Web Development Certificate",
      issuer: "Skill India Digital Hub",
      date: "January 2026",
      logo: "./certifications/logo15.png",
      verifyUrl: "./certifications/certificate20.png",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
    },
  ];

  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[0] | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter certifications based on search
  const filteredCertifications = certifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesSearch;
  });

  const openModal = (cert: (typeof certifications)[0]) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* HERO */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Professional Achievements
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my professional growth through certifications,
              courses, and technical achievements
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-16"
          >
            {[
              {
                label: "Total Certifications",
                value: "18+",
                icon: BadgeCheck,
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                label: "Hackathons",
                value: "7",
                icon: CircuitBoard,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                label: "Internships",
                value: "3",
                icon: GraduationCap,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                label: "Courses",
                value: "3+",
                icon: NotebookPen,
                gradient: "from-orange-500 to-red-600",
              },
              {
                label: "Deployed Projects",
                value: "10+",
                icon: Rocket,
                gradient: "from-violet-500 to-purple-600",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
                <div className="text-center p-5 lg:p-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search Bar */}
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search certifications by title, issuer, or skill..."
            scrollTargetId="certifications-grid"
            gradientFrom="cyan-500"
            gradientTo="violet-500"
            iconColor="cyan-400"
            focusBorderColor="focus:border-cyan-500/50"
            focusRingColor="focus:ring-cyan-500/20"
          />
        </div>
      </section>

      {/* CERT CARDS - Bento Grid Style */}
      <section id="certifications-grid" className="pt-16 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className="group relative cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300">
                  {/* Content */}
                  <div className="relative p-6 lg:p-7">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                        <div className="relative w-14 h-14 rounded-xl bg-gray-900 border border-gray-700 overflow-hidden">
                          <img
                            src={cert.logo}
                            alt={cert.issuer}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium mt-1 truncate">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/60 border border-gray-700/50 mb-5">
                      <Calendar size={14} className="text-violet-400" />
                      <span className="text-sm text-gray-300">{cert.date}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300 group-hover:border-cyan-400/40 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="text-xs px-3 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 lg:py-24"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
                No certifications found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 pt-20 pb-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gray-700/50 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white text-lg font-semibold line-clamp-1">
                      {selectedCert.title}
                    </h2>
                    <p className="text-cyan-400 text-sm">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Certificate Image */}
              <div className="flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 p-6 overflow-auto">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  src={selectedCert.verifyUrl}
                  alt="Certificate"
                  loading="lazy"
                  className="max-w-full max-h-[65vh] rounded-xl shadow-2xl shadow-black/50 object-contain border border-gray-700/30"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationsPage;
