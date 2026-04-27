import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import './Resume.css';

export const Resume = () => {
  const education = [
    { title: 'Master in Computer Engineering', subtitle: 'Harvard University / 2015 - 2017', desc: 'Specialized in distributed systems and advanced algorithm design.' },
    { title: 'B.Sc. in Computer Science', subtitle: 'MIT / 2011 - 2015', desc: 'Foundational studies in software engineering and data structures.' }
  ];

  const experience = [
    { title: 'Sr. Front End Developer', subtitle: 'Apple Inc / 2020 - Current', desc: 'Leading the UI team for Apple Music web interface.' },
    { title: 'Jr. Front End Developer', subtitle: 'Dribbble Inc / 2018 - 2020', desc: 'Implemented pixel-perfect designs for global creative communities.' }
  ];

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h3 className="section-title">A summary of My Resume</h3>
        
        <div className="resume-columns">
          <div className="resume-column">
            <h4 className="column-title"><GraduationCap size={24} /> My Education</h4>
            {education.map((item, i) => (
              <ResumeItem key={i} {...item} />
            ))}
          </div>

          <div className="resume-column">
            <h4 className="column-title"><Briefcase size={24} /> My Experience</h4>
            {experience.map((item, i) => (
              <ResumeItem key={i} {...item} />
            ))}
          </div>
        </div>

        <div className="resume-footer">
          <button className="btn-primary">
            <Download size={20} /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ title, subtitle, desc }: any) => (
  <motion.div 
    className="resume-item"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h5 className="item-title">{title}</h5>
    <h6 className="item-subtitle">{subtitle}</h6>
    <p className="item-desc">{desc}</p>
    <div className="item-divider"></div>
  </motion.div>
);
