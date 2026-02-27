import { Link } from "react-router-dom";
import img1 from "../assets/makeup (1).png";
import img2 from "../assets/makeup (2).png";
import img3 from "../assets/makeup (3).png";
import img4 from "../assets/makeup (4).png";
import img5 from "../assets/makeup (5).png";
import img6 from "../assets/makeup (6).png";
import img21 from "../assets/simg 6.png";
import img22 from "../assets/simg 7.png";
import img23 from "../assets/simg 8.png";

function Makeup() {
    const services = [
    {
      title: "Bridal Makeup",
      description:
        "Look radiant on your special day with our bespoke bridal makeup service. Includes consultation, trial, and application on the wedding day.",
      meta:"Price: $450 | Duration: 3 hours | Style: Classic, Glamorous, Natural",
      image: img1,
    },
    {

      title: "Party Makeup",
      description:
        "Get ready to shine at any event with our party makeup service. Perfect for birthdays, galas, and special occasions.",
      meta:
        "Price: $200 | Duration: 1.5 hours | Style: Bold, Chic, Trendy",
      image: img2,
    },
    {
      title: "Engagement Makeup",
      description:
        "Capture the perfect engagement photos with our flawless makeup service. Designed to enhance your features and ensure you look your best.",
      meta:
        "Price: $300 | Duration: 2 hours | Style: Romantic, Soft Glam, Natural",
      image: img3,
    },
    {
      title: "Natural Makeup",
      description:
        "Enhance your everyday look with our natural makeup service. Subtle and refined, perfect for a polished yet effortless appearance.",
      meta:
        "Price: $150 | Duration: 1 hour | Style: Minimalist, Fresh, Radiant",
      image: img4,
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
        
            {/* Hero image section*/}
            <section className="makeup-hero-img-container">
                <div className='overlay'>
                    <h1 className="fw-bold">Professional Makeup Services</h1>
                    <p className="lead text-center">Enhance your natural beauty with our expert makeup artists. From bridal to everyday looks, we create stunning, long-lasting makeup tailored to your style and preferences.</p>
                    <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                        <Link to='/booking' className="theme-btn1">Book Appointment</Link>
                    </div>
                </div>
            </section>
        
            <section className="makeup-section">
            <div className="makeup-container">
                {services.map((service, index) => (
                <div className="makeup-card" key={index}>
                    {/* Image */}
                    <img
                    src={service.image}
                    alt={service.title}
                    className="makeup-image"
                    />

                    {/* Content */}
                    <div className="makeup-content">
                    <h3 className="makeup-title">{service.title}</h3>
                    <p className="makeup-description">{service.description}</p>
                    <p className="makeup-meta">{service.meta}</p>
                    </div>

                    {/* Button */}
                    <button className="makeup-btn">Book Now</button>
                </div>
                ))}
            </div>
            </section>

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


            <div className="d-flex m-4 gap-3 flex-wrap justify-content-start">
                <img src={img5} alt="Ambience1 " className="img-fluid ambience-img" />
                <img src={img6} alt="Ambience1 " className="img-fluid ambience-img" />
    
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


export default Makeup;