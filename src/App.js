// import React from "react";

/**
 *
 * lowercase
 * snake_case
 * camelCase
 * UPPERCASE/CONSTANT
 * PascalCase
 */

const PORTFOLIO_DATA = {
  nama_lengkap: "Rivanaldy Rahman",
  pekerjaan: "Front-end Developer",
  photo_profile: "/assets/images/fp.jpg",
  tentang_saya:
    "Halo.. Nama saya rivan, asal saya dari pwt, umur saya 20 tahun, saya suka mengembangkan web menggunakan Framework Javascript, dan juga Flutter, senang jika dapat bertemu di kesempatan mendatang~",
  portfolio: [
    {
      image: "/assets/images/fp.jpg",
      judul: "Website Pembelian Diamond Mobile Legend",
      deskripsi: "Top Up Diamond Murah",
      link:"https://rivanaldy.github.io/kopi-kuy/"
    },
    {
      image:  "/assets/images/fp.jpg",
      judul: "Website Portal Alumni Kampus",
      deskripsi:
        "Website yang berisi informasi alumni kampus dan informasi kegiatan",
        link:"https://rivanaldy.github.io/kopi-kuy/"
    },
  ],
};

const MyPortfolio = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "skyblue",
        }}
      >
        <img
          src={PORTFOLIO_DATA.photo_profile}
          style={{ width: "6rem", height: "6rem" }}
          alt="photo_profile"
        />
        <h2>{PORTFOLIO_DATA.nama_lengkap}</h2>
        <code>{PORTFOLIO_DATA.pekerjaan}</code>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          paddingTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <h3>Tentang Saya</h3>
        <p style={{ textAlign: "justify" }}>{PORTFOLIO_DATA.tentang_saya}</p>
      </div>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "skyblue",
          paddingTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          
        }}
      >
        <h3 style={{textAlign:"center"}}>Portfolio Saya</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            
            
          }}
        >
          {PORTFOLIO_DATA.portfolio.map((item, index) => (
            <div
              key={`portfolio-${index}`}
              style={{
                border: "1px solid #666666",
                borderRadius: "12px",
                padding: "12px",
                width: "16rem",
                minHeight: "24rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "12rem",
                  objectFit: "contain",
                }}
                alt="photo_profile"
              />
              <h4>{item.judul}</h4>
              <p>{item.deskripsi}</p>
              <button><a href={item.link} target="_blank" rel="noopener noreferrer">go somewhere</a></button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding:'4rem' }}>
        build with ♥ by &nbsp;
        <a href="https://www.instagram.com/rivanr_7/">Rivanaldy Rahman</a>
      </div>
    </div>
  );
};

export default MyPortfolio;
