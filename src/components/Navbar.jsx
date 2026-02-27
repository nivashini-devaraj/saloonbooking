import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userImg from "../assets/userimage.png";
import { useState } from "react";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setShowLoginModal(false);
    setShowSecondModal(true);
  };

  // Step 2: Final submit
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setShowSecondModal(false);
    setIsLoggedIn(true);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo}  alt="LOGO"/>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/membership">Membership</Link>
            </li>
       
           {/* Conditional Area */}
            <li className="nav-item">
              {isLoggedIn ? (
                <img
                  src={userImg}
                  alt="User"
                  style={{ width: "40px", height: "40px", borderRadius: "10px", cursor: "pointer" }}
                />
              ) : (
                <Link className="login-btn px-4" to="/"  onClick={() => setShowLoginModal(true)}>
                  Login
                </Link>
              )}
            </li>
         
          </ul>
        </div>

      </div>
        {/*  LOGIN MODAL  */}
      {showLoginModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleLoginSubmit}>
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowLoginModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                    <img src={logo}  alt="LOGO"/>
                    <h4>World’s Last minute Orders</h4>
                    <h6>Login or Sign Up</h6>
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Enter Your Phonenumber"
                    required
                  />
                <button type="submit" className="btn continue-btn">
                    Continue  
                  </button>
                </div>

                <div className="modal-footer">
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/*  SECOND MODAL  */}
      {showSecondModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleFinalSubmit}>
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowSecondModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                    <img src={logo}  alt="LOGO"/>
                    <h4>OTP Verification</h4>
                    <h6>We have sent a verification code to</h6>
                    <h6>+1 (555) 123-4567</h6>
                    <div className="d-flex gap-3">
                        <input
                            type="text"
                            className="form-control otp-input"
                            required
                        />
                        <input
                            type="text"
                            className="form-control otp-input"
                            required
                        />
                         <input
                            type="text"
                            className="form-control otp-input"
                            required
                        />
                         <input
                            type="text"
                            className="form-control otp-input"
                            required
                        />
                        
                    </div>
                  <button type="submit" className="btn  continue-btn">
                    Login
                  </button>
                </div>

                <div className="modal-footer">
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Background overlay fix */}
      {(showLoginModal || showSecondModal) && (
        <div className="modal-backdrop fade show"></div>
      )}
    </nav>
  );
};

export default Navbar;
