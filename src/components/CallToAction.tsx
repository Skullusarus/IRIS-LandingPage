import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Users, Sparkles } from 'lucide-react';

const CallToAction = () => {
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
    <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-teal-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Build Your Second Brain?
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join students who are already transforming how they learn, study, and manage knowledge. 
            Experience the future of intelligent knowledge management – where AI amplifies your thinking, 
            not replaces it.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-8">
          <form onSubmit={handleSignup} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email for Beta"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                required
              />
              <button 
                type="submit"
                className="group bg-gradient-to-r from-purple-600 to-teal-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Sign Up for Beta
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          {!showFeedbackForm ? (
            <button 
              onClick={() => setShowFeedbackForm(true)}
              className="group text-purple-400 hover:text-purple-300 font-medium text-lg transition-colors flex items-center justify-center border border-purple-600/30 px-6 py-4 rounded-xl hover:border-purple-500/50 mx-auto"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Provide Ideas & Feedback
            </button>
          ) : (
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <form onSubmit={handleFeedback}>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your ideas, feedback, or what you'd like to see in IRIS..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none h-32 mb-4"
                  required
                />
                <div className="flex gap-3 justify-center">
                  <button 
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Send Feedback
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowFeedbackForm(false)}
                    className="text-gray-400 hover:text-gray-300 px-8 py-3 rounded-lg font-medium transition-colors border border-slate-600 hover:border-slate-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Built for the People</h3>
            <p className="text-gray-400 text-sm">Community-driven development with your needs at the center</p>
          </div>
          
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
            <MessageSquare className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">By the People</h3>
            <p className="text-gray-400 text-sm">Your feedback shapes the future of intelligent knowledge management</p>
          </div>
          
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">For Your Success</h3>
            <p className="text-gray-400 text-sm">AI that amplifies human agency and unlocks your potential</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Early beta access • No credit card required • Privacy-first design
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;