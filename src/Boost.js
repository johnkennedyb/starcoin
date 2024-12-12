import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Footer"

function StarcoinApp() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
          <div className="container text-light bg-dark " style={{ minHeight: '100vh' }}>
     

      {/* Balance Section */}
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



      {/* Daily Boosters Section */}
      <div className="mb-4">
        <h6 className="mb-3 ms-3">Daily boosters</h6>
        <div className="d-flex justify-content-between mx-4">
          <div className="p-1 d-flex  bg-[#454545] rounded" style={{ width: '46%', backgroundColor:'#454545' }}>
         <div><img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734017169/fire_lh4z7x.png" alt="Power Punch" className="img-fluid" style={{ height: '50px' }} /></div>   
            <div>
            <div className="mt-2"><h6> Power Punch</h6></div>
            <div>3/3</div>
            </div>
          </div>
          <div className="p-1 d-flex text-center  rounded" style={{ width: '45%', backgroundColor:'#454545' }}>
          <div><img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734017185/lightening_lefpun.png" alt="Full tank" className="img-fluid" style={{ height: '50px' }} /></div>  
         <div> <div className="mt-2">Full tank</div>
         <div>3/3</div>
         </div>   
          </div>
        </div>
      </div>

      {/* Boosters Section */}
      <div>
        <h6 className="mb-3 ms-3">Boosters</h6>
        <div className="list-group mb-3 text-white mx-4">
          <button style={{backgroundColor:'#454545' , borderRadius:'10px'}} className=" mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white">
            <div className="d-flex align-items-center">
            <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734014551/rocket_cgshwn.png"
            alt="boost icon"
            className="img-fluid me-3"
            style={{ width: "30px", height: "30px" }}
          />              <span><b>Multitap </b><br /> <span> 
             <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734013836/boliviano_1_hj1aqj.png"
          alt="referral icon"
          className="img-fluid"
          style={{ width: "20px", height: "20px" }}
        /> 200 <i className="bi bi-coin"></i></span> </span>
            </div>
            &gt;
            
          </button>

          <button style={{backgroundColor:'#454545' , borderRadius:'10px'}}  className=" mb-2 list-group-item text-white list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734017152/earth_pyrgvi.png" alt="Energy limit" className="img-fluid me-3" style={{ height: '30px' }} />
              <span>Energy limit  <br/>    <span>    <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734013836/boliviano_1_hj1aqj.png"
          alt="referral icon"
          className="img-fluid"
          style={{ width: "20px", height: "20px" }}
        /> 200 <i className="bi bi-coin"></i></span>

        </span>

            </div>
                      &gt;

            
          </button>

          <button style={{backgroundColor:'#454545' , borderRadius:'10px'}}  className=" mb-2 list-group-item text-white list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734017185/lightening_lefpun.png" alt="Recharging speed" className="img-fluid me-3" style={{ height: '30px' }} />
              <span>Recharging speed <br/>    <span>    <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734013836/boliviano_1_hj1aqj.png"
          alt="referral icon"
          className="img-fluid"
          style={{ width: "20px", height: "20px" }}
        /> 2000 <i className="bi bi-coin"></i></span>

        </span>

            </div>
                      &gt;

            
          </button>

         
        </div>
      </div>
      {/* Footer Navigation */}
  
    </div>
    <Footer/>

</div>

  
  );
}

export default StarcoinApp;
