"use client";

import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Aplikasi e-commerce modern dengan fitur keranjang belanja, checkout, dan integrasi payment gateway. Dibangun menggunakan Next.js dan Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Sistem manajemen tugas kolaboratif bergaya Kanban untuk tim developer. Mendukung real-time updates dan otentikasi user.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "#"
  },
  {
    id: 3,
    title: "UI/UX Portfolio Design",
    description: "Desain antarmuka pengguna untuk aplikasi mobile banking dengan fokus pada pengalaman pengguna yang intuitif dan aksesibilitas.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    tech: ["Figma", "Prototyping", "Wireframing"],
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative z-10 w-full py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-white pointer-events-auto">
      <div className="flex flex-col items-center mb-20 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tight uppercase text-center"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Projects</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl font-light text-center max-w-2xl"
        >
          Beberapa karya dan studi kasus terpilih yang menunjukkan proses berpikir dan keterampilan teknis saya.
        </motion.p>
      </div>

      <div className="flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center py-20"
        >
          <div className="px-12 py-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Coming Soon
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
