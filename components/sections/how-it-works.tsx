'use client';

import { MessageCircle, HandshakeIcon, KeyRound } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: 1,
    title: 'Contact Us',
    description: 'Tell us about your situation and property.',
  },
  {
    icon: HandshakeIcon,
    step: 2,
    title: 'Get Your Offer',
    description: 'Receive a fair cash offer within 24 hours.',
  },
  {
    icon: KeyRound,
    step: 3,
    title: 'Close & Get Paid',
    description: 'Choose your closing date. We handle everything.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-balance">
            Three simple steps to sell your house fast.
          </p>
        </div>

        {/* Desktop timeline - horizontal */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between gap-4">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex-1">
                  <div className="flex flex-col items-center">
                    {/* Icon circle */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center border-2 border-emerald-200 shadow-card">
                        <Icon className="w-10 h-10 text-emerald-600" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-10 -right-[calc(50%-40px)] w-[calc(100%-80px)] h-1 bg-gradient-to-r from-emerald-400 to-emerald-200 mt-6"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline - vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center border-2 border-emerald-200 shadow-card">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-emerald-300 to-emerald-100 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
