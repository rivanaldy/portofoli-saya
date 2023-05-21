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
    "Halo.. Nama saya rivan, asal saya dari pwt, umur saya 20 tahun, saya suka mengembangkan web menggunakan Framework Javascript. Senang jika dapat bertemu di kesempatan mendatang~",
  portfolio: [
    {
      image: "https://esportsku.com/wp-content/uploads/2020/07/mlbb.png",
      judul: "Website Pembelian Diamond Mobile Legend",
      deskripsi: "Top Up Diamond Murah",
    
    },
    {
      image:  "https://th.bing.com/th/id/OIP.90PPsXbSD6ueyObrRgV4hAHaHM?pid=ImgDet&rs=1",
      judul: "Website Portal Alumni Kampus",
      deskripsi:
        "Website yang berisi informasi alumni kampus dan informasi kegiatan",
       
    },
    {
      image:  "https://2.bp.blogspot.com/-6b8NiXRMNQU/V1ySY7A_jCI/AAAAAAAAAAk/1RHEhSfKzXg4QAUzr7cqGcSI9cxMMuUqwCLcB/s1600/Mu.png",
      judul: "Website Manchester United FC",
      deskripsi:
        "Website yang berisi informasi tentang Manchester United FC",
       
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
          backgroundColor: "blueviolet",
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
          backgroundColor: "skyblue",
          paddingTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          
          
        }}
      >
        <h3 style={{textAlign:"center"}}>Tentang Saya</h3>
        <p style={{ textAlign: "center" }}>{PORTFOLIO_DATA.tentang_saya}</p>
      </div>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "blueviolet",
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
             
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding:'4rem', backgroundColor:"skyblue" }}>
        build with ♥ by &nbsp;
        <a href="https://www.instagram.com/rivanr_7/">Rivanaldy Rahman</a>
      </div>
    </div>
  );
};

export default MyPortfolio;
