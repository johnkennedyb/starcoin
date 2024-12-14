
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';

function Task() {
  const [activeTab, setActiveTab] = useState('Special');

   const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    reward: 0,
    placeholder: '',
  });

  // Open Modal and Set Content Dynamically
  const handleOpenModal = (title, reward, placeholder) => {
    setModalContent({ title, reward, placeholder });
    setShowModal(true);
  };

  // Close Modal
  const handleCloseModal = () => setShowModal(false);

  

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Special':
        return (
        <div className="list-group mb-3 text-white mx-4">
      {/* Invite Friends */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Invite Friends', 200, 'Your invite link')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="Invite friends"
            className="img-fluid me-3"
            style={{ width: '30px', height: '30px' }}
          />
          <span>
            <b>Invite Friends</b>
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              200 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Join Telegram Group */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Join Telegram Group', 200, 'Telegram task')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="Telegram group"
            className="img-fluid me-3"
            style={{ height: '30px' }}
          />
          <span>
            Join Telegram Group
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              200 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Join Facebook */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Join Facebook', 300, 'Facebook task')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="Facebook"
            className="img-fluid me-3"
            style={{ height: '30px' }}
          />
          <span>
            Join Facebook
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              2000 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Join Twitter */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Join Twitter', 500, 'Twitter task')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="Twitter"
            className="img-fluid me-3"
            style={{ height: '30px' }}
          />
          <span>
            Join Twitter
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              20000 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Join YouTube */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Join YouTube', 400, 'YouTube task')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="YouTube"
            className="img-fluid me-3"
            style={{ height: '30px' }}
          />
          <span>
            Join YouTube
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              200000 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Join Instagram */}
      <button
        style={{ backgroundColor: '#454545', borderRadius: '10px' }}
        className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
        onClick={() =>
          handleOpenModal('Join Instagram', 600, 'Instagram task')
        }
      >
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
            alt="Instagram"
            className="img-fluid me-3"
            style={{ height: '30px' }}
          />
          <span>
            Join Instagram
            <br />
            <span>
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                alt="Referral reward"
                className="img-fluid"
                style={{ width: '20px', height: '20px' }}
              />
              6000 <i className="bi bi-coin"></i>
            </span>
          </span>
        </div>
        &gt;
      </button>

      {/* Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="position-fixed top-0 w-100 h-100"
            style={{
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              <p>
                <strong>{modalContent.reward}</strong> Rewards
              </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder={modalContent.placeholder}
                disabled
              />
              <button className="btn btn-gradient btn-primary w-100">
                Start Mission
              </button>
            </div>
          </div>
        </>
      )}
    </div>
        );
      case 'RefTask':
        return (
          <div className="list-group mb-3 text-white mx-4">
            {Array.from({ length: 5 }, (_, index) => (
              <button
                key={index}
                style={{  borderRadius: '10px' }}
                className="mb-2 bg-secondary list-group-item list-group-item-action justify-content-between align-items-center text-white"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096834/bookmark_kzxbsn.png"
                    alt={`Invite ${index + 1} friend`}
                    className="img-fluid me-3"
                    style={{ width: '30px', height: '30px' }}
                  />
                  <span>
                    <b>Invite {index + 1} Friend{index + 1 > 1 ? 's' : ''}</b>
                    <br />
                    <span>
                      <img
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                        alt="Referral reward"
                        className="img-fluid"
                        style={{ width: '20px', height: '20px' }}
                      />
                      200 <i className="bi bi-coin"></i>
                    </span>
                  </span>
                  
                </div>
                <div
  className="progress-bar"
  style={{
    width: "100%",
    background: "#212529", // Light blue and light green
    border: "1px solid black", // Transparent border
    borderRadius: "13px",
    padding:"7px"
    // Optional: rounded corners for a smoother look
  }}
></div>
              </button>
            ))}
          </div>
        );
      case 'Leagues':
      default:
        return (
          <div className="list-group mb-3 text-white mx-4">
            <button
              style={{ backgroundColor: '#454545', borderRadius: '10px' }}
              className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                  alt="Bronze"
                  className="img-fluid me-3"
                  style={{ width: '30px', height: '30px' }}
                />
                <span>
                  <b>Bronze</b>
                  <br />
                  1,000 coins
                </span>
              </div>
              <button className="btn btn-secondary">Claim</button>
            
            </button>
            <button
              style={{ backgroundColor: '#454545', borderRadius: '10px' }}
              className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                  alt="Bronze"
                  className="img-fluid me-3"
                  style={{ width: '30px', height: '30px' }}
                />
                <span>
                  <b>Silver</b>
                  <br />
                  2,000 coins
                </span>
              </div>
              <button className="btn btn-secondary">Claim</button>
            </button>
            <button
              style={{ backgroundColor: '#454545', borderRadius: '10px' }}
              className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                  alt="Bronze"
                  className="img-fluid me-3"
                  style={{ width: '30px', height: '30px' }}
                />
                <span>
                  <b>Gold</b>
                  <br />
                  1,000 coins
                </span>
              </div>
              <button className="btn btn-secondary">Claim</button>
            </button>
            <button
              style={{ backgroundColor: '#454545', borderRadius: '10px' }}
              className="mb-2 list-group-item list-group-item-action d-flex justify-content-between align-items-center text-white"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734096881/coin_aq3vpy.png"
                  alt="Bronze"
                  className="img-fluid me-3"
                  style={{ width: '30px', height: '30px' }}
                />
                <span>
                  <b>Platinum</b>
                  <br />
                  7,000 coins
                </span>
              </div>
              <button className="btn btn-secondary">Claim</button>
            </button>
            {/* Add Silver, Gold, etc. */}
          </div>
        );
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <div className=" text-light bg-dark" style={{ minHeight: '100vh' }}>
        {/* Balance Section */}
        <div
          className="text-center  "
          style={{
            background:
              'url(https://res.cloudinary.com/dw7w2at8k/image/upload/v1734122027/mini_r1o5dg.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
              paddingTop:'40px',
    paddingBottom:'70px'
          }}
        >
          <small>Your share balance</small>
          <div className="fs-1 d-flex justify-content-center pb-2" style={{ color: '#fde49b' }}>
            <img
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1734097658/tap_ujyksb.png"
              alt="starcoin"
              className="img-fluid"
              style={{ width: '70px', height: '70px' }}
            />
            <span className="py-2 pb-2">2,506</span>
          </div>
          <div className="d-flex mx-3 py-1 justify-content-around " style={{  border: '1px solid white', borderRadius: '10px'}}>
          <button
            className={`btn text-white ${activeTab === 'Special' ? 'btn-secondary' : 'btn-transparent'}`}
            onClick={() => setActiveTab('Special')}
          >
            Special
          </button>
          <button
            className={`btn text-white ${activeTab === 'Leagues' ? 'btn-secondary' : 'btn-transparent'}`}
            onClick={() => setActiveTab('Leagues')}
          >
            Leagues
          </button>
          <button
            className={`btn text-white ${activeTab === 'RefTask' ? 'btn-secondary' : 'btn-transparent'}` }
            onClick={() => setActiveTab('RefTask')}
          >
            Ref Tasks
          </button>
        </div>
        </div>

        {/* Tabs Section */}
       

        {/* Tab Content */}
        {renderTabContent()}
      </div>
      <Footer />
    </div>
  );
}

export default Task;
