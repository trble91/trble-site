"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); //Timer for splash screen
    return () => clearTimeout(timer);
  }, []);

  /*

    import { Canvas } from '@react-three/fiber';
    
    function HomePage() {
      return (
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <Model />
        </Canvas>
      );
    }
    
    export default HomePage;
*/

  return (
    <AnimatePresence>0
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          style={styles.splashScreen}
        >
          <motion.div
            initial={{ x: 3, y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles}
          >
            <span> {<Logo />}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

//Background css details 
const styles = {
  splashScreen: {
    position: 'fixed',
    top: 0, 
    left: 0, 
    width: '100vw',
    height: '100vh',
    backgroundColor: "#FFFFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }
};

export default SplashScreen;