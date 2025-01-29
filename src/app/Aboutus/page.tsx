"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Trophy, Target, Award, Users, Shield, ChevronRight } from 'lucide-react';
import ServicesSection from '../component/About/ServiceSection';

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-[var(--secondary)]/10 to-[var(--background)]">
        <div className="container mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Excellence in
                <span className="text-[var(--primary)] block mt-2">Modern Construction</span>
              </h1>
              <p className="text-[var(--text-body)] text-lg md:text-xl mb-8">
                Transforming skylines and creating landmarks since 1998. We blend innovative design with sustainable construction practices to build tomorrows infrastructure today.
              </p>
              <button 
                className="bg-[var(--primary)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--primary)]/90 transition-colors"
              >
                Explore Our Legacy
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Modern Construction Project"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30+", text: "Years of Excellence", icon: Trophy },
              { number: "850+", text: "Projects Delivered", icon: Building2 },
              { number: "98%", text: "Client Retention", icon: Users },
              { number: "75+", text: "Industry Awards", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-[var(--secondary)]/5 hover:bg-[var(--secondary)]/10 transition-all hover:shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-[var(--primary)]">{stat.number}</h3>
                <p className="text-[var(--text-body)] font-medium">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--primary)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">
                Our Vision &
                <span className="block mt-2">Core Principles</span>
              </h2>
              <p className="text-white/90 text-lg">
                We are committed to pushing the boundaries of construction excellence while maintaining unwavering dedication to sustainability and innovation. Our approach combines cutting-edge technology with time-tested craftsmanship.
              </p>
              <div className="space-y-6">
                {[
                  "Sustainable Innovation",
                  "Engineering Excellence",
                  "Safety First Culture",
                  "Environmental Stewardship"
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="text-white w-6 h-6" />
                    <span className="text-white text-lg font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt="Our Vision in Action"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Specialized
              <span className="text-[var(--primary)] block mt-2">Solutions</span>
            </h2>
            <p className="text-[var(--text-body)] text-lg">
              Delivering excellence across every aspect of construction and infrastructure development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Commercial Development",
                description: "Creating state-of-the-art commercial spaces that combine functionality with architectural excellence."
              },
              {
                icon: Shield,
                title: "Industrial Construction",
                description: "Building robust industrial facilities with advanced technical specifications and safety standards."
              },
              {
                icon: Target,
                title: "Infrastructure Projects",
                description: "Developing critical infrastructure that connects communities and powers progress."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <service.icon className="w-14 h-14 text-[var(--primary)] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-dark)]">
                  {service.title}
                </h3>
                <p className="text-[var(--text-body)] mb-8">
                  {service.description}
                </p>
                <button 
                  className="border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--secondary)]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold">
                Ready to Build
                <span className="text-[var(--primary)] block mt-2">Something Extraordinary?</span>
              </h2>
              <p className="text-[var(--text-body)] text-lg">
                From concept to completion, we are here to transform your construction vision into reality. Let us create something remarkable together.
              </p>
              <button 
                className="bg-[var(--primary)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--primary)]/90 transition-colors mt-8"
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
