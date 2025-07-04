import React from 'react';
import { Zap, Shield, Sparkles, Network, Target } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Zero-Friction Knowledge Building",
      description: "No manual tags, no tedious hierarchies, no 'too much work' feeling. IRIS builds your knowledge graph automatically while you focus on learning."
    },
    {
      icon: <Network className="w-8 h-8 text-teal-400" />,
      title: "Intelligent Auto-Connections",
      description: "Unlike decorative knowledge graphs in other tools, IRIS creates meaningful, useful connections that actually help you understand and remember."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Context-Aware Search",
      description: "Ask questions in natural language and get intelligent answers that draw from your entire knowledge base, not just keyword matches."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Privacy-First Design",
      description: "Your data stays yours. Built with robust security from day one, IRIS respects your privacy and puts you in control of your intellectual assets."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-teal-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Meet IRIS
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            The AI-powered knowledge management solution that actually gets it. 
            IRIS transforms how you learn, study, and manage information by building 
            your personal knowledge graph automatically – no setup, no fiddling, no complexity.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 rounded-full px-6 py-3">
            <span className="text-purple-300 font-medium">Unlike Obsidian, Notion, or Mem</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-teal-300 font-medium">IRIS just works</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-600/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-2xl p-8 border border-purple-700/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            What Makes IRIS Different?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Not Obsidian</h4>
              <p className="text-gray-400 text-sm">No learning cliff, no manual linking, no decorative graphs that don't actually help</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-300 mb-2">Not Notion</h4>
              <p className="text-gray-400 text-sm">No endless setup, no template overwhelm, no time spent organizing instead of learning</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Not Generic AI</h4>
              <p className="text-gray-400 text-sm">Not just another browser extension or summarizer, but a centralized Second Brain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;