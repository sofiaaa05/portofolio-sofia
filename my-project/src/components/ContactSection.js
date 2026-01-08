import React from "react";

// Import images dari folder assets
import igIcon from "../assets/images/ig.png";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import phoneIcon from "../assets/images/phone.png";
import pesanIcon from "../assets/images/pesan.png";

function ContactSection() {
  return React.createElement(
    "section",
    { 
      className: "py-20 px-6 md:px-20 bg-[#F0E7FF] text-gray-800", 
      id: "contact",
      style: { fontFamily: 'Poppins, sans-serif' }
    },
    [
      React.createElement(
        "h2",
        { key: "title", className: "text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6 text-center", style: { fontFamily: 'Poppins, sans-serif' } },
        "Contact Me"
      ),
      
      React.createElement(
        "p",
        { key: "desc", className: "text-gray-600 mb-16 max-w-2xl mx-auto text-center text-lg", style: { fontFamily: 'Poppins, sans-serif' } },
        "Jika tertarik untuk berdiskusi atau berkolaborasi, jangan ragu untuk menghubungi saya melalui email maupun media sosial."
      ),
      React.createElement(
        "div",
        {
          className: "max-w-4xl mx-auto flex flex-col items-center justify-center gap-12",
          key: "container",
        },
        [
          // Contact Info Section
          React.createElement(
            "div",
            { className: "w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20", key: "contact-info" },
            [
              // Email
              React.createElement(
                "div",
                { className: "flex flex-col items-center gap-3 text-center", key: "email" },
                [
                  React.createElement("img", { 
                    src: pesanIcon, 
                    alt: "Email", 
                    className: "w-8 h-8",
                    key: "icon1" 
                  }),
                  React.createElement("span", { key: "label1", className: "text-sm text-gray-600", style: { fontFamily: 'Poppins, sans-serif' } }, "Email"),
                  React.createElement(
                    "a",
                    { 
                      key: "email-link",
                      href: "mailto:sofianugraheni05@gmail.com",
                      className: "text-[#7755FF] font-semibold hover:opacity-80 transition",
                      style: { fontFamily: 'Poppins, sans-serif' }
                    },
                    "sofianugraheni05@gmail.com"
                  )
                ]
              ),
              
              // Phone
              React.createElement(
                "div",
                { className: "flex flex-col items-center gap-3 text-center", key: "phone" },
                [
                  React.createElement("img", { 
                    src: phoneIcon, 
                    alt: "Phone", 
                    className: "w-8 h-8",
                    key: "icon2" 
                  }),
                  React.createElement("span", { key: "label2", className: "text-sm text-gray-600", style: { fontFamily: 'Poppins, sans-serif' } }, "WhatsApp"),
                  React.createElement(
                    "a",
                    { 
                      key: "phone-link",
                      href: "https://wa.me/6285708959489?text=Halo%20Sofia%20Nugraheni",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-[#7755FF] font-semibold hover:opacity-80 transition",
                      style: { fontFamily: 'Poppins, sans-serif' }
                    },
                    "+62 857-0895-9489"
                  )
                ]
              )
            ]
          ),

          // Divider
          React.createElement(
            "div",
            { className: "w-full max-w-lg h-px bg-gray-300", key: "divider" }
          ),

          // Social Media Section
          React.createElement(
            "div",
            { className: "flex flex-col items-center gap-6", key: "social-section" },
            [
              React.createElement("span", { key: "social-label", className: "text-sm text-gray-600 font-semibold", style: { fontFamily: 'Poppins, sans-serif' } }, "FOLLOW ME"),
              
              React.createElement(
                "div",
                { className: "flex items-center gap-6", key: "social-icons" },
                [
                  // Instagram
                  React.createElement(
                    "a",
                    { 
                      href: "https://www.instagram.com/sofiaagrani/", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-60 transition-opacity",
                      key: "ig-link"
                    },
                    React.createElement("img", { 
                      src: igIcon, 
                      alt: "Instagram", 
                      className: "w-8 h-8"
                    })
                  ),
                  
                  // GitHub
                  React.createElement(
                    "a",
                    { 
                      href: "https://github.com/sofiaaa05", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-60 transition-opacity",
                      key: "github-link"
                    },
                    React.createElement("img", { 
                      src: githubIcon, 
                      alt: "GitHub", 
                      className: "w-8 h-8"
                    })
                  ),
                  
                  // LinkedIn
                  React.createElement(
                    "a",
                    { 
                      href: "https://www.linkedin.com/in/sofia-nugraheni/", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-60 transition-opacity",
                      key: "linkedin-link"
                    },
                    React.createElement("img", { 
                      src: linkedinIcon, 
                      alt: "LinkedIn", 
                      className: "w-8 h-8"
                    })
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  );
}

export default ContactSection;