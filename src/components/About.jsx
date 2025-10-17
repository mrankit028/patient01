// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          About Jarurat Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Jarurat Care is a cutting-edge patient records dashboard designed to streamline healthcare management.
          Our platform provides healthcare professionals with an intuitive and efficient way to manage patient information,
          ensuring quick access to critical data when it matters most.
        </motion.p>
        <motion.div
          className="features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="feature">
            <h3>Secure & Reliable</h3>
            <p>Advanced security measures to protect sensitive patient data.</p>
          </div>
          <div className="feature">
            <h3>User-Friendly Interface</h3>
            <p>Intuitive design that makes navigation and data entry effortless.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Updates</h3>
            <p>Instant synchronization across all devices and platforms.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
