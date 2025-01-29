"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-[var(--secondary)]/10 to-[var(--background)]">
        <div className="container mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Request a Free Appointment Your First Step Toward Exceptional Solutions
              </h1>
              <p className="text-lg md:text-xl mb-8">
               We invite you to take advantage of our complimentary consultation service. we belive that every succesful project begins with a clear understanding of your unique  needs and goal.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Contact Us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
              },
              {
                icon: Mail,
                title: "Email Us",
                details: ["info@construction.com", "support@construction.com"],
              },
              {
                icon: MapPin,
                title: "Visit Us",
                details: ["123 Construction Ave", "New York, NY 10001"],
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-[var(--secondary)]/5 hover:bg-[var(--secondary)]/10 transition-all"
              >
                <contact.icon className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">{contact.title}</h3>
                {contact.details.map((detail, i) => (
                  <p key={i} className="text-[var(--text-body)]">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                    Project Type*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                  >
                    <option value="">Select Project Type</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="infrastructure">Infrastructure Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-2">
                    Message*
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)]/20 focus:outline-none focus:border-[var(--primary)]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--primary)]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-[var(--secondary)]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">
                Our Business Hours
              </h2>
              <div className="flex items-center justify-center gap-2 text-[var(--text-body)]">
                <Clock className="w-5 h-5 text-[var(--primary)]" />
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              <p className="text-[var(--text-body)]">
                We'll get back to you within 24 hours during business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
