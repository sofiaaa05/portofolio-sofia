import React from 'react';
import profileImage from '../assets/images/aku.webp';

// Import social media icons dari folder assets
import igIcon from "../assets/images/ig.png";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";

const ProfileCard = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return React.createElement(
    'section',
    {
      className: "w-full bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF]"
    },
    React.createElement(
      'div',
      {
        className:
          "min-h-screen pt-16 md:pt-28 pb-16 md:pb-40 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 flex flex-col lg:flex-row items-start gap-x-24 gap-y-8 lg:gap-y-0"
      },
      // kiri
      React.createElement(
        'div',
        { className: "w-full lg:w-1/2 max-w-2xl text-left", key: "left" },
        [
          React.createElement('p', { className: "text-[#7755FF] mb-2 font-bold text-sm", key: "intro" }, "Hello, I'm Sofia Nugraheni"),
          React.createElement(
            'h1',
            { className: "text-[#1E1E2F] font-black text-5xl lg:text-6xl leading-[1.05] mb-6", key: "title" },
            [
              React.createElement('span', { key: 'line1', className: 'block' }, "UI/UX Designer &"),
              React.createElement('span', { key: 'line2', className: 'block mt-2' }, "System Analyst Enthusiast")
            ]
          ),
          React.createElement(
            'p',
            { className: "text-gray-600 mb-8 leading-relaxed max-w-lg", key: "desc" },
            "Berfokus pada perancangan pengalaman pengguna yang intuitif dengan pendekatan analisis kebutuhan dan proses bisnis sebagai dasar pengembangan solusi digital, serta pemahaman dasar pengembangan web untuk mendukung implementasi desain."
          ),
          React.createElement(
            'div',
            { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4", key: "buttons" },
            [
              React.createElement(
                'button',
                {
                  key: "work-btn",
                  onClick: () => handleScroll('portfolio'),
                  className: "bg-gradient-to-r from-[#7755FF] to-[#FF6480] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:opacity-90 transition flex items-center justify-center cursor-pointer border-none"
                },
                "See My Work"
              ),
              React.createElement(
                'button',
                {
                  key: "contact-btn",
                  onClick: () => handleScroll('contact'),
                  className: "bg-white text-[#7755FF] border border-[#7755FF] px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm hover:bg-[#7755FF] hover:text-white transition flex items-center justify-center cursor-pointer"
                },
                "Contact Me"
              )
            ]
          ),
          React.createElement(
            'div',
            { className: "flex space-x-4 mt-4", key: "social" },
            [
              // Instagram
              React.createElement(
                'a',
                {
                  key: "ig",
                  href: "https://www.instagram.com/sofiaagrani/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:opacity-80 transition"
                },
                React.createElement('img', {
                  src: igIcon,
                  alt: "Instagram",
                  className: "w-8 h-8"
                })
              ),
              // GitHub
              React.createElement(
                'a',
                {
                  key: "github",
                  href: "https://github.com/sofiaaa05",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:opacity-80 transition"
                },
                React.createElement('img', {
                  src: githubIcon,
                  alt: "GitHub",
                  className: "w-8 h-8"
                })
              ),
              // LinkedIn
              React.createElement(
                'a',
                {
                  key: "linkedin",
                  href: "https://www.linkedin.com/in/sofia-nugraheni",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:opacity-80 transition"
                },
                React.createElement('img', {
                  src: linkedinIcon,
                  alt: "LinkedIn",
                  className: "w-8 h-8"
                })
              )
            ]
          )
        ]
      ),
      // kanan
      React.createElement(
        'div',
        { className: "w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0", key: "right" },
        React.createElement(
          'div',
          { className: "relative overflow-visible" },
          [
            React.createElement('div', {
              key: "circle",
              className: "absolute -top-6 -left-6 w-48 h-48 rounded-full z-0 pointer-events-none",
              style: {
                background: 'linear-gradient(135deg, #FF54B0 0%, #7755FF 50%, #FFE978 100%)',
                opacity: 0.2
              },
              'aria-hidden': true
            }),
            React.createElement('img', {
              key: "profile",
              src: profileImage,
              alt: "Profile",
              className: "relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-8 border-white shadow-xl"
            })
          ]
        )
      )
    )
  );
};

export default ProfileCard;