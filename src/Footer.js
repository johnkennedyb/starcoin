import React from 'react';


const Footer = () => {
    return (
        <footer className="d-flex  justify-content-around  mt-2  mb-2 pb-3  " >
      <a href='/ref'  style={{ textDecoration: 'none', color:'white' }}> <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734013836/boliviano_1_hj1aqj.png"
            alt="referral icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-9">Ref</p>
        </div></a> 
        <a href='/task'   style={{ textDecoration: 'none', color:'white' }}>  <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734013846/bitcoin-mining_jlusvm.png"
            alt="tasks icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-6">Tasks</p>
        </div></a>
        <a href='/'   style={{ textDecoration: 'none', color:'white' }}>   <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734014471/dollar_edhgid.png"
            alt="tap icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          
          <p className="m-0 fs-6">Tap</p>
        </div></a>
        <a href='/boost'   style={{ textDecoration: 'none', color:'white' }}> <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734014551/rocket_cgshwn.png"
            alt="boost icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-6">Boost</p>
        </div></a>
        <a href='/stat'   style={{ textDecoration: 'none', color:'white' }}>
        <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2913/2913981.png"
            alt="stats icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-6">Stats</p>
        </div></a>
      </footer>
    );
  };
  
  export default Footer;
  

