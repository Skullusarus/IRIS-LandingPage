import React, { useState } from 'react';
import { Brain, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup email:', email);
  };

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback logic here
    console.log('Feedback:', feedback);
    setShowFeedbackForm(false);
    setFeedback('');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Brain className="w-16 h-16 text-purple-400 mr-4" />
            <Sparkles className="w-6 h-6 text-teal-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            IRIS
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
          Your Second Brain for the Web
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Stop drowning in information. Start building knowledge that <em>actually connects</em>.
        </p>
        
        <div className="max-w-md mx-auto mb-6">
          <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for beta access"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="group bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Sign Up for Beta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="mb-6">
          {!showFeedbackForm ? (
            <button 
              onClick={() => setShowFeedbackForm(true)}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center justify-center mx-auto"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Provide Ideas & Feedback
            </button>
          ) : (
            <form onSubmit={handleFeedback} className="max-w-md mx-auto">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your ideas, feedback, or what you'd like to see in IRIS..."
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none h-24 mb-3"
                required
              />
              <div className="flex gap-3 justify-center">
                <button 
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Send Feedback
                </button>
                <button 
                  type="button"
                  onClick={() => setShowFeedbackForm(false)}
                  className="text-gray-400 hover:text-gray-300 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        
        <p className="text-sm text-gray-500 italic">
          Built for the people, by the people
        </p>
      </div>
    </section>
  );
};

export default Hero;