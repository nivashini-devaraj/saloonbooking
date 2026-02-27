import { Link } from "react-router-dom";
import img16 from "../assets/simg 1.png";
import img17 from "../assets/simg 2.png";
import img18 from "../assets/simg 3.png";
import img19 from "../assets/simg 4.png";
import img20 from "../assets/simg 5.png";

import rm1 from "../assets/hs img 16.png";
import rm2 from "../assets/hs img 17.png";
import rm3 from "../assets/hs img 18.png";
import rm4 from "../assets/hs img 19.png";
import rm5 from "../assets/hs img 20.png";


function SkinCare() {

      const skincareData= [
            {
                id: 1,
                image: img16,
                title:"Facial",
                description: "Deep cleansing and hydration for a refreshed complexion.",
            },
            {
                id: 2,
                image: img17,
                title:"Clean-Up",
                description: "Quick and effective cleansing to remove impurities.",
            },
              {
                id: 3,
                image: img18,
                title:"Acne Treatment",
                description: "Targeted treatment to reduce acne and prevent breakouts.",
            },
            {
                id: 4,
                image: img19,
                title:"Anti-Aging",
                description: "Rejuvenating treatments to minimize wrinkles and fine lines.",
            },
            {
                id: 5,
                image: img20,
                title:"Skin Brightening",
                description: "Enhance your skin's natural radiance and even out skin tone.",
            },
    
        ];

        const ReviewData=[
                 {
                    id: 1,
                    name: "Sophia Clark",
                    time: "2 months ago",
                    rating: 5,
                    image: rm1,
                    comment: "I had the most amazing facial at Luxe Salon! My skin felt so refreshed and hydrated afterwards. The esthetician was very knowledgeable and made me feel comfortable throughout the entire process. Highly recommend!"
                },
                {
                    id: 2,
                    name: "Liam Davis",
                    time: "2 months ago",
                    rating: 4,
                    image: rm2,
                    comment: "The clean-up service was quick and effective. My skin felt much cleaner and smoother. The staff was friendly and professional. Will definitely be back!"
                },
                {
                    id: 3,
                    name: "Olivia Carter",
                    time: "4 months ago",
                    rating: 5,
                    image: rm3,
                    comment: "The anti-aging treatment was fantastic! I noticed a visible difference in my skin's firmness and texture. The salon has a relaxing atmosphere, and the service was top-notch. I'm very happy with the results."
                },
            ];
        
        const rows = [
            { duration: "60 mins", price: "$80" },
            { duration: "45 mins", price: "$50" },
            { duration: "75 mins", price: "$100" },
            { duration: "90 mins", price: "$120" },
            { duration: "60 mins", price: "$90" },
            ];

    return(
        <>
            {/* Hero image section*/}
            <section className="skin-hero-img-container">
                <div className='overlay'>
                    <h1 className="fw-bold">Skin Care Treatments</h1>
                    <p className="lead">Achieve glowing, healthy skin with our expert treatments tailored to your needs. </p>
                    <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                        <Link to='/booking' className="theme-btn1">Book Appointment</Link>
                        <Link to='/membership' className="theme-btn2">Get Membership</Link>
                    </div>
                </div>
            </section>
        
            <h2 className="services-title mt-4 ms-4">Skincare Services</h2>
        
            <div className="services-grid ms-4">
                {skincareData.map((care) => (
                    <div key={care.id} className="skincare-card"> 
                        <img src={care.image} alt={care.title} />
                        <h4 className="services-card-title">{care.title}</h4>
                        <p className="skincare-card-p">{care.description}</p>
                    </div>
                ))}
            </div>
        

            <div className="skc-table">
            {rows.map((row, idx) => (
                <div
                key={idx}
                className={`skc-row ${idx !== rows.length - 1 ? "skc-row-border" : ""}`}>
                <div className="skc-col">
                    <p className="skc-label">Duration</p>
                    <p className="skc-value">{row.duration}</p>
                </div>

                <div className="skc-col skc-col-right">
                    <p className="skc-label">Price</p>
                    <p className="skc-value">{row.price}</p>
                </div>
                </div>
            ))}
            </div>

            <h2 className="services-title mt-5 ms-5">Customer Testimonials</h2>
            <div className="mb-5 ms-5">
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
                                src={starNumber <= review.rating ? rm4 : rm5}
                                alt="star"
                                className="review-star-img"
                                />
                            ))}
                            </div>
                    </div>
                ))}
            </div>


            <section className="footer-hero-container mt-5 mb-5">
                <h1 className="fw-bold">Book Your Perfect Salon Appointment</h1>
                <p className="lead">Experience the ultimate in beauty and relaxation with our expert team and luxurious treatments.
                    </p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/booking' className="theme-btn1">Book Appointment</Link>
                    <Link to='/membership' className="theme-btn2">Get Membership</Link>
                </div>
                
            </section>

        
        </>
    );
}


export default SkinCare;