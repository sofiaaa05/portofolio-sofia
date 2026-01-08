import React from "react";
import travelImg from "../assets/images/travel.webp";
import lumpurImg from "../assets/images/lumpur.webp";
import feminoorieImg from "../assets/images/feminoorie.webp";
import rejosenseImg from "../assets/images/rejosense.webp"
import smartwatchImg from "../assets/images/smartwatch.webp"
import bimbelImg from "../assets/images/bimbel.webp";
import gameImg from "../assets/images/game.webp";
import islamiImg from "../assets/images/islami.webp";
import bpmnImg from "../assets/images/bpmn.webp";
import poldaImg from "../assets/images/polda.webp";
import stupenImg from "../assets/images/stupen.webp";
import pmImg from "../assets/images/pm.webp";
import logoPorto from "../assets/images/logoporto.png";

function PortfolioSection() {
  const portfolios = [
     {
      image: poldaImg,
      title: "Magang di di Bidang TIK Kepolisian Daerah Jawa Timur",
      desc: "Berkontribusi langsung dalam penyusunan dokumen SOP penanganan kerusakan perangkat IT dan pembuatan flowchart proses kerja yang tepat di lingkungan Bidang TIK Kepolisian Daerah Jawa Timur",
      tag: "Internship",
      bg: "bg-purple-100",
    },
{
      image: stupenImg,
      title: "Studi Independen Camp Batch 3 di PT Mitra Talenta Grup (Celerates) ",
      desc: "Mempelajari pengembangan web (HTML/CSS/JS, React JS, Tailwind CSS, Bootstrap, Postgree SQL, Express JS), Deployment & DevOps Basic, serta UI/UX Design (riset pengguna, user persona, user flow, wireframe→prototipe)",
      tag: "Studi Independen",
      bg: "bg-purple-100",
    },
    {
      image: pmImg,
      title: "Soft Skill Project Management - Studi Independen ",
      desc: "Soft Skill Class di Studi Independen Camp Batch 3 PT Mitra Talenta Grup (Celerates) yang mempelajari agile workflow, kerja tim, dan manajemen waktu proyek",
      tag: "Studi Independen",
      bg: "bg-purple-100",
    },
    {
      image: lumpurImg,
      title: "UI/UX Design Mobile App Culture Go!",
      desc: "Culture Go! adalah prototype mobile app berbasis AR untuk mengenalkan cagar budaya di kawasan wisata budaya Surabaya",
      tag: "Mobile App",
      link: "https://www.figma.com/proto/rpek0rst8CDHSTABxDwx5S/UIUX-Excecution-3?node-id=173-124&t=zcGL5QuA9U8BPv6w-1&scaling=scale-down&content-scaling=fixed&page-id=173%3A123&starting-point-node-id=173%3A124",
      bg: "bg-pink-100",
    },
    {
      image: islamiImg,
      title: "UI/UX Design Mobile App Q-Learn Go!",
      desc: "Q-Learn Go! adalah prototype mobile app edukasi Al-Qur'an berbasis game",
      tag: "Mobile App",
      link: "https://www.figma.com/proto/cCyRLCUsLhTwiJGtkf7JeR/Q-Learn-Go-_DAQ2025?node-id=144-1236&p=f&t=r4AuJN8xI4qpk7Wm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      bg: "bg-purple-100",
    },
    {
      image: feminoorieImg,
      title: "UI/UX Design Website Feminoorie",
      desc: "Feminoorie adalah prototype website sebagai pendukung selfcare untuk remaja perempuan",
      tag: "Website",
      link: "https://www.figma.com/proto/mE9UbunfZKQxy1AElX63e8/Sofia-Nugraheni_Mini-Project_Feminoorie?node-id=243-506&t=CRb0swiK0SkaHt67-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A8&starting-point-node-id=243%3A506",
      bg: "bg-yellow-100",
    },
    {
      image: rejosenseImg,
      title: "UI/UX Design Website Rejosense",
      desc: "Rejosense adalah prototype website dan dashboard pencatatan hasil panen sebagai branding unit usaha greenhouse melon di Gresik dalam program Innovillage 2025",
      tag: "Website",
      link: "https://www.figma.com/proto/rpek0rst8CDHSTABxDwx5S/UIUX-Excecution-3?node-id=103-5&p=f&t=efsliwQ3nIoZz9sr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=103%3A5",
    },
    {
      image: smartwatchImg,
      title: "UI/UX Design Smartwatch MomsWatch",
      desc: "MomsWatch adalah prototype smartwatch yang terintegrasi dengan aplikasi sebagai pencegahan stunting pada ibu hamil",
      tag: "Smartwatch",
      link: "https://www.figma.com/proto/UHjvAwTJLIMtfmmch1DW15/BMC-NIC-MPM?node-id=472-1855&p=f&t=W9ahBftRCBjA2xpo-1&scaling=scale-down&content-scaling=fixed&page-id=411%3A1830&starting-point-node-id=470%3A1834",
    },
   {
      image: travelImg,
      title: "Website Saleema Tour",
      desc: "Saleema Tour adalah website layanan tour & travelling ramah muslimah - React JS, Tailwind CSS, Express JS, PostgreSQL",
      tag: "Website",
      link: "https://saleema-tour.vercel.app/",
      bg: "bg-purple-100",
    },
    {
      image: bimbelImg,
      title: "Website Sasana Cendekia",
      desc: "Sasana Cendekia adalah website sebagai bentuk digitalisasi bimbingan belajar di daerah Jombang Jawa Timur menggunakan Wix.com",
      tag: "Website",
      link: "https://desy23302.wixsite.com/portofoliosofia",
      bg: "bg-pink-100",
    },
    {
      image: gameImg,
      title: "Website Mindbender Crosswords Game",
      desc: "Crosstatic Nusantara adalah game teka-teki silang berbasis website - HTML, CSS, JavaScript, PHP, dan MySQL",
      tag: "Website",
      link: "https://tadika-mesra-web-design.vercel.app/",
      bg: "bg-purple-100",
    },
     {
      image: bpmnImg,
      title: "BPMN Targetting Proses Bisnis Tarik Tunai Bank BSI",
      desc: "Analisis Proses Bisnis PT Bank Syariah Indonesia Tbk (BSI)",
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
  { className: "p-5 text-left" },
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

  // 👉 TOMBOL LIHAT PROYEK
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
      "Lihat Proyek →"
    )
)

        )
      )
    ),
  );
}

export default PortfolioSection;
