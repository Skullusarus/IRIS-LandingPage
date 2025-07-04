import React from 'react';
import { AlertTriangle, Search, Clock, Brain, FileX } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
      title: "Information Overload",
      description: "Endless piles of articles and notes leaving you buried in information and overwhelmed by choice."
    },
    {
      icon: <Search className="w-8 h-8 text-red-400" />,
      title: "Time Wasted Searching",
      description: "Spending hours hunting for that one piece of information across fragmented systems and forgotten bookmarks."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "Paralysis of Analysis",
      description: "Too much information leading to decision delays and difficulty finding optimal solutions when you need them most."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Mental Exhaustion",
      description: "Feeling apathetic, stressed, and unable to concentrate due to constant information influx and digital hoarding."
    },
    {
      icon: <FileX className="w-8 h-8 text-gray-400" />,
      title: "PKM Tool Frustration",
      description: "Obsidian feels like too much work. Notion requires endless setup. Your conclusions evaporate without repetition."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            If you're a student who's ever felt overwhelmed by the endless stream of information, 
            frustrated with complex note-taking tools, or exhausted by digital hoarding – you're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-purple-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                {problem.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{problem.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl text-gray-300 font-light italic">
            "I spend more time organizing my notes than actually learning from them."
          </p>
          <p className="text-gray-500 mt-2">— Every student ever</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;