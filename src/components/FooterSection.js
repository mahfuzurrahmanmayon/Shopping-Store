import React from 'react';

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="footer-text">
              <div>About</div>
              <div>Company</div>
              <div>Locations</div>
              <div>Contact</div>
              <div>Hours</div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-text">
              <div>Twitter</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Linkedin</div>
            </div>
          </div>
          <div className="footer-box">
            <div className="newsletter-box"><input /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
