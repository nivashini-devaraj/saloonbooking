import { Link } from "react-router-dom";
import icon1 from "../assets/h-icon 1.png";
import icon2 from "../assets/h-icon 3.png";
import icon3 from "../assets/h-icon 2.png";
import icon4 from "../assets/h-icon 4.png";
import img1 from "../assets/hme_img 2.png";
import img2 from "../assets/hme_img 3.png";
import img3 from "../assets/hme_img 4.png";
import img4 from "../assets/hme_img 5.png";

import img5 from "../assets/t-icon 1.png"
import img6 from "../assets/t-icon 2.png"
import img7 from "../assets/t-icon 3.png"
import img8 from "../assets/t-icon 4.png"


import img9 from "../assets/hme_img 6.png";


function HomePage() {
    const servicesData =[
        {
            id:1,
            image: img1,
            title: "Hair",
            link: "/hairstyle",
        },
        {
            id:2,
            image: img2,
            title: "Facial",
             link: "/skincare",
        },
           {
            id:3,
            image: img3,
            title: "Spa",
            link: "/spa",
        },
           {
            id:4,
            image: img4,
            title: "Makeup",
            link: "/makeup",
        },
    ];

    const whyChooseData = [
    {
        id: 1,
        icon: icon1, 
        title: "Expert Stylists",
        description:
        "Our team of highly skilled stylists are passionate about creating stunning looks tailored to your individual style.",
    },
    {
        id: 2,
        icon: icon2, 
        title: "Affordable Pricing",
        description:
        "We offer competitive pricing without compromising on quality, ensuring you receive exceptional value.",
    },
    {
        id: 3,
        icon: icon3, 
        title: "Hygienic",
        description:
        "We maintain the highest standards of cleanliness and hygiene to ensure a safe and comfortable experience.",
    },
    {
        id: 4,
    icon: icon4, 
        title: "Easy Booking",
        description:
        "Our user-friendly online booking system makes it easy to schedule your appointments at your convenience.",
    },
    ];
  return (
    <>
        {/* Hero image section*/}
        <section className="hero-img-container">
            <div className='overlay'>
                <h1 className="fw-bold">Book Your Perfect Salon Appointment</h1>
                <p className="lead">Experience the ultimate in beauty and relaxation with our expert team and luxurious treatments.
                    </p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/booking ' className="theme-btn1">Book Appointment</Link>
                    <Link to='/membership ' className="theme-btn2">Get Membership</Link>
                </div>
            </div>
        </section>
   
        {/*  Services Section*/}
         <h2 className="serviceheader mt-5">Our services</h2>
        <section className="services-wrapper">
            {servicesData.map((service) => (
                <Link to={service.link} key={service.id} className="services-card">
                <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid"
                />
                <h5>{service.title}</h5>
                </Link>
            ))}
            </section>


        {/* Why Choose Us Section */}

        <section className="home-why">
        <div className="home-why-container">
            <h2 className="home-why-title mb-4 mt-5">Why Choose Us</h2>

            <div className="row g-4">
            {whyChooseData.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <div className="home-why-card h-100 p-4 rounded">
                    <div className="home-why-icon mb-3">
                    <img
                        src={item.icon}
                        alt={item.title}
                        className="img-fluid"
                        style={{ width: "28px" }}
                    />
                    </div>

                    <h5 className="home-why-card-title mb-2">
                    {item.title}
                    </h5>

                    <p className="home-why-card-text mb-0">
                    {item.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* Testimonial section */}

        <section className="testimonial-card mt-5">
            <div className="d-flex justify-content-center gap-4">
                <img src={img8} alt="user image" className="user-image" />
                <div className="d-flex flex-column justify-content-center gap-1">
                    <h6>Sophia Bennett</h6>
                    <small>2 months ago</small>
                </div>
                </div>
                <div>
                    <img src={img5} alt="review-star"/>
                    <img src={img5} alt="review-star"/>
                    <img src={img5} alt="review-star"/>
                    <img src={img5} alt="review-star"/>
                    <img src={img5} alt="review-star"/>
                </div>
                <p>I had an amazing experience at Luxe Salon! The staff was incredibly friendly and professional, and I absolutely loved my new haircut. I highly recommend this salon to anyone looking for top-notch service and a stylish, modern look.
                    </p>

                <div className="d-flex justify-content-center gap-4">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <img src={img6} alt="Like"/>
                        <p>10</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center justify-content-center">
                        <img src={img7} alt="Dislike"/>
                        <p>1</p>
                    </div>
                </div>
            
        </section>

        <section className="mt-5">
            <img src={img9} alt="Second -hero image"  className="img-fluid"/>
        </section>

        <section className="footer-hero-container mt-5">
           
                <h1 className="fw-bold">Book Your Perfect Salon Appointment</h1>
                <p className="lead">Experience the ultimate in beauty and relaxation with our expert team and luxurious treatments.
                    </p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/booking' className="theme-btn1">Book Appointment</Link>
                    <Link to='/membership' className="theme-btn2">Get Membership</Link>
                </div>
            
        </section>

    </>

  )}

export default HomePage;

   