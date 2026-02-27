import React, { useState } from "react";
import card from "../assets/card.png";
import icon from "../assets/c icon.png";
import { Link } from "react-router-dom";

function MembershipCheckout() {
  const [showCardForm, setShowCardForm] = useState(false);

  return (
    <div className="mc-checkout-container">
      <h2 className="mc-title">Checkout</h2>

      <div className="mc-membership-section">
        <div className="mc-membership-info">
          <h4 className="mc-plan-title">Membership Plan</h4>
          <p className="mc-plan-name">Gold Membership</p>
          <p className="mc-plan-desc">
            Enjoy exclusive benefits and discounts on all services.
          </p>
        </div>

        {/* Gold Card Image Frame */}
        <div className="mc-gold-card-frame">
          <img
            src={card}
            alt="Gold Membership Card"
            className="mc-gold-card-img"
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="mc-payment-section">
        <h4 className="mc-payment-title">Payment Method</h4>

        <div
          className="mc-payment-option"
          onClick={() => setShowCardForm(!showCardForm)}
        >
          Credit / Debit Card
        </div>

        {showCardForm && (
          <div className="mc-card-form">
            
            <h6><img src={icon} alt="Card Icon"/> Credit / Debit Card</h6>
            <input
              type="text"
              placeholder="Card Number"
              className="mc-input"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="mc-input"
            />

            <div className="mc-row">
              <input
                type="text"
                placeholder="Expiry Date"
                className="mc-input"
              />
              <input
                type="text"
                placeholder="CVV"
                className="mc-input"
              />
            </div>
          </div>
        )}

         <div
          className="mc-payment-option">
          UPI Payment
        </div>
         <p className="mc-plan-desc text-center">
            Secure payment. Your data is protected.
          </p>

        <button className="mc-pay-btn" data-bs-toggle="modal"
                data-bs-target="#mcSuccessModal">
          Pay & Activate Membership
        </button>

        <div
        className="modal fade mc-success-modal"
        id="mcSuccessModal"
        tabIndex="-1"
        aria-hidden="true"
        >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content mc-modal-content">

            <div className="mc-modal-body">

                <h2 className="mc-success-title text-center">
                Membership Activated
                </h2>

                <p className="mc-success-text text-center">
                Your membership is now active and ready to use.
                Enjoy the benefits!
                </p>

                {/* Divider */}
                <hr className="mc-divider" />

                {/* Membership Details */}
                <div className="mc-membership-details">

                <div className="mc-detail-item">
                    <p className="mc-detail-label">Membership ID</p>
                    <p className="mc-detail-value">#1234567890</p>
                </div>

                <div className="mc-detail-item">
                    <p className="mc-detail-label">Valid Until</p>
                    <p className="mc-detail-value">December 31, 2024</p>
                </div>

                </div>

                {/* Button aligned right */}
                <div className="mc-btn-wrapper">
                <Link to="/"
                    className="mc-home-btn"
                    data-bs-dismiss="modal">
                    Go to Home
                </Link>
                </div>

            </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCheckout;