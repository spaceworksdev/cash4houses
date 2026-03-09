'use client';

import { Zap, DollarSign, Home, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const valueProps = [
  {
    icon: Zap,
    title: 'Get Cash Fast',
    description: 'Receive a fair cash offer within 24 hours with no waiting or delays.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: DollarSign,
    title: 'No Hidden Costs',
    description: 'Zero commissions, no closing costs hidden fees. You keep 100% of the offer.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Home,
    title: 'Sell As-Is',
    description: 'No repairs needed. We buy homes in any condition—damaged, outdated, or inherited.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    description: 'Your transaction is completely confidential. No strangers in your home.',
    accent: 'from-violet-500 to-purple-500',
  },
];

export default function ValuePropsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 lg:py-32 bg-slate-50/80 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-emerald-500 font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Choose Cash 4 Houses?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            We make selling your home simple, fast, and fair.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-7 md:p-8 shadow-card hover:shadow-premium transition-all duration-500 border border-slate-100/80 hover:border-slate-200/80 hover:-translate-y-1"
              >
                {/* Subtle gradient line on top */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${prop.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2.5">
                  {prop.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
