
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Cpu, Rocket, Newspaper, Bot, Database, Menu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function NotionTech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-gray-800 backdrop-blur-md bg-black/40 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Notion Tech
        </h1>
        <div className="space-x-8 hidden md:block text-sm font-medium">
          <a href="#solutions" className="hover:text-cyan-400 transition">AI Solutions</a>
          <a href="#blog" className="hover:text-cyan-400 transition">Innovation Blog</a>
          <a href="#subscribe" className="hover:text-cyan-400 transition">Subscribe</a>
        </div>
        <Menu className="md:hidden" />
      </nav>

      <section className="text-center py-28 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight relative"
        >
          Building Tomorrow with Artificial Intelligence
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 relative">
          Notion Tech is your gateway to AI innovation, smart automation, emerging technologies, and the future of digital transformation.
        </p>
        <div className="space-x-4 relative">
          <Button className="rounded-2xl px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
            Explore AI Tools
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl px-8 py-6 text-lg border-gray-700 hover:bg-gray-800 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
