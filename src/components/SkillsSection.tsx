import { useState } from "react";
import { motion } from "framer-motion";
import { Code,Server,Code2 } from "lucide-react";


const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    { name: "JavaScript", category: "Frontend", color: "#F7DF1E", bgColor: "bg-yellow-500/20" },
    { name: "Python", category: "AI/ML", color: "#3776AB", bgColor: "bg-blue-500/20" },
    { name: "ReactJs", category: "Frontend", color: "#61DAFB", bgColor: "bg-cyan-500/20" },
    { name: "HTML", category: "Frontend", color: "#E34F26", bgColor: "bg-red-500/20" },
    { name: "CSS", category: "Frontend", color: "#1572B6", bgColor: "bg-blue-600/20" },
    { name: "BootStrap", category: "Frontend", color: "#7952B3", bgColor: "bg-purple-600/20" },
    { name: "Tailwind", category: "Frontend", color: "#06B6D4", bgColor: "bg-cyan-500/20" },

{
  name: "Node.js",
  category: "Backend",
  iconType: "lucide",
  icon: Server,
  color: "#22c55e",
  bgColor: "bg-green-600/20",
},

    { name: "MySQL", category: "Database", color: "#4479A1", bgColor: "bg-blue-500/20" },
    { name: "Firebase", category: "Database", color: "#FFCA28", bgColor: "bg-yellow-500/20" },

    { name: "GitHub", category: "Tool", color: "#181717", bgColor: "bg-gray-900/20" },
    { name: "Git", category: "Tool", color: "#F05032", bgColor: "bg-red-500/20" },
{
  name: "VS Code",
  category: "Tool",
  iconType: "lucide",
  icon: Code2,
  color: "#007ACC",
  bgColor: "bg-blue-600/20",
},

    { name: "Pandas", category: "AI/ML", color: "#150458", bgColor: "bg-indigo-900/20" },
    { name: "Numpy", category: "AI/ML", color: "#013243", bgColor: "bg-purple-900/20" },
    { name: "Tensorflow", category: "AI/ML", color: "#FF6F00", bgColor: "bg-orange-600/20" },
  ];

  const categories = ["All", "Frontend", "AI/ML", "Backend", "Databases", "Tools"];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter(skill => {
          if (activeFilter === "Frontend") return skill.category === "Frontend";
          if (activeFilter === "AI/ML") return skill.category === "AI/ML";
          if (activeFilter === "Backend") return skill.category === "Backend";
          if (activeFilter === "Databases") return skill.category === "Database";
          if (activeFilter === "Tools") return skill.category === "Tool";
          return false;
        });

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      JavaScript: "devicon-javascript-plain",
      Python: "devicon-python-plain",
      ReactJs: "devicon-react-original",
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      BootStrap: "devicon-bootstrap-plain",
      Tailwind: "devicon-tailwindcss-plain",
      "Node.js": "devicon-nodejs-original",
      MySQL: "devicon-mysql-plain",
      Firebase: "devicon-firebase-plain",
      GitHub: "devicon-github-original",
      Git: "devicon-git-plain",
      // VSCode: "devicon-vscode-original",
      Pandas: "devicon-pandas-original",
      Numpy: "devicon-numpy-original",
      Tensorflow: "devicon-tensorflow-original",
    };

    return iconMap[name] || "devicon-code-plain";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <h3 className="text-2xl font-semibold flex items-center text-white mb-8">
        <Code className="w-6 h-6 mr-3 text-brand-purple" />
        Technical Skills
      </h3>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center border border-white/10`}
            >
             {skill.iconType === "lucide" && skill.icon ? (
  <skill.icon
    className="w-8 h-8"
    style={{ color: skill.color }}
  />
) : (
  <i
    className={`${getSkillIcon(skill.name)} text-3xl`}
    style={{ color: skill.color }}
  />
)}
            </div>
            <span className="text-xs mt-3 text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
