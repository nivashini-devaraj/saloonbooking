import { Link } from "react-router-dom";
import tick from "../assets/tick.png";
import img16 from "../assets/hs img 16.png";
import img17 from "../assets/hs img 17.png";
import img18 from "../assets/hs img 18.png";
import img19 from "../assets/hs img 19.png";
import img20 from "../assets/hs img 20.png";
import img21 from "../assets/mimg 1.png";
import img22 from "../assets/mimg 2.png";

import iconChoosePlan from "../assets/msw 1.png";
import iconPay from "../assets/msw 2.png";
import iconEnjoy from "../assets/msw 3.png";

function Membership() {
      const ReviewData=[
             {
                id: 1,
                name: "Sophia Bennett",
                time: "2 months ago",
                rating: 5,
                image: img16,
                comment: "I love my Silver Plan! The discounts are fantastic, and I always get my preferred appointment times. It's a game-changer for regular salon visits.",
                like:15,
                dislike: 2
            },
            {
                id: 2,
                name: "Olivia Carter",
                time: "4 months ago",
                rating: 4,
                image: img17,
                comment: "The Gold Plan is perfect for me. The quarterly free add-ons are a great bonus, and the priority booking ensures I never miss out on my favorite stylist.",
                like:12,
                dislike: 2
            },
            


        ];

        
        const steps = [
            {
            title: "Choose Your Plan",
            desc: "Select the membership plan that best suits your needs and preferences.",
            icon: iconChoosePlan,
            },
            {
            title: "Pay",
            desc: "Complete the payment process to activate your membership.",
            icon: iconPay,
            },
            {
            title: "Enjoy Benefits",
            desc: "Start enjoying exclusive discounts, free add-ons, and priority booking.",
            icon: iconEnjoy,
            },
        ];
    return(
        <>
        {/* Hero image section*/}
        <section className="hero-img-container">
            <div className='overlay'>
                <h1 className="fw-bold">Become a Salon Member & Save More</h1>
                <p className="lead text-center">Unlock exclusive benefits, significant discounts on all services, and priority booking. Elevate your salon experience with our membership plans.
                     </p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/ ' className="theme-btn1">Join Membership</Link>
                </div>
            </div>
        </section>

        <h4 className="member-head">Membership Plans </h4>

        <div className="member-wrapper">
            <div className="membership-card mc1">
                <div>
                    <div>
                        <h6>Silver Plan - Monthly</h6>
                        <span className="d-flex align-items-end"><h2>$49</h2><h6>/month</h6> </span>
                    </div>
                </div>
                <Link to="/membershipcheckout" className="select-plan">Select Plan</Link>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>10% off all services</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>1 free add-on service per month</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>Priority booking</p>
                </div>
            </div>

              <div className="membership-card mc2">
                <div className="d-flex justify-content-between w-100">
                    <div>
                        <h6>Gold Plan - Quarterly</h6>
                        <span className="d-flex align-items-end"><h2>$129</h2><h6>/year</h6> </span>
                    </div>
                    <p className="most-popular">Most Popular</p>
                </div>
                <Link to="/membershipcheckout" className="select-plan">Select Plan</Link>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>15% off all services</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>2 free add-on service per month</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>Priority booking</p>
                </div>
            </div>

            <div className="membership-card mc3">
                <div>
                    <div>
                        <h6>Platinum Plan - Yearly</h6>
                        <span className="d-flex align-items-end"><h2>$399</h2><h6>/quarter</h6> </span>
                    </div>
                </div>
                <Link to="/membershipcheckout" className="select-plan">Select Plan</Link>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>20% off all services</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>4 free add-on service per month</p>
                </div>
                 <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src={tick} alt="Tick"/>
                    <p>Priority booking</p>
                </div>
            </div>

        </div>
        
        {/* Comparison table */}
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Benefit</th>
                        <th>Silver Plan</th>
                        <th>Gold Plan</th>
                        <th>Platinum Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bb-style">
                        <th scope="row">Discount on Services</th>
                        <td>10%</td>
                        <td>15%</td>
                        <td>20%</td>
                    </tr>
                    <tr className="bb-style">
                        <th scope="row">Free Add-on Services</th>
                        <td>1 per month</td>
                        <td>2 per quarter</td>
                        <td>4 per year</td>
                    </tr>
                    <tr>
                        <th scope="row">Priority Booking</th>
                        <td>Included</td>
                        <td>Included</td>
                        <td>Included</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Membership works */}

        <section className="msw-section">
        <h2 className="msw-title">How Membership Works</h2>

        <div className="msw-steps">
            {/* left column: icons + dashed line */}
            <div className="msw-left">
            <div className="msw-line" />
            {steps.map((step, idx) => (
                <div key={idx} className="msw-iconWrap">
                <img className="msw-icon" src={step.icon} alt="" />
                </div>
            ))}
            </div>

            {/* right column: text */}
            <div className="msw-right">
            {steps.map((step, idx) => (
                <div key={idx} className="msw-step">
                <div className="msw-stepTitle">{step.title}</div>
                <div className="msw-stepDesc">{step.desc}</div>
                </div>
            ))}
            </div>
        </div>
        </section>


        {/* FAQ Section */}
        
        <div className="m-5">
            <div className="accordion mb-3" id="accordionOne">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne">
                        How long is my membership valid?
                    </button>
                    </h2>
                    <div id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionOne">
                    <div className="accordion-body">
                        Your membership is valid for the duration of the selected plan: monthly, quarterly, or yearly. It automatically renews unless canceled.
                    </div>
                    </div>
                </div>
            </div>

            <div className="accordion mb-3" id="accordionTwo">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    What is the Gold Plan?
                </button>
                </h2>
                <div id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionTwo">
                <div className="accordion-body">
                    The Gold Plan offers 15% discount and 2 free add-on services per quarter.
                </div>
                </div>
            </div>
            </div>

            <div className="accordion mb-3" id="accordionThree">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    What is the Platinum Plan?
                </button>
                </h2>
                <div id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionThree">
                <div className="accordion-body">
                    The Platinum Plan offers 20% discount and 4 free add-on services per year.
                </div>
                </div>
            </div>
            </div>

            <div className="accordion mb-3" id="accordionFour">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour">
                    Can I upgrade my plan later?
                </button>
                </h2>
                <div id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFour">
                <div className="accordion-body">
                    Yes, you can upgrade your plan at any time. The new benefits will apply immediately after confirmation.
                </div>
                </div>
            </div>
            </div>

        </div>
        

        {/* Member testimonials */}

        <h2 className="services-title mt-5">Member Testimonials</h2>
        <div className=" ">
            {ReviewData.map((review) => (
                <div key={review.id} className="hs-review-card"> 
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <img src={review.image} alt={review.name} />
                        <div>
                            <h6 className="services-card-title">{review.name}</h6>
                            <p className="services-card-desc">{review.time}</p>
                        </div>
                    </div>
                    <h6 className="review-comment">{review.comment}</h6>
                    <div className="review-stars">
                        {[1, 2, 3, 4, 5].map((starNumber) => (
                            <img
                            key={starNumber}
                            src={starNumber <= review.rating ? img19 : img20}
                            alt="star"
                            className="review-star-img"
                            />
                        ))}
                        </div>
                    <div className="review-like"> 
                        <img src= {img21} alt="Like" />
                        <p> {review.like}</p>
                        <img src= {img22} alt="Dislike" />
                        <p> {review.dislike}</p>
                    </div>
                </div>
            ))}
        </div>

        <section className="footer-hero-container mt-5">
            <h1 className="fw-bold">Start Saving Today</h1>
         
            <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                <Link to='/membership' className="theme-btn2">Get Membership</Link>
            </div>
            
        </section>
        </>
    );
}


export default Membership;