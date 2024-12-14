import React from 'react';


const Footer = () => {
    return (
        <footer className="d-flex  bottom-0 fixed justify-content-around  mt-2   pb-4  " >
      <a href='/ref'  style={{ textDecoration: 'none', color:'white' }}> <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097662/ref_vyg9bj.png"
            alt="referral icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-9">Ref</p>
        </div></a> 
        <a href='/task'   style={{ textDecoration: 'none', color:'white' }}>  <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tasks_defx2g.png"
            alt="tasks icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-6">Tasks</p>
        </div></a>
        <a href='/'   style={{ textDecoration: 'none', color:'white' }}>   <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
            alt="tap icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          
          <p className="m-0 fs-6">Tap</p>
        </div></a>
        <a href='/boost'   style={{ textDecoration: 'none', color:'white' }}> <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097659/boosts_e7nnfc.png"
            alt="boost icon"
            className="img-fluid"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="m-0 fs-6">Boost</p>
        </div></a>
        <a href='/stat'   style={{ textDecoration: 'none', color:'white' }}>
        <div className="text-center bg-gray-700 p-2" style={{backgroundColor:'#454545', borderRadius:'15px'}}>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097663/stats_cdpn3m.png"
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
  

