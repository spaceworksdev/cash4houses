'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Loader2, Phone } from 'lucide-react';

const formSchema = z.object({
  address: z.string().min(5, 'Please enter a valid address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
});

type FormData = z.infer<typeof formSchema>;

export default function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Placeholder: submit to backend
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section style={{ backgroundImage:`url('https://cash4housesfla.com/wp-content/uploads/2021/11/phil-hearing-IYfp2Ixe9nM-unsplash.jpg')`}} className="relative bg-center bg-cover  min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
        {/* Background blur circles */}
        <div className="absolute bg-black/40 inset-0 overflow-hidden">
         
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Headline and subheadline */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4">
                  Sell Your House Fast, On Your Terms.
                </h1>
                <p className="text-lg md:text-xl text-blue-100 font-semibold mb-4">
                  Get a Fair Cash Offer in Just 24 Hours
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base text-blue-50">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>No Commissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>No Repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>No Showings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>Cash in 48 Hours</span>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-5 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">$0</div>
                  <div className="text-sm md:text-base text-blue-100 mt-1">in Hidden Fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-5 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">48H</div>
                  <div className="text-sm md:text-base text-blue-100 mt-1">Fast Closing</div>
                </div>
              </div>
            </div>

            {/* Right column - Lead form */}
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-elevated space-y-5"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    Get Your Cash Offer
                  </h2>
                  <p className="text-slate-600">
                    Completely free. No obligation.
                  </p>
                </div>

                {/* Address field */}
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700">
                    Property Address
                  </label>
                  <Input
                    id="address"
                    placeholder="123 Main St, Miami, FL 33101"
                    {...register('address')}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500">{errors.address.message}</p>
                  )}
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="(305) 555-0123"
                    type="tel"
                    {...register('phone')}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    {...register('email')}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Success message */}
                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 font-medium">
                      Thank you! We'll contact you shortly with your cash offer.
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 rounded-lg text-base md:text-lg flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Your Offer</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {/* Privacy note */}
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Your information is secure and won't be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-slate-200 p-4 shadow-elevated z-40">
        <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg text-lg flex items-center justify-center gap-2 transition-all active:scale-95">
          <Phone className="w-5 h-5" />
          <span>Call Now (305) 555-0123</span>
        </button>
      </div>

      {/* Add padding to body to prevent content overlap on mobile */}
      <style>{`
      @media (max-width: 768px) {
        body {
          padding-bottom: 100px;
        }
      }
    `}</style>
    </>
  );
}
