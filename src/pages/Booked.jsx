import { Link } from "react-router-dom";
import booked from "../assets/booked.png";

function Booked() {
    return(
        <>
        <div className="booked-wrapper">

            <h3> Appointment Booked Successfully</h3>
            <img src={booked} alt="Booked" className="img-fluid" />

            <h6>Your appointment has been successfully booked. Here are the details:</h6>
        
            <div className="booked-detail-table">
                <div className="column-style">
                    <p className="theme-txt">Booking ID</p>
                    <p className="white-txt">#123456</p>
                </div>
                <div className="column-style">
                    <p className="theme-txt">Service</p>
                    <p className="white-txt">Haircut & Style</p>
                </div>

                
                <div className="column-style">
                    <p className="theme-txt">Stylist</p>
                    <p className="white-txt">Ava Harper</p>
                </div>
                <div className="column-style">
                    <p className="theme-txt">Date & Time</p>
                    <p className="white-txt">July 20, 2024, 2:00 PM</p>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                <Link to='/profile' className="theme-btn1">View My Bookings</Link>
                <Link to='/' className="theme-btn2">Back to Home</Link>
            </div>
        </div>
        
       







</>
    );
}


export default Booked;