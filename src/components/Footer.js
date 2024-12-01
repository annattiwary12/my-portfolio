import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Anant Tiwary. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/anant-tiwary-59a27122a/" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/annattiwary12" className="text-gray-300 hover:underline">GitHub</a>
          <a href="https://leetcode.com/u/annattiwary12/" className="text-yellow-300 hover:underline">LeetCode</a>
          <a href="https://x.com/AnantTiwary11" className="text-black hover:underline">X</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
