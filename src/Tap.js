import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

const Tap = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      {/* <header className="d-flex justify-content-between align-items-center p-3 bg-secondary">
        <button className="btn btn-link text-white">Close</button>
        <h1 className="m-0 fs-4">STARCOIN</h1>
        <p className="m-0 text-muted fs-6">mini app</p>
      </header> */}
      <div className="flex text-center mt-4" >
        <div className="d-flex align-items-center justify-content-center" style={{marginTop:'20px'}}>     <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734007108/download__5_-removebg-preview_jfpee9.png"
          alt="coin icon"
          className="img-fluid"
          style={{ width: "50px", height: "50px" }}
        />
        <h2 className=" text-yellow" style={{ fontSize: "36px", color:'#be8e1a' }}>2,506</h2></div>
    
        <div className="d-flex justify-content-center mt-3 align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
            alt="trophy icon"
            className="me-2"
            style={{ width: "20px", height: "20px" }}
          />
          <p>Bronze   &gt;</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mx-4 my-4">
  <img
    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734012205/png-transparent-star-coin-star-coins-coin-star-money-payment-3d-icon-thumbnail-removebg-preview_1_wb89ho.png"
    alt="starcoin"
    className="img-fluid"
    style={{ width: "250px", height: "250px" }}
  />
</div>

      <div className="my-4">
        <div className="d-flex  mb-3 justify-content-center align-items-center">
        <i className="fas fa-bolt me-2" style={{ fontSize: "20px", color: "#ffd700" }}></i>

          <p>500/500</p>
        </div>
        <div className="progress mx-auto mb-4" style={{ height: "10px", width: "80%", marginBottom:'20px' }}>
        <div
  className="progress-bar"
  style={{
    width: "100%",
    background: "linear-gradient(to right, #ADD8E6, #90EE90)", // Light blue and light green
    border: "1px solid black", // Transparent border
    borderRadius: "5px",
    // Optional: rounded corners for a smoother look
  }}
></div>



        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Tap;
