import React from "react";
import "./App.css"; // Optional: Import a CSS file for styling
import Footer from "./Footer";

const Stat = () => {
  return (
    <div className=" bg-dark" style={{ fontFamily: 'Arial, sans-serif', color: '#fff', textAlign: 'center' }}>
     


      <div className="stats">
      <div
  className="text-center  "
  style={{
    background: "url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1734122027/mini_r1o5dg.png)",
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundRepeat: "no-repeat", // Prevents tiling of the image
    backgroundPosition: "center", // Centers the image in the container
    paddingTop:'40px',
    paddingBottom:'70px'

  }}
  
>
  <small>Your share balance</small>
  <div className="fs-1 d-flex justify-content-center" style={{ color: '#fde49b', zIndex:200 }}>
    <img
      src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tap_ujyksb.png"
      alt="starcoin"
      className="img-fluid"
      style={{ width: '100px', height: '100px' }}
    />
   <span className="py-4" style={{}} >2,506</span> 
  </div>
</div>


        <div style={{ margin: '0 0' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Total players</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>1,222</p>
        </div>

        <div style={{ margin: '10px 0' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Daily users</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>216</p>
        </div>

        <div style={{ margin: '10px 0', marginBottom:'140px' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Online players</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>36</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Stat;
