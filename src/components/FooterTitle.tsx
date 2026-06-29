import ScrollVelocity from "./ScrollVelocity";

export default function FooterTitle() {
  return (
    <div className="relative z-20 w-full pb-12 overflow-hidden">
      <ScrollVelocity
        texts={['FRONTEND WEB DEVELOPER', 'FRONTEND WEB DEVELOPER']} 
        velocity={60}
        className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase px-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        numCopies={4}
        damping={50}
        stiffness={400}
      />
    </div>
  );
}
