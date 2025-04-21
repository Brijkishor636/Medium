import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-600 text-white py-12 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">MyBlog</h3>
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-white text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
