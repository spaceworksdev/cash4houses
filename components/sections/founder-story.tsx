'use client';

import { Play } from 'lucide-react';

export default function FounderStorySection() {
  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image/Video placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated h-96 md:h-full md:min-h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group">
              {/* Placeholder for image - in production, replace with actual image */}
              <div className="absolute inset-0 bg-slate-400/20"></div>
              <button className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-elevated hover:shadow-hover transition-all transform hover:scale-110">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </button>
              <p className="absolute bottom-6 text-white text-sm font-medium text-center px-4">
                Watch John explain our process
              </p>
            </div>
          </div>

          {/* Right: Story text */}
          <div className="order-1 md:order-2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
                We're Not Just a Company – We're Your Neighbors
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-balance">
                As a family-owned Florida business, we prioritize trust, respect, and integrity in every transaction.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Founded on the principle that homeowners deserve a fair, transparent alternative to traditional real estate, Cash 4 Houses was born from a simple belief: selling your home shouldn't be stressful, expensive, or time-consuming.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We understand the challenges you face—whether it's financial pressure, a life change, or a property that's become a burden. You aren't just a transaction to us. We're committed to making the process smooth, fair, and respectful of your needs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With thousands of happy homeowners across Florida, we've built our reputation on doing the right thing, every single time. Let us show you why Cash 4 Houses is the better choice.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">John Martinez</p>
                  <p className="text-slate-600 text-sm">Founder & CEO, Cash 4 Houses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
