import React from "react";
import "./App.css"; // Optional: Import a CSS file for styling
import Footer from "./Footer";

const Ref = () => {
  return (
    <div className="app-container bg-dark" style={{ fontFamily: 'Arial, sans-serif', color: '#fff',  textAlign: 'center' }}>
     


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
  <small>My</small>
  <div className="fs-1" style={{ color: '#fde49b', zIndex:200 }}>
   
   0 Referral
  </div>
</div>


        <div className="d-flex justify-content-center" style={{ margin: '10px 0' }}>
        <img
      src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734024192/magnifying-glass_pxmpcl.png"
      alt="starcoin"
      className="img-fluid"
      style={{ width: '100px', height: '100px' }}
    />
        </div>

        <div style={{ margin: '10px 0' }}>
          <p style={{ margin: 0, fontSize: '29px' }}>You do not have referrals </p>
          <p style={{ margin: 0, fontSize: '27px', fontWeight: 'bold' }}>yet</p>
        </div>

        <div style={{ margin: '30px 0', marginBottom:'150px', paddingLeft:'20px',paddingRight:'20px' }}>
          <button className="py-2 px-5 text-dark" style={{borderRadius:'20px', backgroundColor:'#FDE49B' , paddingLeft:'20px',paddingRight:'20px'}}>
          <p style={{ margin: 0, fontSize: '20px' }}>Invite Friends</p>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>and get 2500 coin each</p>
          </button>
          
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Ref;
