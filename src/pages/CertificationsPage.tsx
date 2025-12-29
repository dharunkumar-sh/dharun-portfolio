import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  X,
  GraduationCap,
  CircuitBoard,
  BadgeCheck,
  Rocket,
  NotebookPen,
} from "lucide-react";

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
      level: "Internship",
      score: "75%",
    },
    {
      id: 2,
      title: "Gnanatamizh Course Certification",
      issuer: "Sri Muruganar Educational and Charitable Trust",
      date: "June 2024",
      logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
      verifyUrl: "./certifications/certificate2.png",
      skills: ["Tamil", "Poetry", "Literature", "Grammar"],
      level: "External",
      score: "65%",
    },
    {
      id: 3,
      title: "Mobile Application Development Training Certificate",
      issuer: "Skill Vertex",
      date: "September 2024",
      logo: "./certifications/logo1.png",
      verifyUrl: "./certifications/certificate3.png",
      skills: ["Flutter", "Responsive Design", "Dart", "Android Studio"],
      level: "Internship",
      score: "75%",
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
      level: "Workshop",
      score: "100%",
    },
    {
      id: 5,
      title: "National Level Technical Symposium - Hackathon",
      issuer: "S.A. Engineering College",
      date: "October 2024",
      logo: "./certifications/logo3.png",
      verifyUrl: "./certifications/certificate5.png",
      skills: ["HTML 5", "CSS 3", "Javascript", "Team Work", "Firebase"],
      level: "Hackathon",
      score: "87%",
    },
    {
      id: 6,
      title: "Industrial Visit Certificate",
      issuer: "Redback IT Solutions Private Limited",
      date: "March 2025",
      logo: "./certifications/logo4.png",
      verifyUrl: "./certifications/certificate6.png",
      skills: ["Artificial Intelligence", "Cyber Security", "Team Work"],
      level: "Industrial Visit",
      score: "96%",
    },
    {
      id: 7,
      title: "Building RAG Apps Using MongoDB Certificate",
      issuer: "MongoDB",
      date: "June 2025",
      logo: "./certifications/logo5.png",
      verifyUrl: "./certifications/certificate7.png",
      skills: ["Python", "RAG", "Database"],
      level: "Course",
      score: "70%",
    },
    {
      id: 8,
      title: "Internship Completion Certificate",
      issuer: "Tripletsoft LLC",
      date: "July 2025",
      logo: "./certifications/logo6.png",
      verifyUrl: "./certifications/certificate8.png",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "LocalStorage"],
      level: "Internship",
      score: "97%",
    },
    {
      id: 9,
      title: "Web Development Hackathon",
      issuer: "Tutedude Private Limited",
      date: "July 2025",
      logo: "./certifications/logo7.png",
      verifyUrl: "./certifications/certificate9.jpg",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "PostgreSQL"],
      level: "Hackathon",
      score: "87%",
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
      level: "Course",
      score: "99%",
    },
    {
      id: 11,
      title: "Internship Certificate",
      issuer: "Tripletsoft LLC",
      date: "July 2025",
      logo: "./certifications/logo6.png",
      verifyUrl: "./certifications/certificate11.jpg",
      skills: ["React.js", "Tailwind CSS", "Rest APIs", "LocalStorage"],
      level: "Course",
      score: "99%",
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
      level: "Course",
      score: "100%",
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
      level: "Course",
      score: "100%",
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
      level: "Course",
      score: "100%",
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
      level: "Course",
      score: "100%",
    },
    {
      id: 16,
      title: "Foundation: Introduction to LangGraph",
      issuer: "LangChain Academy",
      date: "October 2025",
      logo: "./certifications/logo11.png",
      verifyUrl: "./certifications/certificate16.jpg",
      skills: ["LangGraph", "NLP", "LLM Models"],
      level: "Course",
      score: "100%",
    },
    {
      id: 17,
      title: "AI in Education with Gemini",
      issuer: "Gemini for Education",
      date: "December 2025",
      logo: "./certifications/logo12.png",
      verifyUrl: "./certifications/certificate17.png",
      skills: ["AI in Education", "Gemini AI", "LLM Models"],
      level: "Course",
      score: "100%",
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
      level: "Course",
      score: "100%",
    },
  ];

  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[0] | null
  >(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (cert: (typeof certifications)[0]) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Hackathon":
        return "from-purple-700 to-purple-900";
      case "Internship":
        return "from-blue-700 to-blue-900";
      case "Workshop":
        return "from-gray-700 to-gray-900";
      case "Industrial Visit":
        return "from-yellow-700 to-yellow-900";
      case "Course":
        return "from-red-700 to-red-900";
      default:
        return;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-900 text-white relative">
      {/* HERO */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
              Certifications
            </h1>
            <p className="text-xl text-gray-400">
              Professional certifications and achievements in tech
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
          >
            {[
              { label: "Total Certifications", value: "14+", icon: BadgeCheck },
              { label: "Hackathons", value: "7", icon: CircuitBoard },
              { label: "Interships", value: "3", icon: GraduationCap },
              { label: "Courses", value: "3+", icon: NotebookPen },
              { label: "Deployed Projects", value: "10+", icon: Rocket },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 mb-3 mx-auto text-cyan-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CERT CARDS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-md hover:border-cyan-500/50 transition-all"
            >
              {/* Badge + Score */}
              <div
                className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-br ${getLevelColor(
                  cert.level
                )} text-xs font-bold text-white rounded-full`}
              >
                {cert.level}
              </div>
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br ${getLevelColor(
                  cert.level
                )} rounded-full flex items-center justify-center shadow-lg text-xs font-bold text-white`}
              >
                {cert.score}
              </div>

              {/* Content */}
              <div className="flex gap-4 mb-4">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  loading="lazy"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.button
                onClick={() => openModal(cert)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-300 font-medium"
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 mt-20 bg-black/70 backdrop-blur-md flex items-center justify-center px-4 pt-1"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-zinc-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-700"
            >
              {/* Centered Certificate */}
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-3 bg-zinc-800 border-b border-gray-700">
                <h2 className="text-white text-lg font-semibold">
                  {selectedCert.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="bg-red-700 hover:bg-red-600 transition-all p-2 rounded-xl text-white flex items-center justify-center"
                >
                  <X className="w-6 h-6" strokeWidth={3} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="flex justify-center items-center bg-zinc-900 p-5 overflow-auto">
                <img
                  src={selectedCert.verifyUrl}
                  alt="Certificate"
                  loading="lazy"
                  className="max-w-full max-h-[70vh] rounded-lg object-contain"
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
