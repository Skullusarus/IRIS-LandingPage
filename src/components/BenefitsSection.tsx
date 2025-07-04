import React from 'react';
import { TrendingUp, Clock, Heart, Zap, Users, BookOpen } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      title: "Enhanced Learning & Deeper Understanding",
      description: "Make connections between diverse concepts naturally. Achieve true knowledge mastery by seeing how ideas interconnect and build upon each other."
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Increased Productivity & Efficiency",
      description: "Stop wasting hours searching and re-learning. Free up valuable time for deeper study, critical thinking, and creative endeavors."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Reduced Overwhelm & Stress",
      description: "Eliminate mental exhaustion and digital hoarding anxiety. Enjoy a clear, automatically managed system that makes knowledge management effortless."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Empowered Agency",
      description: "Feel in control of your learning and information. Amplify your creativity and productivity in a state of 'Superagency' – where you're truly empowered."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Democratized Knowledge Management",
      description: "Access advanced, intelligent knowledge management that was previously expensive or exclusive. AI-powered learning for everyone."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Continuous Growth & Discovery",
      description: "Discover unexpected connections and insights across your entire knowledge base. Turn information consumption into knowledge creation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the benefits of truly intelligent knowledge management. 
            IRIS doesn't store information – it transforms how you think, learn, and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{benefit.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-2xl p-8 border border-purple-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Visualize Your Knowledge
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              See your ideas connected, clearly and beautifully. Click on any node to instantly expand your understanding 
              and watch related concepts light up, revealing hidden insights you never knew were there. It's a dynamic web 
              of knowledge, where every idea is a stepping stone to the next – designed for clarity, not complexity.
            </p>
            <div className="inline-flex items-center text-purple-300 font-medium">
              <span>Interactive Knowledge Graph</span>
              <span className="ml-2">•</span>
              <span className="ml-2">Intuitive Connections</span>
              <span className="ml-2">•</span>
              <span className="ml-2">Zero Complexity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;