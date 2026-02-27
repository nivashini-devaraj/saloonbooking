import { Link } from "react-router-dom";
import { useState } from "react";

import img1 from "../assets/hs img 1.png";
import img2 from "../assets/hs img 2.png";
import img3 from "../assets/hs img 3.png";
import img4 from "../assets/hs img 4.png";
import img5 from "../assets/hs img 5.png";
import img6 from "../assets/hs img 6.png";
import img7 from "../assets/hs img 7.png";
import img8 from "../assets/hs img 8.png";
import img9 from "../assets/hs img 9.png";
import img10 from "../assets/hs img 10.png";
import img11 from "../assets/hs img 11.png";
import img12 from "../assets/hs img 12.png";
import img13 from "../assets/hs img 13.png";
import img14 from "../assets/hs img 14.png";
import img15 from "../assets/hs img 15.png";
import img16 from "../assets/hs img 16.png";
import img17 from "../assets/hs img 17.png";
import img18 from "../assets/hs img 18.png";
import img19 from "../assets/hs img 19.png";
import img20 from "../assets/hs img 20.png";



function Hairstyle() {

    const [activeFilter, setActiveFilter] = useState("all");
    

    const servicesData = [
    {
        id: 1,
        title: "Women's Hair Cut",
        description: "Trendy cuts tailored to your style",
        image: img2,
        category: "women",
    },
    {
        id: 2,
        title: "Men's Hair Cut",
        description: "Precision cuts for a sharp look",
         image: img3,
        category: "men",
    },
    {
        id: 3,
        title: "Kids Hair Cut",
        description: "Fun and safe cuts for the little ones",
         image: img4,
        category: "kids",
    },
    {
        id: 4,
        title: "Hair Styling",
        description: "Styling for any occasion",
         image: img5,
        category: "women",
    },
    {
        id: 5,
        title: "Hair Coloring",
        description: "Vibrant colors and highlights",
         image: img6,
        category: "women",
    },
    {
        id: 6,
        title: "Hair Spa",
        description: "Relaxing treatments for healthy hair",
         image: img7,
        category: "women",
    },
    {
        id: 7,
        title: "Hair Straightening",
        description: "Sleek and straight hair",
         image: img8,
        category: "women",
    },
    {
        id: 8,
        title: "Hair Smoothening",
        description: "Smooth and manageable hair",
         image: img9,
        category: "women",
    },
    ];

    const stylistData = [
    {
        id: 1,
        name: " Sophia Bennett",
        description: "Specializes in women's cuts and styling",
        image: img10,
    },
    {
        id: 2,
        name: " Ethan Carter",
        description: "Expert in men's grooming and trends",
        image: img11,
    },
    {
        id: 3,
        name: " Olivia Harper",
        description: "Coloring and treatment specialist",
        image: img12,
    },
    ];
   
     const styleData = [
    {
        id: 1,
        description: "Bob Cut",
        image: img13,
    },
    {
        id: 2,
        description: "Layered Hair",
        image: img14,
    },
    {
        id: 3,
        description: "Pixie Cut",
        image: img15,
    },
    ];

    const ReviewData=[
         {
            id: 1,
            name: "Ava Thompson",
            time: "1 month ago",
            rating: 5,
            image: img16,
            comment: "Sophia gave me the best haircut I've ever had! She really understood what I wanted and the result was amazing."
        },
        {
            id: 2,
            name: "Liam Davis",
            time: "2 months ago",
            rating: 4,
            image: img17,
            comment: "Ethan is a great stylist. He gave me a stylish and modern haircut, but it was a bit pricey!"
        },
        {
            id: 3,
            name: "Chloe Wilson",
            time: "3 months ago",
            rating: 5,
            image: img18,
            comment: "Olivia transformed my hair with a beautiful color treatment. I highly recommend her!"
        },
    ];

    const filteredServices =
        activeFilter === "all"
            ? servicesData
            : servicesData.filter(
                (service) => service.category === activeFilter
            );

    return(
        <>

        {/* Hero image section*/}
        <section className="hs-hero-img-container">
            <div className='overlay'>
                <h1 className="fw-bold">Hair Cut & Hair Care Services</h1>
                <p className="lead">Experience the ultimate in beauty and relaxation with our expert team and luxurious treatments.
                    </p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/booking ' className="theme-btn1">Book Appointment</Link>
                    <Link to='/membership ' className="theme-btn2">Get Membership</Link>
                </div>
            </div>
        </section>

        {/* Filter service */}
         <div className="services-filter-section">
        <h3 className="services-filter-title">Filter Services</h3>

        <div className="services-filter-buttons">
            <button
            className={`services-filter-btn ${activeFilter === "women" ? "active" : ""}`}
            onClick={() => setActiveFilter("women")}
            >
            Women
            </button>

            <button
            className={`services-filter-btn ${activeFilter === "men" ? "active" : ""}`}
            onClick={() => setActiveFilter("men")}
            >
            Men
            </button>

            <button
            className={`services-filter-btn ${activeFilter === "kids" ? "active" : ""}`}
            onClick={() => setActiveFilter("kids")}
            >
            Kids
            </button>
        </div>
        </div>



        {/* Our Services Section */}

        <div className="services-section">
        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
            {filteredServices.map((service) => (
            <Link to= '/haircut' key={service.id} className="services-card">
                <div className="services-card-img">
                <img src={service.image} alt={service.title} />
                </div>
                <h4 className="services-card-title">{service.title}</h4>
                <p className="services-card-desc">{service.description}</p>
            </Link>
            ))}
        </div>

        <h2 className="services-title">Featured Stylists</h2>

        <div className="services-grid">
            {stylistData.map((stylist) => (
                <div key={stylist.id} className="stylistcard"> 
                    <img src={stylist.image} alt={stylist.name} />
                    <h4 className="services-card-title">{stylist.name}</h4>
                    <p className="services-card-desc">{stylist.description}</p>
                </div>
            ))}
        </div>

        <h2 className="services-title">Trending Hairstyles</h2>
        
        <div className="services-grid">
            {styleData.map((style) => (
                <div key={style.id} className="stylecard"> 
                    <img src={style.image} alt={style.description} />
                    <h4 className="services-card-title">{style.description}</h4>
                </div>
            ))}
        </div>
        <h2 className="services-title">Customer Reviews</h2>
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
                </div>
            ))}
        </div>
        </div> 
        <section className="footer-hero-container">
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


export default Hairstyle;