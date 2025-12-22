
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Globe,
  Smartphone,
  Lock,
  BarChart3
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Prioritization',
      description: 'Machine learning ranks every notification by importance to you',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Smart Summaries',
      description: 'Long email threads and conversations condensed into key points',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Email, Slack, Twitter, LinkedIn, Discord, and 20+ integrations',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Smart Timing',
      description: 'Batches notifications based on your focus hours and habits',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Gets smarter with every interaction, adapting to your evolving needs',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'End-to-end encryption. Your data never leaves your control',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Desktop',
      description: 'Native apps for iOS, Android, Mac, Windows, and web',
      gradient: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: Lock,
      title: 'Zero Config',
      description: 'No rules or filters to set up. Works intelligently from day one',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your attention patterns and productivity improvements',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Everything you need to reclaim your focus
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful AI capabilities wrapped in an elegant, intuitive interface
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 border border-purple-500/20">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="text-white">
              <span className="font-semibold">New features</span> added weekly based on user feedback
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
