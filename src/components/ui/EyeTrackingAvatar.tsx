import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function EyeTrackingAvatar() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  // Transform the -0.5 to 0.5 range into degrees for a 3D tilt effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Generated 3D Memoji style image
  const memojiUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=highly%20detailed%203d%20apple%20memoji%20style%20avatar%20of%20a%20young%20indian%20guy%20with%20beard%2C%20glasses%2C%20and%20black%20headphones%20looking%20forward%2C%20dark%20transparent%20background&image_size=square";

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-16 group cursor-pointer"
    >
      {/* Background glow that stays still */}
      <div 
        className="absolute inset-0 bg-purple-600/30 blur-[80px] rounded-full group-hover:bg-purple-500/50 transition-colors duration-500" 
        style={{ transform: "translateZ(-50px)" }}
      />
      
      {/* The 3D avatar image with tilt effect */}
      <img 
        src={memojiUrl} 
        alt="Memoji Avatar" 
        className="w-full h-full object-cover relative z-10 rounded-2xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
        style={{ transform: "translateZ(30px)" }}
      />
      
    </motion.div>
  );
}
