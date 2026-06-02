import React from "react";
import { motion } from "framer-motion";

const projects = [
  { img: "/images/project-1.png", alt: "Modern building exterior" },
  { img: "/images/project-2.png", alt: "Luxury lobby elevator" },
  { img: "/images/project-3.png", alt: "Villa home elevator" },
  { img: "/images/project-4.png", alt: "Corporate office elevator" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase"
          >
            Công trình tiêu biểu
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg uppercase tracking-wider border-b-2 border-secondary pb-1">Xem dự án</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
