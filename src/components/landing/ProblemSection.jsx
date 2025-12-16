import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Bell, Smartphone, Zap } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Bell,
      title: 'Notification Overload',
      description: 'Average user gets 200+ notifications daily across 12+ apps'
    },
    {
      icon: Zap,
      title: 'Context Switching',
      description: 'Constant interruptions destroy focus and cost 23 minutes to recover'
    },
    {
      icon: Smartphone,
      title: 'Platform Fragmentation',
      description: 'Important updates scattered across email, Slack, Twitter, LinkedIn, and more'
    },
    {
      icon: AlertCircle,
      title: 'Missing What Matters',
      description: 'Critical messages buried under low-priority noise and spam'
    }
  ];

  return (
    <section id="problem" className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Your attention is under attack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modern users are drowning in notifications. 
            The tools meant to keep us connected have become sources of constant distraction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/30 transition-colors h-full">
                <problem.icon className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}