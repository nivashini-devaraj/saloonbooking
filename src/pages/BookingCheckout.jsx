import React, { useState } from "react";
import card from "../assets/card.png";
import icon from "../assets/c icon.png";
import { Link } from "react-router-dom";

function BookingCheckout() {
  const [showCardForm, setShowCardForm] = useState(false);

  return (
    <div className="mc-checkout-container">
      <h2 className="mc-title text-center">Secure Payment</h2>

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

        <h6>Amount Summary</h6>
        <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center m-2">
             <p className="mc-plan-desc">Subtotal</p>
             <p className="white-txt">$120</p>
        </div>
        <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center m-2">
             <p className="mc-plan-desc">Taxes</p>
             <p className="white-txt">$10</p>
        </div>
         <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center m-2">
             <p className="mc-plan-desc">Total</p>
             <p className="white-txt">$130</p>
        </div>

        <p className="mc-plan-desc text-center">
           Secure payment powered by Stripe
        </p>
        <div className="d-flex justify-content-center align-items-center m-4">
            <Link to="/booked" className="mc-pay-btn" >
            Pay & Confirm Booking
            </Link>
        </div>

       

      </div>
    </div>
  );
}

export default BookingCheckout;