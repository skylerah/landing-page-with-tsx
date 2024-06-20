import React from 'react';
import './MainSection.scss';
import editor from '../../assets/illustration-editor-desktop.svg';

const MainSection: React.FC = () => {
  return (
    <main>
      <section className="section">
        <h2>Designed for the future</h2>
        <h2>Introducing an extensible editor...</h2>
        <p>Blogr features an exceedingly intuitive interface which lets you focus
on one thing: creating content. The editor supports management of
multiple blogs and allows easy manipulation of embeds such as images,
videos, and Markdown. Extensibility with plugins and themes provide
easy ways to add functionality or change the looks of a blog.</p>
        <img src={editor} alt="Extensible Editor" />
      </section>
      <section className="section">
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speed in mind...</p>
        <img src="/path-to-your-image" alt="Infrastructure" />
      </section>
      <section className="section">
        <h2>Free, open, simple</h2>
        <p>Blogr is a free and open source application...</p>
        <img src="/path-to-your-image" alt="Open Source" />
      </section>
    </main>
  );
};

export default MainSection;
