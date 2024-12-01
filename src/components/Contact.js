import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-black">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border rounded" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
