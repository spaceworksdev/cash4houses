'use client';

import { useState } from 'react';
import { Heart, AlertTriangle, DollarSign, Home, TrendingDown, Briefcase } from 'lucide-react';

const situations = [
  { icon: Heart, label: 'Divorce', description: 'Need to settle quickly' },
  { icon: Home, label: 'Relocating', description: 'Moving to a new city' },
  { icon: AlertTriangle, label: 'Foreclosure', description: 'Facing foreclosure' },
  { icon: Home, label: 'Inherited Property', description: 'Don\'t want to keep it' },
  { icon: Briefcase, label: 'Job Loss', description: 'Change in circumstances' },
  { icon: DollarSign, label: 'Behind on Taxes', description: 'Tax debt solutions' },
];

const conditions = [
  { icon: Home, label: 'Major Repairs Needed', description: 'Old roof, foundation issues' },
  { icon: AlertTriangle, label: 'Fire/Water Damage', description: 'Disaster recovery' },
  { icon: Home, label: 'Hoarding/Neglected', description: 'Years of neglect' },
  { icon: DollarSign, label: 'Liens & Back Taxes', description: 'Legal complications' },
  { icon: TrendingDown, label: 'As-Is Inherited', description: 'Take it as-is' },
  { icon: Home, label: 'Commercial Debris', description: 'Extra cleanup needed' },
];

export default function AnySituationSection() {
  const [activeTab, setActiveTab] = useState<'situation' | 'condition'>('situation');

  const items = activeTab === 'situation' ? situations : conditions;
  const tabTitle = activeTab === 'situation' ? 'Any Reason' : 'Any Condition';

  return (
    <section className="py-20 md:py-28 bg-slate-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            We Buy in Any Situation, Any Condition
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 text-balance">
            Whatever your circumstances, we have a solution.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('situation')}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all ${activeTab === 'situation'
                  ? 'bg-emerald-500 text-white shadow-card'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
                }`}
            >
              Any Reason
            </button>
            <button
              onClick={() => setActiveTab('condition')}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all ${activeTab === 'condition'
                  ? 'bg-emerald-500 text-white shadow-card'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
                }`}
            >
              Any Condition
            </button>
          </div>
        </div>

        {/* Grid of items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-300">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-slate-600 font-medium mb-6">
            Don't see your situation? No problem. We buy houses in every scenario.
          </p>
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-card hover:shadow-hover transition-all">
            Tell Us Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
