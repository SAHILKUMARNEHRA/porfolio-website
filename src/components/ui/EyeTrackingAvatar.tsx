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

  // AI Generated image of engineer with macbook and cold coffee
  const memojiUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=highly%20detailed%203d%20render%20of%20a%20young%20indian%20software%20engineer%20working%20on%20a%20macbook%20on%20a%20desk%20with%20a%20glass%20of%20cold%20coffee%20on%20the%20table%2C%20dark%20aesthetic%2C%20purple%20and%20blue%20neon%20lighting&image_size=square_hd";

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
        alt="Engineer working" 
        className="w-full h-full object-cover relative z-10 rounded-2xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
        style={{ transform: "translateZ(30px)" }}
      />
      
    </motion.div>
  );
}
