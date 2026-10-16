import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code2, Rocket, Trophy } from "lucide-react";
import experiences from "../data/experiences.json";

interface Experience {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  duration: string;
  location: string;
  workMode: string;
  skills: string[];
  logo: string | null;
  icon: "briefcase" | "code" | "rocket" | "trophy";
  color: string;
}

const ICONS = {
  briefcase: Briefcase,
  code: Code2,
  rocket: Rocket,
  trophy: Trophy,
} as const;

const EXPERIENCE_DATA = experiences as Experience[];

interface CompanyLogoProps {
  experience: Experience;
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  experience,
  className = "",
}) => {
  const Icon = ICONS[experience.icon];
  const [hasError, setHasError] = useState(false);

  return experience.logo && !hasError ? (
    <img
      src={experience.logo}
      alt={`${experience.company} logo`}
      className={className}
      onError={() => setHasError(true)}
    />
  ) : (
    <Icon className={className} aria-hidden="true" />
  );
};

const ExperienceBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(EXPERIENCE_DATA.length - 1);
  const activeExperience = EXPERIENCE_DATA[activeIndex];
  const progress =
    EXPERIENCE_DATA.length > 1
      ? `${(activeIndex / (EXPERIENCE_DATA.length - 1)) * 100}%`
      : "100%";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="experience-heading"
      className="relative mb-12 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gray-950/70 p-5 shadow-[0_24px_80px_rgba(8,15,35,0.35)] backdrop-blur-xl sm:mb-16 sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
              Career timeline
            </div>
            <p className="mb-2 text-sm font-medium text-gray-400">
              A snapshot of where I have learned, built, and contributed.
            </p>
            <h2
              id="experience-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              My Professional Experience
            </h2>
          </div>
        </div>

        <div className="relative -mx-2 overflow-x-auto px-2 py-3 sm:mx-0 sm:px-0">
          <div className="relative min-w-[48rem] px-6 pb-2 sm:min-w-0 sm:px-3">
            <div className="absolute left-[8%] right-[8%] top-[2.25rem] h-1 -translate-y-1/2 rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 shadow-[0_0_14px_rgba(34,211,238,0.55)]"
                initial={false}
                animate={{ width: progress }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="relative grid grid-cols-7 gap-3">
              {EXPERIENCE_DATA.map((experience, index) => {
                const isActive = activeIndex === index;
                const isComplete = index <= activeIndex;

                return (
                  <motion.button
                    key={experience.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
                    aria-label={`Show ${experience.role} at ${experience.company}`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-2xl text-gray-600 transition-all duration-300 sm:h-20 sm:w-20 ${
                        isComplete ? "text-white" : "group-hover:text-gray-200"
                      }`}
                    >
                      <CompanyLogo
                        experience={experience}
                        className="h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-5 rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-[inset_0_1px_rgba(255,255,255,0.08)] sm:flex-row sm:items-start sm:p-6"
          >
            <div className="relative h-16 w-16 shrink-0 self-start overflow-hidden rounded-2xl text-white sm:h-20 sm:w-20">
              <CompanyLogo
                experience={activeExperience}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <span>{activeExperience.period}</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-400">
                  {activeExperience.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {activeExperience.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-300">
                {activeExperience.company}
                <span className="mx-2 text-gray-600">·</span>
                <span className="text-gray-400">
                  {activeExperience.employmentType}
                </span>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {activeExperience.location}
                <span className="mx-2 text-gray-600">·</span>
                {activeExperience.workMode}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1.5 text-xs font-medium text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ExperienceBar;
