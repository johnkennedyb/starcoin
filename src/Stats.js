import React from "react";
import "./App.css"; // Optional: Import a CSS file for styling
import Footer from "./Footer";

const Stat = () => {
  return (
    <div className="app-container bg-dark" style={{ fontFamily: 'Arial, sans-serif', color: '#fff', textAlign: 'center' }}>
     


      <div className="stats">
      <div
  className="text-center py-5 mb-4"
  style={{
    background: `radial-gradient(circle, rgba(255,223,186,0.8) 20%, transparent 20%), 
                 radial-gradient(circle, rgba(255,223,186,0.6) 10%, transparent 10%), 
                 radial-gradient(circle, rgba(255,223,186,0.4) 5%, transparent 5%)`,
    backgroundSize: '50px 50px',
    backgroundPosition: '0 0, 25px 25px, 12px 12px',
    backgroundColor: '', // fallback color
  }}
>
  <small>Your share balance</small>
  <div className="fs-1 d-flex justify-content-center" style={{ color: '#fde49b', zIndex:200 }}>
    <img
      src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734012205/png-transparent-star-coin-star-coins-coin-star-money-payment-3d-icon-thumbnail-removebg-preview_1_wb89ho.png"
      alt="starcoin"
      className="img-fluid"
      style={{ width: '100px', height: '100px' }}
    />
   <span className="py-4" style={{}} >2,506</span> 
  </div>
</div>


        <div style={{ margin: '10px 0' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Total players</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>1,222</p>
        </div>

        <div style={{ margin: '10px 0' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Daily users</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>216</p>
        </div>

        <div style={{ margin: '10px 0', marginBottom:'195px' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Online players</p>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>36</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Stat;
