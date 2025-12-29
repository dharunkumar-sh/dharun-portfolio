import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      image: "./events/event1.png",
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
      participants: 100,
      duration: "30 hours",
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
      image: "./events/event2.png",
      technologies: ["Flutter", "Dart", "Gemini LLM"],
      participants: 45,
      duration: "2 days",
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
      image: "./events/event3.png",
      technologies: [
        "Gaming",
        "Multiplayer Systems",
        "Game Development",
        "UI / UX Design",
      ],
      participants: 40,
      duration: "1 day",
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
      image: "./events/event4.png",
      technologies: ["HTML 5", "CSS 3", "Javascript", "Firebase"],
      participants: 75,
      prize: "₹500",
      duration: "48 hours",
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
      image: "./events/event5.png",
      technologies: [
        "Bolt AI",
        "Prompt Engineering",
        "Web Design",
        "React",
        "Typescript",
      ],
      participants: 35,
      duration: "1 day",
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
      image: "./events/event6.png",
      technologies: [
        "AI",
        "Research Writing",
        "Communication",
        "Presentation Skills",
      ],
      participants: 90,
      duration: "4 hours",
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
      image: "./events/event7.png",
      technologies: ["C", "C++", "Java", "Python", "Problem Solving"],
      participants: 40,
      duration: "3 hours",
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
      image: "./events/event8.png",
      technologies: [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      participants: 100,
      duration: "30 hours",
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
      image: "./events/event9.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Python (Flask)",
        "Streamlit",
        "NLP",
        "Web Scrapping",
      ],
      participants: 150,
      duration: "24 hours",
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
      image: "./events/event10.jpeg",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      participants: 500,
      duration: "24 hours",
    },
    {
      id: 11,
      title: "Tutedude’s Web Development Hackathon 1.0",
      type: "hackathon",
      role: "Participant",
      date: "July 2025",
      location: "Online Mode",
      description:
        "Worked in a team of five to develop a web-based platform addressing the challenges street food vendors face in sourcing raw materials from trusted and affordable suppliers. The solution focused on building a verified vendor network, enabling bulk purchasing at competitive rates, and integrating AI-driven supplier recommendations based on price trends, quality ratings, and location proximity. Through real-world interviews and market research, the platform was tailored to streamline the supply chain, foster trust, and reduce operational costs for small-scale food entrepreneurs.",
      achievement: "Participated",
      image: "./events/event11.png",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      participants: 650,
      duration: "48 hours",
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
      image: "./events/event12.png",
      technologies: [
        "Machine Learning",
        "RNN",
        "Random Forest",
        "Data Analysis",
      ],
      participants: 30,
      duration: "2 hours",
    },
    {
      id: 12,
      title: "Crafting the Interface (UI/UX Design)",
      type: "competition",
      role: "Participant",
      date: "August 2025",
      location: "Offline Mode",
      description:
        "Worked as part of a team of two to design an entertainment-focused mobile application prototype using Figma. The project emphasized user-friendly navigation, engaging visual design, and usability principles to deliver a seamless and enjoyable user experience.",
      achievement: "Participated",
      image: "./events/event12.png",
      technologies: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
      participants: 70,
      duration: "1 hour 45 minutes",
    },
  ];

  const categories = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "hackathon", label: "Hackathons", icon: Trophy },
    { id: "Club Event", label: "Club Events", icon: Users },
    { id: "workshop", label: "Workshops", icon: MapPin },
    { id: "competition", label: "Competitions", icon: Trophy },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.type === selectedCategory);

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Participant":
        return "from-indigo-700 via-purple-600 to-pink-600";
      case "Co-Ordinator":
        return "from-sky-500 via-cyan-500 to-blue-600";
      case "Winner":
        return "from-lime-400 via-emerald-500 to-green-600";
      default:
        return "from-slate-500 via-gray-600 to-neutral-700";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 lg:mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Events & Competitions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto">
              Participating in hackathons, conferences, and tech events to grow
              and learn
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24"
          >
            {[
              { label: "Events Attended", value: "15+", icon: Calendar },
              { label: "Hackathons Won", value: "1", icon: Trophy },
              { label: "Total Participants Met", value: "1000+", icon: Users },
              { label: "Prize Money Won", value: "₹500", icon: Trophy },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3 lg:mb-4 text-cyan-400" />
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-violet-600 via-pink-600 to-purple-700 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                <category.icon size={16} />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {/* Event Image */}
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    {/* Event Type Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>

                    {/* Role Badge */}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${getRoleColor(
                        event.role
                      )} text-white text-sm font-medium rounded-full`}
                    >
                      {event.role}
                    </div>

                    {/* Prize Badge */}
                    {event.prize && (
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                        {event.prize}
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="p-6 lg:p-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-cyan-400 transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        {event.participants}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                      <MapPin size={14} />
                      {event.location}
                    </div>

                    {event.duration && (
                      <div className="text-gray-400 text-sm mb-4">
                        Duration: {event.duration}
                      </div>
                    )}

                    <p className="text-gray-300 mb-4 lg:mb-6 line-clamp-3 text-sm lg:text-base">
                      {event.description}
                    </p>

                    <div className="mb-4 lg:mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-400">
                          {event.achievement}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                      {event.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full text-xs lg:text-sm font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 lg:py-24"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
                No events found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
