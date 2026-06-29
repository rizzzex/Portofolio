"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import TiltedCard from "./TiltedCard";
import ElectricBorder from "./ElectricBorder";

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full py-32 px-6 lg:px-12 max-w-[1100px] mx-auto text-white pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40%" }}
        transition={{ duration: 2.8 }}
        className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center"
      >
        {/* Left: Title & Bio */}
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Me</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={20}
              textClassName="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify"
            >
              Saya adalah mahasiswa aktif S1 Teknik Informatika di Telkom University (2023 - saat ini). Dengan latar belakang SMK jurusan Multimedia, saya memiliki minat mendalam serta kemampuan teknis yang kuat dalam pengembangan web, pemrograman, hingga desain visual. Fokus utama saya saat ini adalah pada Frontend Development dan UI/UX Design. Saya berkomitmen untuk terus meningkatkan keterampilan saya dalam menciptakan antarmuka pengguna yang tidak hanya menarik secara visual, tetapi juga interaktif, mudah digunakan, dan responsif. Melalui berbagai pengalaman organisasi, asisten praktikum, hingga magang sebagai Web Developer, saya berambisi untuk terus menerapkan pengetahuan saya di dunia industri teknologi dan menghasilkan sistem perangkat lunak yang berkualitas tinggi.
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 w-full flex justify-center">
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            borderRadius={15}
            className="inline-block"
          >
            <TiltedCard
              imageSrc="/profile.png"
              altText="Profile Picture"
              captionText="It's Me!"
              containerHeight="auto"
              containerWidth="auto"
              imageHeight="auto"
              imageWidth="auto"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </ElectricBorder>
        </div>
      </motion.div>
    </section>
  );
}
