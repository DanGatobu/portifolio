// Import all required icons from react-icons
import { 
    FaPython, 
    FaReact, 
    FaDatabase 
  } from 'react-icons/fa';
  import { 
    SiFastapi, 
    SiDjango, 
    SiGoogleappsscript, 
    SiTailwindcss, 
    SiFlask, 
    SiSelenium, 
    SiTensorflow, 
    SiQt, 
    SiMongodb, 
    SiVercel, 
    SiDocker, 
    SiJupyter 
  } from 'react-icons/si';
  import { motion } from 'framer-motion';
  
  // Component Definition
  const DanTechnologies: React.FC = () => {
    // Animation Variants
    const iconVariants = (duration: number) => ({
      initial: { y: -10 },
      animate: { y: [10, -10], transition: { duration, repeat: Infinity, ease: 'linear', repeatType: 'reverse' } },
    });
  
    return (
      <div className="border-b border-neutral-800 pb-24">
        {/* Header */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
  
        {/* Icons Grid */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Render All Icons */}
          {[ 
            { icon: FaPython, color: "text-cyan-500" },
            { icon: FaReact, color: "text-cyan-500" },
            { icon: FaDatabase, color: "text-cyan-500" },
            { icon: SiFastapi, color: "text-green-500" },
            { icon: SiDjango, color: "text-green-600" },
            { icon: SiGoogleappsscript, color: "text-yellow-500" },
            { icon: SiTailwindcss, color: "text-blue-500" },
            { icon: SiFlask, color: "text-blue-500" },
            { icon: SiSelenium, color: "text-green-400" },
            { icon: SiTensorflow, color: "text-orange-500" },
            { icon: SiQt, color: "text-teal-500" },
            { icon: SiMongodb, color: "text-green-600" },
            { icon: SiVercel, color: "text-blue-500" },
            { icon: SiDocker, color: "text-blue-600" },
            { icon: SiJupyter, color: "text-orange-500" },
          ].map(({ icon: Icon, color }, index) => (
            <motion.div
              key={index}
              animate="animate"
              variants={iconVariants(2.5)}
              initial="initial"
              className={`rounded-2xl border-4 border-neutral-800 p-4`}
            >
              <Icon className={`text-7xl ${color} mx-4`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };
  
  export default DanTechnologies;
  