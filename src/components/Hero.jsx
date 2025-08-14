import React from "react";
import { motion } from "framer-motion";
// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
};

function Hero() {
  return (
    <motion.div 
      className="relative h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Video background */}
      <motion.video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-0"
        variants={fadeIn}
      >
        <source src="../video/tulum.mp4" type="video/mp4" />
        <source src="./video/sunset.webm" type="video/webm" />
        <source src="./video/sunset.ogv" type="video/ogv" />
        <source src="./video/cabaña.mov" type="video/mov" />
      </motion.video>
      
      {/* Overlay and content */}
      <div className="relative flex items-center justify-center text-center bg-black bg-opacity-50 h-full w-full z-10">
        <div className="container mx-auto px-4">
          <motion.small 
            className="text-sm text-labelTw opacity-80 tracking-wider font-montserrat block mb-2"
            variants={itemVariants}
          >
            CABAÑAS KIIN
          </motion.small>
          
          <motion.h3 
            className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight font-montserrat"
            variants={itemVariants}
          >
            EL DESCANSO QUE BUSCA TU ALMA,<br className="hidden sm:block"/>EN EL SILENCIO QUE MERECE TU MENTE
          </motion.h3>
          
          {/* Coming soon message */}
          <motion.div
            className="max-w-md mx-auto backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20"
            variants={itemVariants}
          >
            <h4 className="text-2xl font-semibold text-white mb-4">
              Próximamente
            </h4>
            <p className="text-white/80 mb-8">
              Estamos preparando algo especial para ti. Vuelve pronto y sé el
              primero en enterarte.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primaryTw hover:bg-secondaryTw text-white font-medium py-3 px-10 rounded-full shadow-lg transition-all duration-300"
            >
              Notificarme
            </motion.button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            variants={itemVariants}
          >
            <a href="#first_section" className="block">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;