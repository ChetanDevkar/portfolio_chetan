import Image from "next/image";
import {ReactOriginalWordmark,JavascriptOriginal,PostmanOriginal, JsonOriginal,SpringOriginal, JavaOriginal, SqldeveloperOriginal,Html5Original, Css3Original, NodejsOriginal, NextjsOriginal, TypescriptOriginal,ScikitlearnOriginal, TensorflowOriginal, PythonOriginal, MongodbOriginal, DbeaverOriginal, PostgresqlOriginal, MysqlOriginal, CplusplusOriginal, ExpressOriginal, FlaskOriginal, SequelizeOriginal, GitOriginal} from "devicons-react"

const programmingLanguages = [
   { name: "Java", image: "/images/tech/java.png", level: "Intermediate" },
  { name: "Python", image: "/images/tech/python.png", level: "Intermediate" },
  { name: "JavaScript", image: "/images/tech/javascript.png", level: "Intermediate" },
  { name: "SQL", image: "/images/tech/sql.png", level: "Intermediate" },
    { name: "HTML", image: "/images/tech/html.png", level: "Advanced" },
    { name: "CSS", image: "/images/tech/css.png", level: "Advanced" },
];

const frameworks = [
  { name: "React", image: "/images/tech/react.png", level: "Intermediate" },
  { name: "Next.js", image: "/images/tech/next.png", level: "Intermediate" },
  { name: "Node.js", image: "/images/tech/node.png", level: "Advanced" },
  { name: "Spring", image: "/images/tech/spring.png", level: "Basic" },
  { name: "MySQL", image: "/images/tech/mysql.png", level: "Intermediate" },
  { name: "Git", image: "/images/tech/git.png", level: "Advanced" },
 
];

const concepts = [
  { name: "Data Structures", icon: "📊" },
  { name: "Algorithms", icon: "🔍" },
  { name: "Database Design", icon: "🗄️" },
  { name: "SQL", icon: "💾" },
  { name: "Problem Solving", icon: "🧠" },
  { name: "OOP", icon: "📦" },
  { name: "Version Control (Git)", icon: "🔧" },
];

const deviconMap = {
  React: ReactOriginalWordmark,
  "Node.js": NodejsOriginal,
  "Next.js": NextjsOriginal,
  Java:JavaOriginal,
    SQL: SqldeveloperOriginal,
    HTML: Html5Original,
    CSS: Css3Original,
  TypeScript: TypescriptOriginal,
  Python: PythonOriginal,
  Postman: PostmanOriginal,
  MongoDB: MongodbOriginal,
  DBeaver: DbeaverOriginal,
  JavaScript: JavascriptOriginal,
  PostgreSQL: PostgresqlOriginal,
  MySQL: MysqlOriginal,
  "C++": CplusplusOriginal,
  Express: ExpressOriginal,
  Flask: FlaskOriginal,
  Sequelize: SequelizeOriginal,
  Git: GitOriginal,
  JSON: JsonOriginal,
  Spring: SpringOriginal,
  "Scikit-learn": ScikitlearnOriginal,
  TensorFlow: TensorflowOriginal,
};

function SkillGrid({ skills }) {
  return (
    <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-5xl mx-auto px-4">
      {skills.map((skill, idx) => {
        const DevIcon = deviconMap[skill.name];
        const isWhiteIcon = skill.name === "Express" || skill.name === "Flask";
        return (
          <div
            key={idx}
            className="bg-[#222] rounded-xl shadow-lg flex flex-col items-center p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
          >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
              {DevIcon ? (
                <DevIcon size={56} className={`group-hover:scale-110 transition ${isWhiteIcon ? 'bg-white rounded-full p-2' : 'text-inherit'}`} color={isWhiteIcon ? '#fff' : undefined} />
              ) : (
                <Image
                  src={skill.image}
                  alt={skill.name + ' logo'}
                  fill
                  className="object-contain group-hover:scale-110 transition"
                  sizes="64px"
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
            {skill.level && (
              <span className="text-xs text-[#64ffda] bg-[#181818] px-2 py-1 rounded-full border border-[#64ffda]/30">{skill.level}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-12 bg-[#181818]">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#64ffda]">Skills</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Programming Languages</h3>
        <SkillGrid skills={programmingLanguages} />
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Frameworks & Libraries</h3>
        <SkillGrid skills={frameworks} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Concepts</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
          {concepts.map((concept, idx) => (
            <div key={idx} className="bg-[#222] rounded-xl shadow flex items-center gap-3 px-5 py-3 text-[#64ffda] text-base font-semibold">
              <span className="text-2xl">{concept.icon}</span> {concept.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
