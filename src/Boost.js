import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';

function StarcoinApp() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    reward: '',
    placeholder: 'Enter code here',
    imageUrl: '',
  });

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const buttonDetails = [
    {
      title: 'Multitap',
      reward: '200',
      imageUrl: 'https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tap_ujyksb.png',
    },
    {
      title: 'Energy Limit',
      reward: '200',
      imageUrl: 'https://res.cloudinary.com/dw7w2at8k/image/upload/v1734124051/energy-limit_veb5cy.png',
    },
    {
      title: 'Recharging Speed',
      reward: '2000',
      imageUrl: 'https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096880/thunder_j8akai.png',
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">





      
      <div className="text-light bg-dark" style={{ minHeight: '100vh' }}>
        {/* Balance Section */}
        <div
          className="text-center py-5 mb-1"
          style={{
            background: "url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1734122027/mini_r1o5dg.png)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            paddingTop: '5px',
          }}
        >
          <small>Your share balance</small>
          <div className="fs-1 d-flex justify-content-center" style={{ color: '#fde49b', zIndex: 200 }}>
            <img
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tap_ujyksb.png"
              alt="starcoin"
              className="img-fluid"
              style={{ width: '70px', height: '70px' }}
            />
            <span className="py-2">2,506</span>
          </div>
        </div>

        <div className="mb-4">
        <h6 className="mb-3 ms-3">Daily boosters</h6>
        <div className="d-flex justify-content-between mx-4">
          <div className="p-1 d-flex  bg-[#454545] rounded" style={{ width: '46%', backgroundColor:'#454545' }}>
         <div><img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097659/boosts_e7nnfc.png" alt="Power Punch" className="img-fluid" style={{ height: '50px' }} /></div>   
            <div>
            <div className="mt-2"><h6> Power Punch</h6></div>
            <div>3/3</div>
            </div>
          </div>
          <div className="p-1 d-flex text-center  rounded" style={{ width: '45%', backgroundColor:'#454545' }}>
          <div><img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/energy_h0mdpw.png" alt="Full tank" className="img-fluid" style={{ height: '50px',width:'60px', marginRight:'-15px', marginLeft:'-10px' }} /></div>  
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
            {buttonDetails.map((button, index) => (
              <button
                key={index}
                style={{ backgroundColor: '#454545', borderRadius: '10px' }}
                onClick={() => handleOpenModal(button)}
                className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={button.imageUrl}
                    alt="boost icon"
                    className="img-fluid me-3"
                    style={{ width: '30px', height: '30px' }}
                  />
                  <span>
                    <b>{button.title}</b>
                    <br />
                    <span>
                      <img
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tap_ujyksb.png"
                        alt="referral icon"
                        className="img-fluid"
                        style={{ width: '20px', height: '20px' }}
                      />
                      {button.reward} <i className="bi bi-coin"></i>
                    </span>
                  </span>
                </div>
                &gt;
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <>
            {/* Backdrop */}
            <div
              className="position-fixed top-0 w-100 h-100"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1040,
              }}
              onClick={handleCloseModal}
            ></div>

            {/* Modal Content */}
            <div
              className="position-fixed bottom-0 w-100 start-0 end-0"
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1734128781/accent_momsjv.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: '#fff',
                borderRadius: '15px 15px 0 0',
                zIndex: 1050,
                padding: '20px',
                boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">{modalContent.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="mt-3 text-center">
                <img
                  src={modalContent.imageUrl}
                  alt="modal icon"
                  className="img-fluid mb-3"
                  style={{ width: '70px', height: '70px' }}
                />
                <p>
                  <strong>{modalContent.reward}</strong> Rewards
                </p>
                {/* <input
                  type="text"
                  className="form-control mb-3"
                  placeholder={modalContent.placeholder}
                  disabled
                /> */}
                <button className="btn btn-gradient btn-primary w-100">
                  Start Mission
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default StarcoinApp;
