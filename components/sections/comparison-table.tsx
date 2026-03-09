'use client';

import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Cash Offer Timeline',
    us: 'Within 24 hours',
    traditional: '6-12 months on market',
  },
  {
    feature: 'Repairs Required',
    us: 'None – buy as-is',
    traditional: 'Expensive repairs needed',
  },
  {
    feature: 'Commission Costs',
    us: 'Zero commissions',
    traditional: '5-6% commission (25k-100k+)',
  },
  {
    feature: 'Closing Timeline',
    us: 'You choose the date',
    traditional: 'Buyer controls timeline',
  },
  {
    feature: 'Open Houses/Showings',
    us: 'None – private process',
    traditional: 'Endless showings & foot traffic',
  },
  {
    feature: 'Transparency',
    us: 'Honest, no surprises',
    traditional: 'Commission incentive conflicts',
  },
  {
    feature: 'Closing Guarantee',
    us: 'Cash closing guaranteed',
    traditional: 'Deal can fall through',
  },
  {
    feature: 'Keep Your Equity',
    us: '100% of offer amount',
    traditional: 'Reduced by agent fees',
  },
];

export default function ComparisonTableSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Cash 4 Houses vs. Traditional Realtor
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-balance">
            See why thousands of Florida homeowners choose us.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-bold text-slate-900 bg-white border-b-2 border-slate-200">
                  Feature
                </th>
                <th className="text-center py-4 px-6 font-bold text-white bg-emerald-500 rounded-t-xl">
                  Cash 4 Houses
                </th>
                <th className="text-center py-4 px-6 font-bold text-slate-900 bg-slate-100 rounded-t-xl">
                  Traditional Realtor
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-slate-200 hover:bg-slate-100/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center bg-emerald-50">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{row.us}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center bg-slate-50">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-600">{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-card">
              <div className="px-4 py-3 bg-slate-100 border-b border-slate-200">
                <p className="font-semibold text-slate-900">{row.feature}</p>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="px-4 py-4 border-r border-slate-200 bg-emerald-50">
                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">Cash 4 Houses</p>
                  <p className="text-sm text-slate-600 mt-1">{row.us}</p>
                </div>
                <div className="px-4 py-4 bg-slate-50">
                  <div className="flex items-start gap-2 mb-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">Traditional</p>
                  <p className="text-sm text-slate-600 mt-1">{row.traditional}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-card hover:shadow-hover transition-all">
            Get Your Cash Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}
