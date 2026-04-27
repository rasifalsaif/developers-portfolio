import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="hero-greeting">HI, I am</h4>
          <h1 className="hero-title">Mary Hardy</h1>
          <p className="hero-description">
            Shot what able cold new see hold. Friendly as an betrayed formerly he. 
            Morning because as to society behaved moments.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <Download size={20} /> Download CV
            </button>
            <button className="btn-primary outline">
              <Mail size={20} /> Contact
            </button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="images/hardy.png" alt="Mary Hardy" className="hero-profile" />
        </motion.div>
      </div>
    </header>
  );
};
