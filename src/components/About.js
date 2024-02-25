import React from 'react';
import '../About.css'

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className='text-center pb-3'>About Our Laptop Store</h1>
        <p style={{textAlign:"justify"}}>Welcome at our store, we're passionate about laptops and committed to helping you find the perfect one for your needs. We offer a curated selection of top-performing laptops from leading brands, ensuring you have the latest technology and features at your fingertips. Our team of experts stays up-to-date on the industry trends and understands the diverse needs of laptop users, from casual home computing to demanding professional tasks.<br/><br/>
        Shopping for a laptop shouldn't be stressful. At our store, we make it easy and affordable to find the perfect match for your budget and needs. We offer competitive prices on all our laptops, with regular sales and special offers to help you save. Plus, enjoy convenient features like free shipping, secure online payments, and hassle-free returns.</p>
      </div>
    </div>
  );
};

export default AboutPage;