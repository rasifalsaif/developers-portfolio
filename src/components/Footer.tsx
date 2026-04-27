import './Footer.css';

export const Footer = () => {
  const socials = [
    { name: 'Facebook', icon: 'images/icons/facebook.png' },
    { name: 'Instagram', icon: 'images/icons/insta.png' },
    { name: 'Twitter', icon: 'images/icons/twitter.png' }
  ];

  return (
    <footer className="footer glass">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Let's Connect</h3>
          <p className="footer-desc">
            Please fill out the form on this section to contact with me or call between 
            9:00 A.M and 8:00 P.M, Monday through Friday.
          </p>
          <div className="footer-socials">
            {socials.map((social, i) => (
              <a key={i} href={`#${social.name.toLowerCase()}`} className="social-link">
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-form-container">
          <h3 className="footer-title">Let's Message Me</h3>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="glass" />
            <input type="email" placeholder="Your Email" className="glass" />
            <textarea placeholder="Message" rows={5} className="glass"></textarea>
            <button className="btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Mary Hardy. All rights reserved.</p>
      </div>
    </footer>
  );
};
