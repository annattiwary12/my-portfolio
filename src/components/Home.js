// src/components/Home.js
import React, { useState, useEffect } from 'react';

const roles = ["Full Stack Developer", "Frontend Developer", "Tech Enthusiast"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-800 text-white h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/background.jpg)' }} 
    >
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Anant Tiwary</h1>
        <p className="text-2xl mb-6">
          I am a <span className="font-semibold">{roles[currentRole]}</span>
        </p>
        <a
          href="/images/ANANT TIWARY (3).pdf" 
          className="inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;
