import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
  const info = [
    { label: 'Name:', value: 'Mary Hardy' },
    { label: 'Email:', value: 'info@gmail.com' },
    { label: 'Date of birth:', value: '11 November 1987' },
    { label: 'From:', value: 'Los Angeles, USA' }
  ];

  return (
    <section className="about-section secondary-bg" id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">About Me</h3>
          <p className="section-description">
            I'm a designer & developer with a passion for web design. I enjoy developing 
            simple, clean and slick websites that provide real value to the end user. 
            Delivering work within time and budget is my motto.
          </p>

          <div className="about-grid">
            {info.map((item, index) => (
              <div key={index} className="about-card glass">
                <p className="about-label">{item.label}</p>
                <p className="about-value">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
