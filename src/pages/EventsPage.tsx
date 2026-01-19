import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  Trophy,
  Search,
  Sparkles,
  LayoutGrid,
  Star,
  Timer,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import SearchBar from "../components/SearchBar";

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      title: "Hackintym'25",
      type: "hackathon",
      role: "Participant",
      date: "April 2025",
      location: "Meenakshi Sundararajan Engineering College",
      description:
        "Led a team of 4 developers to build an AI-powered resume analyzer that streamlines candidate screening with intelligent skill extraction and job matching.",
      achievement: "Participated",
      image: "./events/event1.webp",
      technologies: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Python (Flask)",
        "Node.js",
        "NLP",
        "Gemini LLM",
        "LocalStorage",
        "Vercel",
      ],
      duration: "30 hours",
      featured: false,
    },
    {
      id: 2,
      title: "Flutter Workshop",
      type: "workshop",
      role: "Participant",
      date: "October 2024",
      location: "Meenakshi Sundararajan Engineering College",
      description:
        "Attended a hands-on 2-day Flutter workshop focused on cross-platform mobile app development using Dart and Gemini LLM integrations.",
      achievement: "Participated",
      image: "./events/event2.webp",
      technologies: ["Flutter", "Dart", "Gemini LLM"],
      duration: "2 days",
      featured: false,
    },
    {
      id: 3,
      title: "Game Fest",
      type: "Club Event",
      role: "Participant",
      date: "November 2024",
      location: "Meenakshi Sundararajan Engineering College",
      description:
        "Participated in a high-energy Game Fest featuring LAN tournaments, game dev showcases, and multiplayer strategy battles.",
      achievement: "Participated",
      image: "./events/event3.webp",
      technologies: [
        "Gaming",
        "Multiplayer Systems",
        "Game Development",
        "UI / UX Design",
      ],
      duration: "1 day",
      featured: false,
    },
    {
      id: 4,
      title: "Nakshathra 2k24 - Technical Symposium",
      type: "hackathon",
      role: "Winner",
      date: "October 2024",
      location: "S.A. Engineering College",
      description:
        "Developed a responsive time management web application to help users schedule tasks, track productivity, and visualize daily routines.",
      achievement: "Top 3 Finalist",
      image: "./events/event4.webp",
      technologies: ["HTML 5", "CSS 3", "Javascript", "Firebase"],
      prize: "₹500",
      duration: "48 hours",
      featured: true,
    },
    {
      id: 5,
      title: "Bolt Hack",
      type: "Club Event",
      role: "Participant",
      date: "February 2025",
      location: "Meenakshi Sundararajan Engineering College",
      description:
        "Designed a functional college website using the power of Bolt AI, leveraging advanced prompting techniques to streamline ideation, layout structuring, and content generation during a hands-on technical event.",
      achievement: "Participated",
      image: "./events/event5.webp",
      technologies: [
        "Bolt AI",
        "Prompt Engineering",
        "Web Design",
        "React",
        "Typescript",
      ],
      duration: "1 day",
      featured: false,
    },
    {
      id: 6,
      title: "Paper Presentation",
      type: "competition",
      role: "Participant",
      date: "April 2025",
      location: "Madras Institute of Technology",
      description:
        "Presented a technical paper on real-world applications of Artificial Intelligence in modern education systems. Gained insights from peer presentations and expert feedback.",
      achievement: "Participated",
      image: "./events/event6.webp",
      technologies: [
        "AI",
        "Research Writing",
        "Communication",
        "Presentation Skills",
      ],
      duration: "4 hours",
      featured: false,
    },
    {
      id: 7,
      title: "Code Quest",
      type: "competition",
      role: "Participant",
      date: "April 2025",
      location: "Madras Institute of Technology",
      description:
        "Tackled a series of challenging algorithmic problems using C, C++, Java, and Python. Demonstrated versatility across programming paradigms and optimized solutions under time constraints.",
      achievement: "Participated",
      image: "./events/event7.webp",
      technologies: ["C", "C++", "Java", "Python", "Problem Solving"],
      duration: "3 hours",
      featured: false,
    },
    {
      id: 8,
      title: "Hackintym'24",
      type: "hackathon",
      role: "Participant",
      date: "April 2025",
      location: "Meenakshi Sundararajan Engineering College",
      description:
        "Led a team of 4 developers to create a collaborative e-book sharing platform that enables users to upload, discover, and exchange digital books securely and efficiently.",
      achievement: "Participated",
      image: "./events/event8.webp",
      technologies: [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      duration: "30 hours",
      featured: false,
    },
    {
      id: 9,
      title: "Hack Hustle",
      type: "hackathon",
      role: "Participant",
      date: "November 2024",
      location: "Saveetha Engineering College",
      description:
        "Participated as a team of 4 to develop an AI-powered tool that automates the generation of precise Boolean queries for the healthcare domain. The system enhances medical database searches, aiding research, diagnostics, and clinical decision-making through intelligent NLP and contextual understanding.",
      achievement: "Participated",
      image: "./events/event9.webp",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Python (Flask)",
        "Streamlit",
        "NLP",
        "Web Scrapping",
      ],
      duration: "24 hours",
      featured: false,
    },
    {
      id: 10,
      title: "Google Cloud Agentic AI Hackathon",
      type: "hackathon",
      role: "Participant",
      date: "July 2025",
      location: "Bangalore International Exhibition Centre",
      description:
        "Collaborated in a team of five to design and develop an AI-driven farmer-friendly platform enabling farmers to sell their produce directly to consumers at their chosen prices. The solution incorporated AI-powered price recommendations, demand forecasting, and automated product descriptions to empower farmers, eliminate middlemen, and ensure fair trade. The system leveraged NLP and contextual analysis to optimize transactions and connect rural producers with urban buyers seamlessly.",
      achievement: "Participated",
      image: "./events/event10.webp",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      duration: "24 hours",
      featured: true,
    },
    {
      id: 11,
      title: "Tutedude's Web Development Hackathon 1.0",
      type: "hackathon",
      role: "Participant",
      date: "July 2025",
      location: "Online Mode",
      description:
        "Worked in a team of five to develop a web-based platform addressing the challenges street food vendors face in sourcing raw materials from trusted and affordable suppliers. The solution focused on building a verified vendor network, enabling bulk purchasing at competitive rates, and integrating AI-driven supplier recommendations based on price trends, quality ratings, and location proximity. Through real-world interviews and market research, the platform was tailored to streamline the supply chain, foster trust, and reduce operational costs for small-scale food entrepreneurs.",
      achievement: "Participated",
      image: "./events/event11.webp",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      duration: "48 hours",
      featured: false,
    },
    {
      id: 12,
      title: "Diamond Docs (Paper Presentation)",
      type: "competition",
      role: "Participant",
      date: "August 2025",
      location: "Offline Mode",
      description:
        "Presented a paper as part of a team of three, proposing a machine learning–based approach for predicting customer personality traits. The work explored models such as Recurrent Neural Networks (RNN) and Random Forest to analyze customer data, aiming to improve personalization, targeted marketing, and decision-making in businesses.",
      achievement: "Participated",
      image: "./events/event12.webp",
      technologies: [
        "Machine Learning",
        "RNN",
        "Random Forest",
        "Data Analysis",
      ],
      duration: "2 hours",
      featured: false,
    },
    {
      id: 13,
      title: "Crafting the Interface (UI/UX Design)",
      type: "competition",
      role: "Participant",
      date: "August 2025",
      location: "Offline Mode",
      description:
        "Worked as part of a team of two to design an entertainment-focused mobile application prototype using Figma. The project emphasized user-friendly navigation, engaging visual design, and usability principles to deliver a seamless and enjoyable user experience.",
      achievement: "Participated",
      image: "./events/event12.webp",
      technologies: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
      duration: "1 hour 45 minutes",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Events", icon: LayoutGrid },
    { id: "hackathon", label: "Hackathons", icon: Trophy },
    { id: "Club Event", label: "Club Events", icon: Briefcase },
    { id: "workshop", label: "Workshops", icon: GraduationCap },
    { id: "competition", label: "Competitions", icon: Award },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.type === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Participant":
        return "from-indigo-500 to-purple-600";
      case "Co-Ordinator":
        return "from-sky-500 to-blue-600";
      case "Winner":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-slate-500 to-gray-600";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
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

  const stats = [
    {
      label: "Events Attended",
      value: "15+",
      icon: Calendar,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      label: "Hackathons Won",
      value: "1",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      label: "Total Events",
      value: "13+",
      icon: Award,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      label: "Prize Money Won",
      value: "₹500",
      icon: Star,
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Experiences & Achievements
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                Events & Competitions
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Participating in hackathons, conferences, and tech events to grow
              and learn
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
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
            placeholder="Search events by name or technology..."
            scrollTargetId="events-grid"
            gradientFrom="cyan-500"
            gradientTo="violet-500"
            iconColor="cyan-400"
            focusBorderColor="focus:border-cyan-500/50"
            focusRingColor="focus:ring-cyan-500/20"
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                type="button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(category.id);
                }}
                className={`flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-800/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-cyan-500/30"
                }`}
              >
                <category.icon size={18} />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events-grid" className="pt-8 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300">
                  {/* Winner Badge */}
                  {event.role === "Winner" && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                      <Trophy size={12} className="fill-current" />
                      Winner
                    </div>
                  )}

                  {/* Featured Badge */}
                  {event.featured && event.role !== "Winner" && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500/90 to-violet-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                      <Star size={12} className="fill-current" />
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 lg:h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                    {/* Type Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-xs font-medium text-cyan-400 border border-cyan-500/30">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>

                    {/* Role Badge */}
                    <div
                      className={`absolute bottom-4 right-4 px-3 py-1 bg-gradient-to-r ${getRoleColor(
                        event.role,
                      )} rounded-lg text-xs font-medium text-white`}
                    >
                      {event.role}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-1">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {event.date}
                      </div>
                      {event.duration && (
                        <div className="flex items-center gap-1">
                          <Timer size={14} />
                          {event.duration}
                        </div>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300 group-hover:border-cyan-400/40 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {event.technologies.length > 3 && (
                        <span className="text-xs px-3 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400">
                          +{event.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 lg:py-24"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
                No events found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
