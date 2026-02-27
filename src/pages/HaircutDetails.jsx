import { Link } from "react-router-dom";
import icon1 from "../assets/hcd 1.png";
import icon2 from "../assets/hcd 2.png";
import icon3 from "../assets/hcd 3.png";
import icon4 from "../assets/hcd 4.png";


function HaircutDetails() {
    return(
        <>
        <div className="haircut-wrapper">
            <h3>Precision Haircut</h3>
            <p>Experience the art of precision haircutting at Luxora. Our skilled stylists use advanced techniques to create a personalized look that complements your features and lifestyle. From classic bobs to modern layers, we tailor each cut to enhance your natural beauty and ensure a flawless finish.
                </p>

            <div className="booked-detail-table">
                <div className="column-style">
                    <p className="theme2-text">Duration</p>
                    <p className="white-txt">60 minutes</p>
                </div>
                <div className="column-style">
                    <p className="theme2-text">Price</p>
                    <p className="white-txt">$85</p>
                </div>
            </div>

            <h5>Benefits</h5>
            <div className="benefits-wrapper">
                <div className="benefits-container">
                    <img src={icon1} alt="icon 1" />
                    <div>
                        <h6>Expert Stylists</h6>
                        <p>Our stylists are trained in the latest cutting techniques to deliver a precise and stylish haircut.
                            </p>
                    </div>
                </div>

                <div className="benefits-container">
                    <img src={icon2} alt="icon 2"/>
                    <div>
                        <h6>Personalized Consultation</h6>
                        <p>We take the time to understand your hair type and preferences to create a personalized look.
                             </p>
                    </div>
                </div>

                <div className="benefits-container">
                    <img src={icon3} alt="icon 3"/>
                    <div>
                        <h6>Relaxing Environment</h6>
                        <p>Enjoy a relaxing and comfortable experience in our modern salon environment.
                            </p>
                    </div>
                </div>
            </div>

            <h5>Recommended Stylist</h5>

            <div className="recomendedstylist">

                <div>
                    <h5>Sophia Bennett</h5>
                    <p className="stylist-content">Senior Stylist</p>

                    <button className="view-profile-btn">View Profile</button>
                </div>
                <img src={icon4} alt="stylist"/>

            </div>

             <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                <Link to='/booking' className="theme-btn1">Book Appointment</Link>
            </div>

        </div>
        

        </>
    );
}


export default HaircutDetails;