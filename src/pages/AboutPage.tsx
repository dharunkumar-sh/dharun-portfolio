import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  Target,
  Code,
  Zap,
  Brain,
  Rocket,
  Users,
} from "lucide-react";
import TechStackRadar from "../components/TechStackRadar";

const AboutPage: React.FC = () => {
  const skillsData = [
    { name: "HTML", image: "/html.webp" },
    { name: "CSS", image: "/css.webp" },
    { name: "JavaScript", image: "/js.webp" },
    { name: "TypeScript", image: "/typescript.webp" },
    { name: "Angular", image: "/angular.webp" },
    { name: "React", image: "/react.webp" },
    { name: "Next.js", image: "/next.webp" },
    { name: "Tailwind CSS", image: "/tailwind.webp" },
    { name: "SaSS", image: "/sass.webp" },
    { name: "Bootstrap", image: "/bootstrap.webp" },
    { name: "MySQL", image: "/mysql.webp" },
    { name: "PostgreSQL", image: "/postgre.webp" },
    { name: "Firebase", image: "/firebase.webp" },
    { name: "Strapi CMS", image: "/strapi.webp" },
    { name: "Supabase", image: "/supabase.webp" },
    { name: "Convex DB", image: "/convex.webp" },
  ];

  const timeline = [
    {
      id: 1,
      year: "2023",
      title: "Started Engineering",
      description:
        "Began B.Tech. IT at Meenakshi Sundararajan Engineering College",
      icon: GraduationCap,
    },
    {
      id: 2,
      year: "2024",
      title: "First Hackathon",
      description: "Won third place in SA Engineering College Hackathon",
      icon: Zap,
    },
    {
      id: 3,
      year: "2025",
      title: "Internship",
      description:
        "Full Stack Web Development Intern at Triplet Software Solutions",
      icon: Code,
    },
    {
      id: 4,
      year: "2026",
      title: "Future Goals",
      description:
        "Aspiring to become a leading React developer, contribute to impactful open-source projects, and secure a role at a top-tier tech company where innovation meets scale.",
      icon: Target,
    },
    {
      id: 5,
      year: "2027",
      title: "Graduation & Career Launch",
      description:
        "Completed Bachelor of Information Technology with a strong focus on front-end technologies. Dedicated to advancing as a React Developer, contributing to open-source innovations, and joining a visionary tech company where scalability, performance, and design intersect.",
      icon: Rocket,
    },
  ];

  const [creatorSvg, setCreatorSvg] = useState<string>("");
  const svgHeroRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    let isMounted = true;

    // Load SVG content
    fetch("/creator.svg")
      .then((response) => response.text())
      .then((svgText) => {
        if (isMounted) {
          setCreatorSvg(svgText);
        }
      })
      .catch((error) => {
        console.error("Failed to load creator.svg", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Apply sketch animation class after SVG loads
  useEffect(() => {
    if (!creatorSvg || !svgHeroRef.current) return;

    const svgElement = svgHeroRef.current.querySelector("svg");
    if (!svgElement) return;

    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");

    // Add animation class to trigger CSS animation
    svgHeroRef.current.classList.add("sketch-animate");
  }, [creatorSvg]);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section with Profile Image */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24"
          >
            {/* Left Side - SVG Profile */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
                {creatorSvg ? (
                  <div
                    ref={svgHeroRef}
                    className="svg-illustration w-full h-auto aspect-square"
                    dangerouslySetInnerHTML={{ __html: creatorSvg }}
                  />
                ) : (
                  <div className="flex w-full aspect-square items-center justify-center">
                    <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Side - Hero Content */}
            <motion.div
              variants={containerVariants}
              className="text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-2"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h1>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                  Dharun Kumar S H
                </h2>
                <p className="text-xl lg:text-lg text-slate-400 leading-relaxed font-medium">
                  Aspiring Frontend Developer | React.js Developer
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-base text-gray-300 leading-relaxed max-w-2xl"
              >
                Passionate about crafting seamless React interfaces and pushing
                the boundaries of modern web development. I transform ideas into
                interactive digital experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap flex-row gap-4 justify-center lg:justify-start"
              >
                {[
                  {
                    icon: GraduationCap,
                    label: " Self Learner",
                    color: "from-cyan-600 to-teal-700",
                  },
                  {
                    icon: Rocket,
                    label: "Creative Thinker",
                    color: "from-pink-700 to-red-800",
                  },
                  {
                    icon: Users,
                    label: "Team Worker",
                    color: "from-amber-700 to-lime-800",
                  },
                  {
                    icon: Users,
                    label: "Quick Learner",
                    color: "from-rose-600 to-indigo-800",
                  },
                  {
                    icon: Users,
                    label: "Problem Solver",
                    color: "from-sky-600 to-emerald-800",
                  },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} bg-opacity-20 border border-white/10 backdrop-blur-sm`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    <badge.icon size={16} className="text-white" />
                    <span className="text-sm font-medium text-white">
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - About Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="relative p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
                  <Brain size={16} className="text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4 lg:mb-6">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  I'm a third-year Information Technology student at Meenakshi
                  Sundararajan Engineering College, passionate about front-end
                  development and constantly honing my skills as an aspiring
                  React developer. I thrive on turning ideas into interactive
                  web experiences and love exploring the latest in modern UI
                  frameworks.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Rocket size={16} className="text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-violet-400 mb-4 lg:mb-6">
                  What Drives Me
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  I'm driven by a passion to build web experiences that make a
                  real difference. Whether it’s crafting clean, user-focused
                  React applications, exploring the frontiers of emerging tech,
                  or contributing to open-source projects, I’m constantly
                  seeking ways to turn ideas into impactful solutions.
                </p>
              </motion.div>

              {/* Skills (static) */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 lg:space-y-6"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200 mb-4 lg:mb-6">
                  Developer Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {skillsData?.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="p-4 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 border border-cyan-500/25 rounded-xl text-center"
                    >
                      <div className="flex justify-center items-center w-full h-16 mb-2">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          loading="lazy"
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/fallback.png";
                          }}
                        />
                      </div>
                      <div className="text-sm font-medium text-white truncate">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Timeline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12"
              >
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  My Timeline
                </span>
              </motion.h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    variants={itemVariants}
                    className="relative flex items-start space-x-6 lg:space-x-8 mb-8 lg:mb-12"
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
                      <item.icon
                        size={20}
                        className="text-white lg:w-6 lg:h-6"
                      />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 p-4 lg:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2 lg:mb-3">
                        <span className="text-sm lg:text-base font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Radar Chart */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Tech Stack Visualization
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <TechStackRadar />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[
                  {
                    area: "Frontend Development",
                    percentage: 85,
                    description:
                      "React, Next.js, Angular, Tailwind CSS, Bootstrap, JavaScript, TypeScript",
                  },
                  {
                    area: "Backend Development",
                    percentage: 40,
                    description: "Node.js, Python (Flask), APIs",
                  },
                  {
                    area: "Database Management",
                    percentage: 70,
                    description:
                      "MySQL, PostgreSQL, Firebase, Supabase, Convex, Strapi CMS",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.area}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-800/30 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">
                        {item.area}
                      </span>
                      <span className="text-cyan-400 font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-cyan-500 to-violet-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Quick Facts
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "Current Year", value: "3rd Year" },
              { label: "CGPA", value: "8.44" },
              { label: "Programming Languages", value: "2" },
              { label: "Open Source Contributions", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2 lg:mb-4">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
