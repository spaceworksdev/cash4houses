'use client';

import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Maria S.',
    location: 'Miami-Dade County',
    rating: 5,
    text: 'The whole process took just 2 weeks. No hassle, fair offer, and they handled all the paperwork. I\'d recommend Cash 4 Houses to anyone!',
    highlight: ['fast process', 'fair offer'],
  },
  {
    name: 'James T.',
    location: 'Broward County',
    rating: 5,
    text: 'Going through a divorce was stressful, but Cash 4 Houses made selling my house so simple. They were professional and compassionate.',
    highlight: ['simple', 'professional'],
  },
  {
    name: 'Linda R.',
    location: 'Palm Beach County',
    rating: 5,
    text: 'My house needed major repairs, but they bought it as-is. No contractors, no months on the market. Exactly what I needed.',
    highlight: ['as-is', 'fast'],
  },
  {
    name: 'David M.',
    location: 'Hillsborough County',
    rating: 5,
    text: 'Facing foreclosure was scary, but Cash 4 Houses came through. They gave me a fair offer and helped me move forward with my life.',
    highlight: ['fair offer', 'helped'],
  },
  {
    name: 'Patricia L.',
    location: 'Duval County',
    rating: 5,
    text: 'After inheriting my parents\' home, I didn\'t know what to do. Cash 4 Houses made it easy and stress-free. Highly recommended!',
    highlight: ['easy', 'stress-free'],
  },
  {
    name: 'Robert K.',
    location: 'Orange County',
    rating: 5,
    text: 'I was moving out of state and needed a quick sale. Cash 4 Houses delivered exactly what they promised. Outstanding service!',
    highlight: ['quick sale', 'promised'],
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Loved by Homeowners Across Florida
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-balance">
            See what our satisfied customers have to say.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 lg:p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-700 leading-relaxed mb-6 text-sm lg:text-base">
                  {testimonial.text.split(' ').map((word, i) => {
                    const isHighlight = testimonial.highlight.some(
                      (h) => word.toLowerCase().includes(h.toLowerCase())
                    );
                    return isHighlight ? (
                      <span key={i} className="font-bold text-emerald-600">
                        {word}{' '}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    );
                  })}
                </p>

                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <div className="bg-slate-50 rounded-xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                {testimonials[currentIndex].text.split(' ').map((word, i) => {
                  const isHighlight = testimonials[currentIndex].highlight.some(
                    (h) => word.toLowerCase().includes(h.toLowerCase())
                  );
                  return isHighlight ? (
                    <span key={i} className="font-bold text-emerald-600">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  );
                })}
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-slate-600">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-emerald-500 w-8' : 'bg-slate-300'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
