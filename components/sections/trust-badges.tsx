'use client';

import { Award, Star, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBadgesSection() {
  const badges = [
    { label: 'A+ BBB Rating', icon: Award },
    { label: '5-Star Google Reviews', icon: Star },
    { label: 'Industry Certified', icon: ShieldCheck },
    { label: 'Verified & Trusted', icon: Check },
  ];

  return (
    <section className="py-6 md:py-8 bg-white border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-8"
        >
          <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
            Trusted by:
          </p>
          <div className="h-px w-8 bg-slate-200 hidden sm:block" />
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
