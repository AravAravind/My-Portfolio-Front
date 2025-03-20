import { Briefcase, Code, Target } from "lucide-react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#0d0d0d] text-white px-6">
      <div className="max-w-4xl w-full bg-[#131313] p-10 rounded-2xl shadow-lg flex flex-col gap-8">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-200">About Me</h2>
          <h3 className="text-3xl font-semibold text-gray-400 mt-2">Who I Am</h3>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-blue-400 font-semibold">Arvind</span>, an aspiring **Data Analyst & IT Support Specialist** with a strong background in **Python, SQL, Machine Learning, and Data Visualization**.
              I hold an **MSc in Computer Science** and have completed multiple **Data Science programs**.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about **turning raw data into meaningful insights**, I specialize in **Tableau, Power BI, and predictive analytics**. I enjoy solving complex problems and continuously learning new technologies.
            </p>
          </div>

          {/* Right Section - Skills & Goals */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg">
              <Briefcase className="text-gray-400" />
              <span className="text-gray-300">Aspiring Data Analyst & IT Support Specialist</span>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg">
              <Code className="text-gray-400" />
              <span className="text-gray-300">Python | SQL | Machine Learning | Tableau</span>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg">
              <Target className="text-gray-400" />
              <span className="text-gray-300">Goal: Secure a Data Analyst Role & Build a Strong Career</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
