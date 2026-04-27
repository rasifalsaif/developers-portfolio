import { motion } from 'framer-motion';
import './Skills.css';

export const Skills = () => {
  const skills = [
    { title: 'Vanilla JavaScript', icon: 'images/icons/js.png', desc: 'Expert in core JS, DOM manipulation, and modern ES6+ features.' },
    { title: 'React', icon: 'images/icons/react.png', desc: 'Building complex single-page applications with hooks and state management.' },
    { title: 'Node JS', icon: 'images/icons/nodejs.png', desc: 'Developing scalable backend services and RESTful APIs.' },
    { title: 'MongoDB', icon: 'images/icons/mongo.png', desc: 'Managing NoSQL databases and data modeling for web apps.' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h3 className="section-title">What I Do</h3>
        <p className="section-description">
          I have more than 10 years experience building software for clients all over the world. 
          Below is a quick overview of my main technical skill sets.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.title} className="skill-icon" />
              <h4 className="skill-title">{skill.title}</h4>
              <p className="skill-desc">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
