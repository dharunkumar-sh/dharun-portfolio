import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Search,
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Gamepad2,
  LayoutGrid,
  X,
  Rocket,
  Star,
  GitFork,
} from "lucide-react";
import SearchBar from "../components/SearchBar";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const projects = [
    {
      id: 1,
      title: "AI-Powered Resume Builder",
      description:
        "Effortlessly Craft a Standout Resume with Our AI-Powered Resume Builder",
      longDescription:
        "AI-powered resume builder that generates personalized, ATS-friendly resumes with Clerk authentication and Strapi CMS integration.",
      image: "/projects/project1.webp",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk Auth",
        "Gemini LLM",
        "Strapi CMS",
        "PostgreSQL",
        "Vercel",
      ],
      category: "web",
      githubUrl: "https://github.com/freebird-prod/ai-resume-builder",
      liveUrl: "https://builderbuddy.vercel.app",
      featured: false,
    },
    {
      id: 2,
      title: "AI-Powered Resume Analyzer",
      description:
        "Smart resume screening tool that extracts skills and analyzes job fit using AI.",
      longDescription:
        "Resume analysis tool using NLP and Gemini LLM to extract skills, evaluate job fit, and suggest suitable roles.",
      image: "/projects/project2.webp",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Python (Flask)",
        "Node.js",
        "NLP (SpaCy)",
        "Gemini LLM",
        "PostgreSQL",
        "Render",
        "Vercel",
      ],
      category: "web",
      githubUrl: "https://github.com/freebird-prod/hire-sense",
      liveUrl: "https://hiresense-ai.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Amaran Fanhub - Fan Website",
      description:
        "A vibrant community portal celebrating actor Amaran's legacy with media, news, and fan interactions.",
      longDescription:
        "Fan website for actor Amaran with media gallery, news updates, forums, polls, and interactive filmography timeline.",
      image: "/projects/project3.webp",
      technologies: [
        "React.js",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
        "Groq LLM",
        "Typescript",
      ],
      category: "entertainment",
      githubUrl: "https://github.com/freebird-prod/amaran-fanhub",
      liveUrl: "https://amaran-fanhub.vercel.app",
      featured: true,
    },
    {
      id: 4,
      title: "Popcorn Path - Movie Finder",
      description:
        "Discover trending movies, browse genres, and track your watchlist with ease.",
      longDescription:
        "Movie discovery platform using TMDB API with genre browsing, search, and watchlist management.",
      image: "/projects/project4.webp",
      technologies: ["React", "Tailwind CSS", "Appwrite", "TMDB API", "Vercel"],
      category: "entertainment",
      githubUrl: "https://github.com/freebird-prod/movie-app",
      liveUrl: "https://popcorn-path.vercel.app",
      featured: true,
    },
    {
      id: 5,
      title: "Torrent Guard - Flood Analyzer & Risk Detection",
      description:
        "Analyze flood risk using coordinates or terrain images with AI-powered insights.",
      longDescription:
        "AI-powered flood risk analyzer using geographic coordinates and terrain imagery for disaster preparedness.",
      image: "/projects/project5.webp",
      technologies: [
        "Next.js",
        "FastAPI",
        "TailwindCSS",
        "Gemini LLM",
        "Render",
        "Vercel",
      ],
      category: "ai",
      githubUrl: "https://github.com/freebird-prod/aqua-pulse",
      liveUrl: "https://torrent-guard.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "ForestFire - Prediction and Prevention",
      description:
        "Monitor and predict forest fire risks using environmental data and machine learning.",
      longDescription:
        "Wildfire prediction tool using environmental parameters and machine learning for forest fire risk assessment.",
      image: "/projects/project6.webp",
      technologies: [
        "React Native (Expo Go)",
        "Python (Flask)",
        "PostgreSQL (Neon)",
        "Firebase (Auth)",
        "Gemini LLM",
        "Arduino IDE",
        "Random Forest",
        "ThingSpeak Cloud",
      ],
      category: "iot",
      status: false,
      githubUrl: "https://github.com/SANJAY222-R/ForestFire-Predictor",
      liveUrl:
        "https://github.com/SANJAY222-R/ForestFire-Predictor/releases/tag/v1.0.0",
      featured: true,
    },
    {
      id: 7,
      title: "Pixxel - AI Powered Image Editor",
      description:
        "Apply advanced AI-driven edits and transformations to images with a powerful, modern online editor.",
      longDescription:
        "AI-powered image editor with background removal, object manipulation, and advanced filters powered by Convex DB.",
      image: "/projects/project7.webp",
      technologies: [
        "Next.js",
        "Next.js API",
        "Convex DB",
        "Clerk (Auth)",
        "Imagekit.io",
        "ShadCN UI",
      ],
      category: "web",
      status: false,
      githubUrl: "https://github.com/freebird-prod/pixxel-image-editor",
      liveUrl: "https://pixxel-image.vercel.app",
      featured: true,
    },
    {
      id: 8,
      title: "Grafixion - Simple Image Editor",
      description:
        "A simple image editor with advanced edits and transformations.",
      longDescription:
        "Simple image editor with background removal and advanced filters using React and Local Storage.",
      image: "/projects/project8.webp",
      technologies: ["React.js", "Tailwind CSS", "ShadCN UI", "Local Storage"],
      category: "web",
      status: false,
      githubUrl: "https://github.com/freebird-prod/grafixion-image-editor",
      liveUrl: "https://grafixion.vercel.app",
      featured: false,
    },
    {
      id: 9,
      title: "Creafolio - Digital Portfolio Builder",
      description:
        "Easily create a beautiful digital portfolio with advanced edits and transformations.",
      longDescription:
        "Digital portfolio builder with tools to create stunning online portfolios with persistent storage.",
      image: "/projects/project9.webp",
      technologies: [
        "Next.js",
        "Next.js API",
        "Daisy UI",
        "PostgreSQL",
        "Drizzle ORM",
        "ReCharts",
      ],
      category: "web",
      status: false,
      githubUrl: "https://github.com/freebird-prod/creafolio  ",
      liveUrl: "https://creafolio.vercel.app",
      featured: true,
    },
    {
      id: 10,
      title: "NeuraLife - AI-Powered Mental Health Companion",
      description:
        "A mental health companion that provides personalized support and resources.",
      longDescription:
        "AI-powered mental health companion offering personalized support and resources using machine learning.",
      image: "/projects/project10.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Next.js API",
        "ShadCN UI",
        "Firebase",
        "Openrouter LLM",
      ],
      category: "web",
      status: false,
      githubUrl: "https://github.com/freebird-prod/neura-life",
      liveUrl: "https://neura-life.vercel.app",
      featured: false,
    },
    {
      id: 11,
      title: "FlowFund - Expense Tracker and Budget Planner",
      description:
        "An expense tracker and budget planner that helps users manage their finances.",
      longDescription:
        "Expense tracker and budget planner to manage finances with ML-powered insights.",
      image: "/projects/project11.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Next.js API",
        "ShadCN UI",
        "PostgreSQL",
        "Drizzle ORM",
      ],
      category: "web",
      status: false,
      githubUrl: "https://github.com/freebird-prod/expenses-tracker",
      liveUrl: "https://flow-funder.vercel.app",
      featured: false,
    },
    {
      id: 12,
      title: "CipherKey - Multi-Platform Password Manager",
      description:
        "A password manager that helps users manage their passwords across valrious platforms.",
      longDescription:
        "Multi-platform password manager for secure password storage and management.",
      image: "/projects/project12.webp",
      technologies: ["React.js", "Tailwind CSS", "ShadCN UI", "LocalStorage"],
      category: "web",
      status: false,
      githubUrl: "https://github.com/dharunkumar-sh/password-gen",
      liveUrl: "https://cipher-key.vercel.app",
      featured: false,
    },
    {
      id: 13,
      title: "SkCine - Sivakarthikeyan Movie Database",
      description:
        "A movie database dedicated to the films of Sivakarthikeyan.",
      longDescription:
        "Comprehensive movie database dedicated to actor Sivakarthikeyan's filmography.",
      image: "/projects/project13.webp",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "ShadCN UI",
        "LocalStorage",
        "Firebase (Auth)",
        "Firestore DB",
      ],
      category: "entertainment",
      status: false,
      githubUrl: "https://github.com/dharunkumar-sh/cine-hub",
      liveUrl: "https://skcine.vercel.app",
      featured: true,
    },
    {
      id: 14,
      title: "Career Lens - AI Career Guide Companion",
      description:
        "A career guide that helps users find the right career path.",
      longDescription:
        "AI-powered career guide to help users find the right career path with ML recommendations.",
      image: "/projects/project14.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN UI",
        "Next.js API",
        "Firebase (Auth)",
        "Firestore DB",
      ],
      category: "web",
      status: false,
      githubUrl: "https://github.com/dharunkumar-sh/career-lens",
      liveUrl: "https://careerlens-guide.vercel.app",
      featured: true,
    },
    {
      id: 15,
      title: "Skill Bridge - Smart Course Recommendation Platform",
      description:
        "A skill upgrading platform that suggests the next course based on completed skills.",
      longDescription:
        "Smart course recommendation platform that suggests next courses based on current skills and learning paths.",
      image: "/projects/project15.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Next.js API",
        "PostgreSQL (Neon)",
        "Drizzle ORM",
        "Openrouter LLM",
        "Vercel",
      ],
      category: "web",
      status: true,
      githubUrl: "https://github.com/dharunkumar-sh/skill-bridge",
      liveUrl: "https://career-skill-bridge.vercel.app/",
      featured: true,
    },
    {
      id: 16,
      title: "API Muse - AI-Powered API Documentation Generator",
      description:
        "Design APIs with Intelligence. Stop writing boilerplate. Describe your endpoints and let AI generate flawless, production-ready API documentation instantly.",
      longDescription:
        "AI-powered API documentation generator that converts descriptions into production-ready OpenAPI specs.",
      image: "/projects/project16.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Openrouter API",
        "OpenAPI Specification",
        "Swagger UI",
        "TypeScript",
        "Vercel",
      ],
      category: "web",
      status: true,
      githubUrl: "https://github.com/dharunkumar-sh/api-muse",
      liveUrl: "https://api-muse.vercel.app",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: LayoutGrid },
    { id: "web", label: "Full Stack", icon: Code2 },
    { id: "ai", label: "Machine Learning", icon: Cpu },
    { id: "iot", label: "IoT", icon: Layers },
    { id: "entertainment", label: "Entertainment", icon: Gamepad2 },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

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
      label: "Total Projects",
      value: "16",
      icon: Rocket,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      label: "Featured",
      value: "10",
      icon: Star,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      label: "Open Source",
      value: "16",
      icon: GitFork,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      label: "Tech Stacks",
      value: "25+",
      icon: Layers,
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Innovative Solutions
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions and cutting-edge technologies that
              solve real-world problems
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
                <div className="text-center p-5 lg:p-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
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
            onSearchChange={handleSearchChange}
            placeholder="Search projects by name or technology..."
            scrollTargetId="projects-grid"
            gradientFrom="purple-500"
            gradientTo="cyan-500"
            iconColor="purple-400"
            focusBorderColor="focus:border-purple-500/50"
            focusRingColor="focus:ring-purple-500/20"
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
                    ? "bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-800/60 text-gray-400 hover:text-purple-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-purple-500/30"
                }`}
              >
                <category.icon size={18} />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        id="projects-grid"
        className="pt-8 pb-24 relative [overflow-anchor:none]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    layout: { type: "spring", stiffness: 400, damping: 30 },
                    opacity: { duration: 0.15 },
                    scale: { duration: 0.15 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="group relative cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-700/50 group-hover:border-purple-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                        <Star size={12} className="fill-current" />
                        Featured
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 lg:h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-xs font-medium text-purple-400 border border-purple-500/30">
                        {
                          categories.find((c) => c.id === project.category)
                            ?.label
                        }
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 group-hover:border-purple-400/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-3 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 lg:py-24"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 pt-[6.5rem] pb-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    {/* Banner */}
                    <div className="relative h-50 sm:h-[18rem] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                      {/* Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="px-6 py-6 sm:px-8 sm:py-8 space-y-6">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div>
                        <h4 className="text-purple-400 font-semibold mb-4 text-lg flex items-center gap-2">
                          <Code2 size={20} />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 text-sm bg-gray-800/80 text-purple-300 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4 pt-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm font-medium hover:bg-gray-700 hover:border-gray-600 transition-all"
                        >
                          <Github size={18} className="text-gray-400" />
                          View Code
                        </motion.a>

                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-purple-500/25"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
