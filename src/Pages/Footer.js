import './Pages.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const socialLinks = [
    { img: 'img/facebook.png', url: 'https://facebook.com' },
    { img: 'img/youtube.png', url: 'https://youtube.com' },
    { img: 'img/instagram.png', url: 'https://instagram.com' },
    // { img: 'img/whatsapp.png', url: 'https://api.whatsapp.com/send?phone=+1234567890' },
  ];

  const usefulLinks = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  const contactInfo = [
    { text: '+91 1234567890' },
    { text: '+91 1234567890' },
    { text: '123 Tech Street, Innovation City, IC 12345' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo and Content */}
          <div className="col-md-3">
            <img src='img/logo.png' alt="ddff" width={150}/>
            <p>Boost your brand with our expert digital marketing strategies. Reach the right audience and grow your business online.</p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index}>{info.text}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.img} alt="social" width={30} height={30} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="footer-hr" />

        {/* Copyright Section */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="copyright">
              &copy; {new Date().getFullYear()}
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className='ps-2'>
                BM TechX
              </a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
