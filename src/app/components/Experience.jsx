import { useState } from "react";

export default function ExperienceSection() {
  const experiences = [


    {
    company: "YUVAINTERN (online Internship)",
    role: " Junior Full-Stack Developer ",
    duration: "17 Jan 2026 – 5 Feb 2026",
    description:
      "Successfully completed an internship as a Junior Full Stack Developer Intern at YuvaIntern, where I worked on designing, developing, and maintaining web applications. Gained hands-on experience in front-end and back-end development, building responsive user interfaces, integrating APIs, and writing clean, maintainable code while collaborating in a professional development environment.",
    
    
    highlights: [
      " Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and back-end technologies. ",
      " Implemented responsive UI components and ensured cross-browser compatibility . ",
      " Worked on backend logic, API integration, and database operations.",
      " Followed best practices for code structure, debugging, and optimization.",
      " Collaborated with a team, participated in code reviews, and contributed to project deliverables on time.",
    ],
  },
  {
    company: "TATA (online Internship)",
    role: "Data Analyst Intern",
    duration: "aug 2025 – Nov 2025",
    description:
      "Worked on exploratory data analysis, delinquency risk prediction using GenAI tools, business reporting and data storytelling, and designing an AI-driven collections strategy for a financial services context.",
    
    
    highlights: [
      " Contributed to AI-driven data analysis solutions using Python and Machine Learning  techniques. ",
      " Performed EDA and risk profiling to improve delinquency prediction accuracy. ",
      "Collaborated with a virtual team to create a business report and data insights presentation .",
    ],
  },
  {
    company: "Walmart (Online Internship)",
    role: "Advanced Software Engineering  Intern Walmart (Online)",
    duration: "Nov 2025 – Dec 2025",
    description:
      "Worked on advanced data structures, software architecture design, relational database design, and data munging as part of Walmart’s Advanced Software Engineering virtual job simulation.",
    highlights: [
      "Completed a software engineering job simulation focused on advanced data structures and software architecture.",
      "Gained hands-on experience in relational database design and data munging tasks.",
      "Strengthened understanding of scalable software development and databasemanagement."
    ],
  }
];


  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#64ffda]">
        Experience
      </h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-[#64ffda]/40 rounded"></div>
        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <li
              key={idx}
              className="relative grid grid-cols-12 gap-4 items-center opacity-0 translate-y-8 animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.2 + 0.2}s`,
                animationFillMode: "forwards",
                animationDuration: "0.7s",
              }}
            >
              {/* Timeline and details */}
              <div className="col-span-9 flex items-start">
                <span className="z-10 mt-1 w-4 h-4 rounded-full translate-x-[18px] bg-[#64ffda] border-4 border-white shadow absolute left-0"></span>
                <div className="ml-12 w-full">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}{" "}
                    <span className="text-[#64ffda] font-normal">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm text-[#ADB7BE]">{exp.duration}</span>
                  <p className="mt-2 text-[#ADB7BE]">{exp.description}</p>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tech &&
                      exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#222] text-[#64ffda] px-2 py-1 rounded text-xs font-semibold border border-[#64ffda]/30"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  {/* Learn More link with animated icon */}
                  <div className="mt-3">
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="text-[#64ffda] text-sm underline hover:text-[#52e0c4] transition focus:outline-none flex items-center gap-1 group"
                      aria-expanded={openIdx === idx}
                      aria-controls={`exp-details-${idx}`}
                    >
                      {openIdx === idx ? "Hide Details" : "Learn More"}
                      <span
                        className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${
                          openIdx === idx ? "rotate-90" : ""
                        }`}
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    </button>
                  </div>
                  {/* Expandable highlights with animated collapse/expand */}
                  <div
                    style={{
                      overflow: "hidden",
                      transition:
                        "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
                      maxHeight: openIdx === idx ? "500px" : "0",
                      opacity: openIdx === idx ? 1 : 0,
                    }}
                  >
                    <ul
                      id={`exp-details-${idx}`}
                      className="mt-3 list-disc list-inside text-[#ADB7BE] space-y-1"
                      aria-hidden={openIdx !== idx}
                    >
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
