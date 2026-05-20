import React from "react";
import travelImg from "../assets/images/travel.webp";
import lumpurImg from "../assets/images/lumpur.webp";
import feminoorieImg from "../assets/images/feminoorie.webp";
import adminImg from "../assets/images/admin.png"
import smartwatchImg from "../assets/images/smartwatch.webp"
import bimbelImg from "../assets/images/bimbel.webp";
import gameImg from "../assets/images/game.webp";
import islamiImg from "../assets/images/islami.webp";
import bpmnImg from "../assets/images/bpmn.webp";
import poldaImg from "../assets/images/polda.webp";
import stupenImg from "../assets/images/stupen.webp";
import healthappImg from "../assets/images/healthapp.webp";

function PortfolioSection() {
  const portfolios = [
     {
      image: poldaImg,
      title: "IT Division Intern at Kepolisian Daerah Jawa Timur",
      desc: "Contributed directly to the preparation of SOP documents for IT equipment damage handling and workflow process flowcharts within the IT Division of Kepolisian Daerah Jawa Timur",
      tag: "Internship",
      bg: "bg-purple-100",
    },
{
      image: stupenImg,
      title: "Independen Study Camp Batch 3 at PT Mitra Talenta Grup (Celerates) ",
      desc: "Learned web development technologies including HTML, CSS, JavaScript, React JS, Tailwind CSS, Bootstrap, PostgreSQL, and Express JS, as well as basic Deployment & DevOps and UI/UX Design concepts such as user research, user persona, user flow, and wireframing to prototyping",
      tag: "Independen Study Camp",
      bg: "bg-purple-100",
    },
    {
     image: healthappImg,
      title: "UI/UX Design Mobile App Habitle",
      desc: "Habitle is a mobile habit tracker and to-do list application prototype developed as one of the internship projects at PT Otak Kanan",
      tag: "Mobile App",
      link: "https://www.figma.com/proto/Tl7q59omSvMh0QKHU7jq4J/Pre-Project-UI-UX_Sofia-Nugraheni?node-id=469-7574&t=Al99Phb3FfeMJ6KU-1&scaling=min-zoom&content-scaling=fixed&page-id=75%3A3&starting-point-node-id=469%3A7574&show-proto-sidebar=1",
      bg: "bg-pink-100",
    },
    {
      image: lumpurImg,
      title: "UI/UX Design Mobile App Culture Go!",
      desc: "ulture Go! is an AR-based mobile app prototype designed to introduce cultural heritage sites in Surabaya’s cultural tourism areas",
      tag: "Mobile App",
      link: "https://www.figma.com/proto/rpek0rst8CDHSTABxDwx5S/UIUX-Excecution-3?node-id=173-124&t=zcGL5QuA9U8BPv6w-1&scaling=scale-down&content-scaling=fixed&page-id=173%3A123&starting-point-node-id=173%3A124",
      bg: "bg-pink-100",
    },
    {
      image: islamiImg,
      title: "UI/UX Design Mobile App Q-Learn Go!",
      desc: "Q-Learn Go! is a game-based mobile app prototype for Quran education",
      tag: "Mobile App",
      link: "https://www.figma.com/proto/cCyRLCUsLhTwiJGtkf7JeR/Q-Learn-Go-_DAQ2025?node-id=144-1236&p=f&t=r4AuJN8xI4qpk7Wm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      bg: "bg-purple-100",
    },
    {
      image: feminoorieImg,
      title: "UI/UX Design Website Feminoorie",
      desc: "Feminoorie is a website prototype designed to support self-care for teenage girls",
      tag: "Website",
      link: "https://www.figma.com/proto/mE9UbunfZKQxy1AElX63e8/Sofia-Nugraheni_Mini-Project_Feminoorie?node-id=243-506&t=CRb0swiK0SkaHt67-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A8&starting-point-node-id=243%3A506",
      bg: "bg-yellow-100",
    },
    {
      image: adminImg,
      title: "UI/UX Design Dashboard Admin Saleema Tour",
      desc: "Saleema Tour Admin Dashboard is an admin dashboard prototype designed to manage tour and travel service data for the Saleema Tour website",
      tag: "Website",
      link: "https://www.figma.com/proto/5NhBU7lyeFK9m6ajpfZg2c/Kelompok-1_Capstone-Celerates?node-id=3264-12040&p=f&t=1nQ13Q43fT9r9pjy-1&scaling=scale-down&content-scaling=fixed&page-id=41%3A2&starting-point-node-id=3264%3A12040&show-proto-sidebar=1",
    },
    {
      image: smartwatchImg,
      title: "UI/UX Design Smartwatch MomsWatch",
      desc: "MomsWatch is a smartwatch prototype integrated with an application for preventing malnutrition in pregnant women",
      tag: "Smartwatch",
      link: "https://www.figma.com/proto/UHjvAwTJLIMtfmmch1DW15/BMC-NIC-MPM?node-id=472-1855&p=f&t=W9ahBftRCBjA2xpo-1&scaling=scale-down&content-scaling=fixed&page-id=411%3A1830&starting-point-node-id=470%3A1834",
    },
   {
      image: travelImg,
      title: "Website Saleema Tour",
      desc: "Saleema Tour is a Muslim-friendly tour and travel website - React JS, Tailwind CSS, Express JS, PostgreSQL",
      tag: "Website",
      link: "https://saleema-tour.vercel.app/",
      bg: "bg-purple-100",
    },
    {
      image: bimbelImg,
      title: "Website Sasana Cendekia",
      desc: "Sasana Cendekia is a website designed to digitize tutoring services in the Jombang region of East Java using Wix.com",
      tag: "Website",
      link: "https://desy23302.wixsite.com/portofoliosofia",
      bg: "bg-pink-100",
    },
    {
      image: gameImg,
      title: "Website Mindbender Crosswords Game",
      desc: "Crosstatic Nusantara is a web-based crossword puzzle game developed using HTML, CSS, JavaScript, PHP, and MySQL",
      tag: "Website",
      link: "https://tadika-mesra-web-design.vercel.app/",
      bg: "bg-purple-100",
    },
     {
      image: bpmnImg,
      title: "BPMN Targetting Proses Bisnis Tarik Tunai Bank BSI",
      desc: "Business Process Analysis at PT Bank Syariah Indonesia Tbk (BSI)",
      tag: "BPMN",
      link: "https://www.figma.com/design/cCyRLCUsLhTwiJGtkf7JeR/Q-Learn-Go-_DAQ2025?node-id=149-2043&t=EAHyUpY5g1sJZHqP-1",
      bg: "bg-purple-100",
    },
  ];

  return React.createElement(
    "section",
    {
      id: "Portfolio",
      className:
        "py-20 px-6 md:px-20 bg-gradient-to-b from-white to-pink-50 text-center",
      style: { fontFamily: "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif" },
    },
    React.createElement(
      "h2",
      {
        className: "text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-12",
      },
      "Portfolio"
    ),

    // Grid Portfolio
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center",
      },
      portfolios.map((item, i) =>
        React.createElement(
          "div",
          {
            key: i,
            className:
              "w-full max-w-xs md:w-80 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
          },
          // Bagian gambar
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("img", {
              src: item.image,
              alt: item.title,
              className: "w-full h-40 md:h-48 lg:h-56 object-cover",
            }),
            // Tag
            React.createElement(
              "span",
              {
                className:
                  "absolute top-3 right-3 text-xs font-semibold bg-white text-[#1F1F1F] py-1 px-3 rounded-full shadow-sm",
              },
              item.tag
            )
          ),
       // Bagian teks
React.createElement(
  "div",
  { className: "p-5 text-justify" },
  React.createElement(
    "h3",
    { className: "text-lg font-bold text-[#1F1F1F] mb-1" },
    item.title
  ),
  React.createElement(
    "p",
    { className: "text-sm text-gray-500 mb-4" },
    item.desc
  ),

  // TOMBOL LIHAT PROYEK
  item.link &&
    React.createElement(
      "a",
      {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "inline-block text-sm font-semibold text-[#7755FF] hover:underline",
      },
      "View Project→"
    )
)

        )
      )
    ),
  );
}

export default PortfolioSection;
