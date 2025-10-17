import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram, Linkedin, Twitter, Mail, Hash } from 'lucide-react';

const notifications = [
  { platform: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600', message: 'MrBeast uploaded: $1 vs $1M Hotel', user: '@MrBeast' },
//   { platform: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-600', message: 'Casey Neistat posted a new story', user: '@caseyneistat' },
  { platform: 'X', icon: Twitter, color: 'from-blue-400 to-blue-500', message: 'MKBHD just posted', user: '@MKBHD' },
//   { platform: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700', message: 'Simon Sinek shared an article', user: '@simonsinek' },
  { platform: 'Gmail', icon: Mail, color: 'from-red-500 to-orange-500', message: 'New email: Project Update', user: 'team@company.com' },
  { platform: 'Slack', icon: Hash, color: 'from-purple-600 to-pink-500', message: 'New message in #design-team', user: '@johndoe' }
];

export default function NotificationAnimation() {
  const [merged, setMerged] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Debug mount so developer can confirm the component rendered
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.log('NotificationAnimation mounted');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMerged(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Responsive positions for scattered notifications
  useEffect(() => {
    const computePositions = (width) => {
      // Mobile: stack centered vertically
      if (width < 640) {
        return [
          { top: '8%', left: '-2%', transform: 'translateX(-50%)' },
          { top: '34%', left: '30%', transform: 'translateX(-50%)' },
          { top: '56%', left: '-2%', transform: 'translateX(-50%)' },
          { top: '80%', left: '30%', transform: 'translateX(-50%)' }
        ];
      }

      // Tablet: two columns, two rows
      if (width >= 640 && width < 1024) {
        return [
          { top: '10%', left: '10%' },
          { top: '10%', right: '10%' },
          { bottom: '22%', left: '12%' },
          { bottom: '22%', right: '12%' }
        ];
      }

      // Desktop: original scattered layout
      return [
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { bottom: '20%', left: '15%' },
        { bottom: '20%', right: '15%' }
      ];
    };

    const apply = () => setPositions(computePositions(window.innerWidth));

    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              All In One Place
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch updates from all your favorite creators come together
          </p> */}
        </motion.div>

  {/* Animation container: fixed bounding area so scattered notifications are always visible */}
  <div className="relative h-[320px] sm:h-[600px] md:h-[520px] lg:h-[450px] flex items-center justify-center py-6">
          <AnimatePresence mode="wait">
            {!merged ? (
              // Scattered notifications
              <motion.div
                key="scattered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                {notifications.map((notif, index) => {
                  const fallback = [
                    { top: '5%', left: '5%' },
                    { top: '5%', right: '5%' },
                    { top: '50%', left: '0%' },
                    { top: '50%', right: '0%' },
                    { bottom: '10%', left: '10%' },
                    { bottom: '10%', right: '10%' }
                  ];

                  const pos = (positions && positions.length) ? positions[index] : fallback[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        scale: { delay: index * 0.1, duration: 0.5 },
                        opacity: { delay: index * 0.1, duration: 0.5 },
                        y: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                      className="absolute"
                      style={pos}
                    >
                      <div className={`w-64 p-4 rounded-xl bg-gradient-to-br ${notif.color} shadow-2xl`}>
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <notif.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white text-sm">{notif.platform}</div>
                            <div className="text-white/80 text-xs">{notif.user}</div>
                          </div>
                        </div>
                        <p className="text-white text-sm">{notif.message}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Merged view
              <motion.div
                key="merged"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
              >
                {/* Phone mockup */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-gray-800 p-6 shadow-2xl max-h-[500px] overflow-y-auto">
                    {/* Phone header */}
                    <div className="flex items-center justify-between mb-6 sticky top-0 bg-gradient-to-b from-gray-900 to-black pb-4 z-10">
                      <h3 className="text-xl font-bold text-white">NotifyBear</h3>
                      <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                        <span className="text-xs text-cyan-400 font-medium">{notifications.length} new</span>
                      </div>
                    </div>

                    {/* Notifications list */}
                    <div className="space-y-3">
                      {notifications.map((notif, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${notif.color} flex items-center justify-center flex-shrink-0`}>
                              <notif.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-white font-medium truncate">{notif.message}</div>
                              <div className="text-xs text-gray-400">{notif.user}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}