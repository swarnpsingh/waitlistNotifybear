import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const benefits = [
    'AI learns your priorities over time',
    'Automatically filters noise and spam',
    'Surfaces urgent items instantly',
    'Summarizes long threads in seconds',
    'One unified feed for everything',
    'Zero manual configuration needed'
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-600/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 blur-3xl" />
              
              {/* AI Brain visualization */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-8">
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-50" />
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Flow visualization */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                  />
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>200+ Notifications</span>
                    <Filter className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-semibold">5 Important</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {['High Priority', 'Medium', 'Summarized'].map((label, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-lg bg-white/5 border border-gray-800 text-center"
                      >
                        <Sparkles className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-400">{label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">The Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                AI that understands what matters to you
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                NotifyBear uses advanced machine learning to analyze your behavior, 
                understand context, and intelligently prioritize your notifications. 
                No more manual rules or filters.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <p className="text-purple-300">
                  <span className="font-semibold">97% accuracy</span> in priority detection
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}