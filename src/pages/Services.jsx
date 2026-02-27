import { Link } from "react-router-dom";

import img1 from "../assets/hme_img 2.png";
import img2 from "../assets/hme_img 3.png";
import img3 from "../assets/hme_img 4.png";
import img4 from "../assets/hme_img 5.png";

import img10 from "../assets/hs img 10.png";
import img11 from "../assets/hs img 11.png";
import img12 from "../assets/hs img 12.png";
import img13 from "../assets/hs img 13.png";
import img14 from "../assets/hs img 14.png";
import img15 from "../assets/hs img 15.png";

import img16 from "../assets/simg 1.png";
import img17 from "../assets/simg 2.png";
import img18 from "../assets/simg 3.png";
import img19 from "../assets/simg 4.png";
import img20 from "../assets/simg 5.png";
import img21 from "../assets/simg 6.png";
import img22 from "../assets/simg 7.png";
import img23 from "../assets/simg 8.png";



function Services() {

    
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
     const MakeupartistData= [
        {
            id: 1,
            image: img21,
            name:"Sophia Bennett",
            description: "4.9 (120 reviews)",
        },
        {
            id: 2,
            image: img22,
            name:"Olivia Carter",
            description: "4.8 (95 reviews)",
        },
        {
            id: 3,
            image: img23,
            name:"Isabella Hayes",
            description: "4.7 (110 reviews)",
        },
    ];



    return(
        <>

        <div className="services-section">

        {/*  Services Section*/}
         <h2 className="services-title mt-5">Our services</h2>
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

        <h2 className="services-title mt-4">Featured Stylists</h2>

        <div className="services-grid">
            {stylistData.map((stylist) => (
                <div key={stylist.id} className="stylistcard"> 
                    <img src={stylist.image} alt={stylist.name} />
                    <h4 className="services-card-title">{stylist.name}</h4>
                    <p className="services-card-desc">{stylist.description}</p>
                </div>
            ))}
        </div>

        <h2 className="services-title mt-4">Trending Hairstyles</h2>
        
        <div className="services-grid">
            {styleData.map((style) => (
                <div key={style.id} className="stylecard"> 
                    <img src={style.image} alt={style.description} />
                    <h4 className="services-card-title">{style.description}</h4>
                </div>
            ))}
        </div>


        
        <h2 className="services-title mt-4">Skincare Services</h2>
        
        <div className="services-grid">
            {skincareData.map((care) => (
                <div key={care.id} className="skincare-card"> 
                    <img src={care.image} alt={care.title} />
                    <h4 className="services-card-title">{care.title}</h4>
                    <p className="skincare-card-p">{care.description}</p>
                </div>
            ))}
        </div>

        <h2 className="services-title mt-4">Meet Our Makeup Artists</h2>
        
        <div className="services-grid">
            {MakeupartistData.map((artist) => (
                <div key={artist.id} className="skincare-card"> 
                    <img src={artist.image} alt={artist.name} />
                    <h4 className="services-card-title">{artist.name}</h4>
                    <p className="review-txt">{artist.description}</p>
                </div>
            ))}
        </div>
     
        </div> 
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
    );

}


export default Services;