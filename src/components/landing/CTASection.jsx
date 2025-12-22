import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Replaced project-specific ui components with simple elements to avoid alias resolution issues
import { ArrowRight, Mail, CheckCircle2, Sparkles } from 'lucide-react';
// base44 API client removed from this file to avoid unresolved import during build

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Redirect to the Tally form for signups
    setIsSubmitting(true);
    window.open('https://tally.so/r/wvB6ad', '_blank', 'noopener');
    setIsSubmitting(false);
  };

  return (
    <section id="callToAction" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main CTA card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-12 md:p-16 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mb-6"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to reclaim your attention?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Join to stay focused and productive. 
                  Early access is limited.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-14 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-purple-500/25 rounded-md"
                      >
                        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                        <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Free during beta • No credit card required
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto"
                  >
                    <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                      <p className="text-green-300 font-medium">
                        You're on the waitlist! Check your email for next steps.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Social proof */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-gray-800">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 border-2 border-gray-900"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">447 professionals</p>
                    <p className="text-sm text-gray-500">already on the waitlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}