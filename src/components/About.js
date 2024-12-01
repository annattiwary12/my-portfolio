import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src="/images/background..jpg" alt="Anant Tiwary" className=" aspect-square w-34 h-40 mx-auto"/>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Passionate and skilled Frontend Developer with experience in designing and developing responsive web applications.
            Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js. Adept at translating design mockups into
            functional web pages. Seeking to leverage my skills and experience to contribute to dynamic web development projects.
          </p>
          <p className="text-lg mb-4">
            <strong>Location:</strong> Muzaffarpur, Bihar<br/>
            <strong>Phone:</strong> 7643049562<br/>
            <strong>Email:</strong> tiwaryanant81@gmail.com<br/>
            <strong>LinkedIn:</strong> Anant Tiwary
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
