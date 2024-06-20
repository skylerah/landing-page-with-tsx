import React from 'react';
import './DesignedForFuture2.scss';
import editorImage from '../../assets/illustration-laptop-desktop.svg'; // Ensure you have this image in the specified path

const DesignedForFuture2: React.FC = () => {
  return (
    <section className="designed-for-future">
      <div className="content">
        <div className="image-content">
          <img src={editorImage} alt="Extensible Editor" />
        </div>
        <div className="text-content">
          <div className="text-block">
            <h3>Free, Open, Simple</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
          </div>
          <div className="text-block">
            <h3>Powerfull tooling</h3>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your 
              blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DesignedForFuture2;
