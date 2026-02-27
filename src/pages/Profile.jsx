import { Link } from "react-router-dom";
import userImg from "../assets/userimage1.png";
import service1 from "../assets/profilepg 1.png";
import service2 from "../assets/profilepg 2.png";


function Profile() {

    return(
        <>
        <div className="m-3 d-flex justify-content-start align-items-center gap-3">
            <img src={userImg} alt="User Image" className="profile-image"/>
            <div>
                <h3 className="username">Sophia Bennett</h3>
                <p className="usermail">sophia.bennett@email.com</p>
            </div>
        </div>


        <div className="line-container">
            <h4>Upcoming Bookings</h4>
              <div className="line"></div>
        </div>

        <div className="booking-wrapper">
            <div className="booking-details">
                <p className="usermail">Booking ID: #12345</p>
                <h6 className="username">Haircut & Style</h6>
                <p className="usermail">Date: July 15, 2024 · Time: 2:00 PM · Stylist: Emily Carter · Status: Confirmed
                    </p>
                <button className="cancel-btn">Cancel</button>
            </div>
            <img src={service1} alt="Service 1" className="img-fluid"/>
        </div>

        <div className="booking-wrapper">
            <div className="booking-details">
                <p className="usermail">Booking ID: #67890</p>
                <h6 className="username">Manicure</h6>
                <p className="usermail">Date: July 20, 2024 · Time: 10:00 AM · Stylist: Olivia Davis · Status: Confirmed
                    </p>
                <button className="cancel-btn">Reschedule</button>
            </div>
            <img src={service2} alt="Service 1" className="img-fluid"/>
        </div>

        <div className="booking-wrapper">
            <div></div>
        <button className="logout-btn"> Logout</button>

        </div>





        </>
    );
}


export default Profile;