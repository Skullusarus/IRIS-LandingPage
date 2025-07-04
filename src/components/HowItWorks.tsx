import React from 'react';
import { Upload, Cpu, Search, Lock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-blue-400" />,
      title: "Effortless Ingestion",
      description: "Just continue using your browser normally – no complex import processes or manual categorization needed."
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-400" />,
      title: "AI-Powered Connection & Organization",
      description: "IRIS's AI intelligently processes and links your information in the background, building your personalized knowledge graph without any manual effort. No tags, no hierarchies, no 'too much work' feeling."
    },
    {
      icon: <Search className="w-12 h-12 text-teal-400" />,
      title: "Instant Insight & Retrieval",
      description: "Search naturally and get context-aware answers. Click on any idea in your interactive knowledge graph to watch connections unfold, revealing hidden insights and deepening your understanding."
    },
    {
      icon: <Lock className="w-12 h-12 text-green-400" />,
      title: "Secure & Private",
      description: "Your data stays yours with robust security protocols. IRIS respects your privacy and puts you in complete control of your intellectual assets."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How IRIS Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to transform how you learn and manage knowledge. 
            No setup required, no learning curve – just intelligence that works for you.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 via-teal-400 to-green-400 opacity-30"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1 relative">
                  <div className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-purple-700/50 transition-all duration-300 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-slate-800 rounded-full p-3 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-white mr-3">0{index + 1}</span>
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex-1 lg:hidden">
                  <div className="h-16 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 mx-auto opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-full px-6 py-3">
            <span className="text-gray-300 font-medium">Smart connections forming while you focus on learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;