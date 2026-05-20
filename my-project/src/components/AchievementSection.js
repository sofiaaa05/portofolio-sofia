import React from "react";
import essay1Img from "../assets/images/essay1.webp";
import essay2Img from "../assets/images/essay2.webp";
import bpcImg from "../assets/images/bpc.webp";
import bmcImg from "../assets/images/bmc.webp";

function AchievementSection() {
  const achievements = [
    {
      image: essay1Img,
      title: "1st Place Winner of the National Essay Competition Forpimawa 2025",
      desc: "Essay Competition at the Forum Pimpinan Perguruan Tinggi Bidang Kemahasiswaan (Forpimawa) in the education category with the essay titled “NesaWatch: Jam Tangan Interaktif Berbasis IoT - AR untuk Meningkatkan Efektivitas Pembelajaran Sekolah di Era Society 5.0,” organized by Lembaga Layanan Pendidikan Tinggi Wilayah V Yogyakarta",
      tag: "Achievement",
      bg: "bg-blue-100",
    },
    {
       image: essay2Img,
      title: "1st Place Winner of the National Essay Competition held by the Pharmacy Student Association of Universitas Medika Suherman 2025",
      desc: "Essay Competition in the digital healthcare category with the essay titled “MomsWatch: Inovasi Jam Tangan Pintar Sebagai Pencegahan Stunting Pada Ibu Hamil Berbasis AIoT Terintegrasi Program Pemerintah Guna Menurunkan Stunting di Indonesia,” organized by the Pharmacy Student Association of Universitas Medika Suherman",
      tag: "Achievement",
      bg: "bg-purple-100",
    },
    {
      image: bpcImg,
      title: "Top 5 Finalist in the Business Plan Competition 2025",
      desc: "Top 5 Finalist in the Business Plan Competition with the business idea titled “Culture Go!: Platform Gamifikasi Berbasis AR untuk Memperkenalkan Bangunan Cagar Budaya di Kawasan Wisata Budaya Surabaya,” organized as part of the 3rd Anniversary Celebration of Asrama Mahasiswa Nusantara Surabaya",
      tag: "Achievement",
      bg: "bg-pink-100",
    },
    {
      image: bmcImg,
      title: "Finalist in the National Business Model Canvas Competition 2025",
      desc: "Finalist in the National Business Model Canvas Competition with the business idea titled “Mavibe: Solusi Digital Terpadu Berbasis Aplikasi bagi Mahasiswa untuk Berbagi Informasi, Berjualan, dan Mendapatkan Bantuan,” organized by the Entrepreneurship Student Activity Unit of Surabaya State University 2025",
      tag: "Achievement",
      bg: "bg-yellow-100",
    },
  ];

  return React.createElement(
    "section",
    {
      id: "achievement",
      className:
        "py-20 px-6 md:px-20 bg-gradient-to-b from-pink-50 to-white text-center",
      style: { fontFamily: "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif" },
    },
    React.createElement(
      "h2",
      {
        className: "text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-12",
      },
      "Achievement"
    ),

    // Grid Achievement
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center",
      },
      achievements.map((item, i) =>
        React.createElement(
          "div",
          {
            key: i,
            className:
              "w-full max-w-xs md:w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
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
              { className: "text-sm text-gray-500 mb-4 text-justify" },
              item.desc
            )
          )
        )
      )
    )
  );
}

export default AchievementSection;
