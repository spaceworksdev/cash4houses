'use client';

import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Company info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Cash 4 Houses</h3>
            <p className="text-slate-300 text-sm mb-6">
              Trusted by thousands of Florida homeowners. We buy houses in any condition, fast.
            </p>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Miami-Dade County
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Broward County
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Palm Beach County
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Hillsborough County
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  All of Florida
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">(305) 555-0123</p>
                  <p className="text-slate-500 text-xs">Available 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">hello@cash4houses.com</p>
                  <p className="text-slate-500 text-xs">Response within 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">Florida</p>
                  <p className="text-slate-500 text-xs">Serving all counties</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Get Your Cash Offer?
          </h3>
          <p className="text-emerald-100 mb-6">
            Completely free. No obligation. Get started today.
          </p>
          <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl">
            Get Cash Offer
          </button>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-700 pt-8 grid md:grid-cols-2 gap-6 md:gap-4 items-center text-sm text-slate-400">
          <div>
            <p>© 2026 Cash 4 Houses. All rights reserved. We buy houses for cash in Florida.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:justify-end">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
