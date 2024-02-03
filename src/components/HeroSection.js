import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="left-hero">
            <h1 className="heading"><span className="heading-span">Men </span>Shoes<br />Collection</h1>
          </div>
          <div className="right-hero">
            <div className="right-hero-img"><img src="images/shoe1.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, 56vw" srcSet="images/shoe1.jpg 500w, images/shoe1.jpg 800w, images/shoe1.jpg 851w" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
