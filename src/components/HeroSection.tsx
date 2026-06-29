import Lanyard from "./Lanyard";
import BlurText from "./BlurText";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] pointer-events-auto">
      <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-30 translate-x-12 md:translate-x-24">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          combinedImage="/photo-qr.png"
          imageFit="cover"
        />
      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-center w-full h-full pointer-events-none">
        <div className="w-full md:w-2/3 lg:w-3/5 flex-col justify-center items-center text-center flex pointer-events-none ml-12 md:ml-32 whitespace-nowrap">
          <BlurText
            text="RIZKULLOH"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.8] font-black tracking-tight uppercase select-none drop-shadow-2xl text-white m-0 p-0 justify-center"
          />
          <BlurText
            text="ALPRIYANSAH"
            delay={150}
            animateBy="letters"
            direction="bottom"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.8] font-black tracking-tight uppercase select-none drop-shadow-2xl text-gray-400 m-0 p-0 justify-center"
          />
        </div>
      </div>
    </section>
  );
}
