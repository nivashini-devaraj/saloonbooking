import { Link } from "react-router-dom";
import img1 from "../assets/spaimg 1.png";
import img2 from "../assets/spaimg 2.png";
import img3 from "../assets/spaimg 3.png";
import img4 from "../assets/spaimg 4.png";
import img5 from "../assets/spaimg 5.png";
import img6 from "../assets/spaimg 6.png";
import filledStar from "../assets/filled star.png";
import emptyStar from "../assets/emptystar.png";
import rm1 from "../assets/hs img 16.png";
import rm2 from "../assets/hs img 17.png";
import rm3 from "../assets/hs img 18.png";

function Spa() {
    const services = [
    {
      title: "Body Massage",
      duration: "60 mins",
      price: "$80",
      image: img1,
    },
    {
      title: "Head Massage",
      duration: "30 mins",
      price: "$45",
      image: img2,
    },
    {
      title: "Aroma Therapy",
      duration: "45 mins",
      price: "$65",
      image: img3,
    },
    {
      title: "Facial Treatment",
      duration: "50 mins",
      price: "$70",
      image: img4,
    },
    ];






    const ReviewData=[
                     {
                        id: 1,
                        name: "Sophia Bennett",
                        time: "2 weeks ago",
                        rating: 5,
                        image: rm1,
                        comment: "The body massage was incredibly relaxing. The therapist was skilled, and the atmosphere was perfect for unwinding. I felt completely refreshed afterward."
                    },
                    {
                        id: 2,
                        name: "Olivia Carter",
                        time: "1 month ago",
                        rating: 4,
                        image: rm2,
                        comment: "The head massage was good, but the room could have been a bit quieter. Overall, a pleasant experience."
                    },
                    {
                        id: 3,
                        name: "Isabella Davis",
                        time: "2 months ago",
                        rating: 5,
                        image: rm3,
                        comment: "The aromatherapy session was amazing! The scents were soothing, and I left feeling completely rejuvenated. Highly recommend!"
                    },
    ];


    return(
        <>
            {/* Hero image section*/}
            <section className="spa-hero-img-container">
                <div className='overlay'>
                    <h1 className="fw-bold"> Relaxing Spa Services</h1>
                    <p className="lead text-center">Indulge in our serene spa treatments designed to rejuvenate your mind and body. Experience tranquility and emerge refreshed.
                        </p>
                    <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                        <Link to='/booking ' className="theme-btn1">Book Apointment</Link>
                    </div>
                </div>
            </section>
        
       
            <section className="spa-ser-section">
            <h2 className="spa-ser-heading">Our Spa Services</h2>
             {services.map((service, index) => (
            <div className="spa-ser-container">
               
                <div className="spa-ser-list">
                    <div className="spa-ser-item" key={index}>
                    <h3 className="spa-ser-title">{service.title}</h3>
                    <p className="spa-ser-meta">
                        {service.duration} | {service.price}
                    </p>
                    <button className="spa-ser-btn">Book Now</button>
                    </div>
                </div>
                
                <div className="spa-ser-images">
                    <img src={service.image} alt={service.title} className="spa-ser-img" />
                </div>
            </div>))}
            </section>
        
        <h2 className="services-title mt-5 ms-5">Our Ambience</h2>
        <p className="text-white m-5">At Serene Salon, we prioritize your comfort and well-being. Our spa environment is designed to be a sanctuary of peace, with soft lighting, calming music, and a serene atmosphere. We maintain the highest standards of hygiene to ensure a safe and relaxing experience for every client.</p>
        
        <div className="d-flex m-4 gap-3 flex-wrap justify-content-start">
            <img src={img5} alt="Ambience1 " className="img-fluid ambience-img" />
            <img src={img6} alt="Ambience1 " className="img-fluid ambience-img" />

        </div>
        

        {/* Ratings & Reviews – Overall Section */}
        <div className="spa-re-container">

        {/* Left side */}
        <div className="spa-re-left">
            <div className="spa-re-score">4.8</div>

            <div className="spa-re-stars">
            <img src={filledStar} alt="star" className="spa-re-star" />
            <img src={filledStar} alt="star" className="spa-re-star" />
            <img src={filledStar} alt="star" className="spa-re-star" />
            <img src={filledStar} alt="star" className="spa-re-star" />
            <img src={emptyStar} alt="star" className="spa-re-star" />
            </div>

            <div className="spa-re-review-count">
            125 reviews
            </div>
        </div>

        {/* Right side */}
        <div className="spa-re-right">

            <div className="spa-re-row">
            <span className="spa-re-star-label">5</span>
            <div className="spa-re-bar">
                <div className="spa-re-bar-fill" style={{ width: "70%" }}></div>
            </div>
            <span className="spa-re-percent">70%</span>
            </div>

            <div className="spa-re-row">
            <span className="spa-re-star-label">4</span>
            <div className="spa-re-bar">
                <div className="spa-re-bar-fill" style={{ width: "20%" }}></div>
            </div>
            <span className="spa-re-percent">20%</span>
            </div>

            <div className="spa-re-row">
            <span className="spa-re-star-label">3</span>
            <div className="spa-re-bar">
                <div className="spa-re-bar-fill" style={{ width: "5%" }}></div>
            </div>
            <span className="spa-re-percent">5%</span>
            </div>

            <div className="spa-re-row">
            <span className="spa-re-star-label">2</span>
            <div className="spa-re-bar">
                <div className="spa-re-bar-fill" style={{ width: "3%" }}></div>
            </div>
            <span className="spa-re-percent">3%</span>
            </div>

            <div className="spa-re-row">
            <span className="spa-re-star-label">1</span>
            <div className="spa-re-bar">
                <div className="spa-re-bar-fill" style={{ width: "2%" }}></div>
            </div>
            <span className="spa-re-percent">2%</span>
            </div>

        </div>
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
                            src={starNumber <= review.rating ? filledStar : emptyStar}
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


export default Spa;