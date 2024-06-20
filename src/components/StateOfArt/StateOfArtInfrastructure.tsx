import React from 'react';
import './StateOfArtInfrastructure.scss';
import mobileImage1 from '../../assets/illustration-phones.svg';

const StateOfArtInfrastructure: React.FC = () => {
  return (
    <section className="state-of-art-infrastructure">
      <div className="content">
      <div className="image-content">
          <img src={mobileImage1} alt="Mobile Display 1" />
        </div>
        
        <div className="text-content">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StateOfArtInfrastructure;

