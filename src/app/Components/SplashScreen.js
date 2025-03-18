"use client";
"use strict";


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200); // Timer for splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          style={styles.splashScreen}
        >
          <motion.div
            initial={{ x: 0, y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles.logoContainer}
          >
            <Logo />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Background CSS details
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
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default SplashScreen;