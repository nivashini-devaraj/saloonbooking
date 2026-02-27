import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (location.state?.stylist) {
      setStylist(location.state.stylist);
    }
  }, [location.state]);

  return (
    <div className="bking-container">
      <h2>Your Booking</h2>

      <div className="bking-form">

      {/* Service */}
      <div className="bking-row">
        <div className="bking-left">
          <label>Service</label>
          <select
            className="bking-input"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >

            <option value="">Select</option>
            <option value="Haircut">Haircut</option>
            <option value="Coloring">Skin Care</option>
            <option value="Spa">Spa</option>
            <option value="Make up"> Make up</option>

          </select>
        </div>
        <button className="bking-edit-btn">Edit</button>
      </div>

      {/* Stylist */}
      <div className="bking-row">
        <div className="bking-left">
          <label>Stylist</label>
          <div
            className="bking-input bking-clickable"
            onClick={() => navigate("/select-stylist")}
          >
            {stylist || "Select Stylist"}
          </div>
        </div>
        <button className="bking-edit-btn">Edit</button>
      </div>

      {/* Date */}
      <div className="bking-row">
        <div className="bking-left">
          <label>Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="bking-input"
            placeholderText="Select Date"
          />
        </div>
        <button className="bking-edit-btn">Edit</button>
      </div>

      {/* Time */}
      <div className="bking-row">
        <div className="bking-left">
          <label>Time</label>
          <select
            className="bking-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select Time</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
          </select>
        </div>
        <button className="bking-edit-btn">Edit</button>
      </div>

        {/* Total Row */}
        <div className="bking-row bking-total-row">
          <div className="bking-left">
            <p className="bking-total-text">Total</p>
          </div>
          <div className="bking-total-amount">$120</div>
        </div>

        <Link to="/bookingcheckout" className="bking-btn">
          Proceed to Payment
        </Link>

      </div>


     

    </div>
  );
}

export default BookingPage;