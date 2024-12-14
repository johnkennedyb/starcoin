import React, { useState } from "react";
import "./App.css"; // Optional: Import a CSS file for styling
import Footer from "./Footer";

const Ref = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      className="bg-dark flex min-vh-100"
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <div className="stats">
        <div
          className="text-center"
          style={{
            background:
              "url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1734122027/mini_r1o5dg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "50px",
            paddingBottom: "70px",
          }}
        >
          <small>My</small>
          <div className="fs-1" style={{ color: "#fde49b", zIndex: 200 }}>
            0 Referral
          </div>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ margin: "10px 0" }}
        >
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096882/not-found_t6iy6o.png"
            alt="starcoin"
            className="img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <p style={{ margin: 0, fontSize: "29px" }}>You do not have referrals</p>
          <p style={{ margin: 0, fontSize: "27px", fontWeight: "bold" }}>yet</p>
        </div>

        <div
          style={{
            margin: "30px 0",
            marginBottom: "150px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <button
            className="py-2 px-5 text-dark"
            style={{
              borderRadius: "20px",
              backgroundColor: "#FDE49B",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            onClick={togglePopup}
          >
            <p style={{ margin: 0, fontSize: "20px" }}>Invite Friends</p>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
              and get 2500 coin each
            </p>
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="popup position-fixed text-secondary"
          style={{
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "auto",
            backgroundColor: "#454545", // Dark transparent background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "9999", // High z-index
            padding: "20px 0", 
            borderRadius:'10px'// Ensures there's space around the modal content
          }}
        >
          <div
            className="popup-content text-white  position-relative"
            style={{
              // backgroundColor: "#fff",
              color: "#000",
              padding: "20px 0px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
              position: "relative",
            }}
          >
            <button
              onClick={togglePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "none",
                fontSize: "20px",
                cursor: "pointer",
                color:'white'
              }}
            >
              &times;
            </button>
            <h2>Invite Friends</h2>
            <p>Invite a friend and get 2500 coins</p>
            <div style={{ margin: "20px 0" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt="QR Code"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <button
              style={{
                padding: "10px 90px ",
                backgroundColor: "#FDE49B",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              // className="px-5"
            >
              Invite Friends
            </button>

            <button
              style={{
                padding: "10px 90px ",
                backgroundColor: "#6C757D",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="mt-2"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Ref;
