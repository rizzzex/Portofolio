"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import TrueFocus from "./TrueFocus";
import BorderGlow from "./BorderGlow";

const techCategories = [
  {
    title: "Technology Stack",
    skills: "figma,js,html,css,bootstrap,python,git,cpp,php,mysql"
  },
  {
    title: "Tools",
    skills: "postman,vscode"
  },
  {
    title: "I'd like to learn next",
    skills: "react,nodejs,laravel"
  },
  {
    title: "Socials",
    skills: "github,instagram",
    links: [
      "https://github.com/rizzzex", 
      "https://www.instagram.com/rizzz.ex"
    ]
  }
];

export default function TechStackSection() {
  return (
    <section className="relative z-10 w-full py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-white pointer-events-auto">
      <div className="flex flex-col items-center mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <TrueFocus
            sentence="TECH STACK"
            manualMode={false}
            blurAmount={4}
            borderColor="#ffffff"
            glowColor="rgba(255, 255, 255, 0.5)"
            animationDuration={2}
            pauseBetweenAnimations={0.2}
          />
        </motion.div>

        <div className="text-center max-w-2xl">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={2}
            blurStrength={3}
            textClassName="text-lg md:text-xl text-gray-400 font-light"
          >
            Teknologi dan alat yang saya gunakan untuk mewujudkan ide menjadi produk digital yang fungsional dan menarik.
          </ScrollReveal>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <BorderGlow
            className="p-8 md:p-12 shadow-2xl transition-colors duration-500"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0d1117"
            borderRadius={32}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0}
          >
            <div className="flex flex-col gap-10">
              {techCategories.map((category, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-medium text-gray-200 mb-3">
                    {category.title}:
                  </h3>
                  <div className="border-b border-white/10 w-full max-w-xl mb-6" />
                  
                  {category.links ? (
                    <div className="flex gap-4">
                      {category.skills.split(',').map((skill, index) => (
                        <a 
                          key={index}
                          href={category.links[index]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform duration-300"
                        >
                          <img
                            src={`https://skillicons.dev/icons?i=${skill}`}
                            alt={skill}
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={`https://skillicons.dev/icons?i=${category.skills}`}
                      alt={category.title}
                      className="max-w-full hover:scale-[1.02] transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
