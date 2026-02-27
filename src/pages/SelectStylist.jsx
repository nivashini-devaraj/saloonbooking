import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/stylist 1.png";
import img2 from "../assets/stylist 2.png";
import img3 from "../assets/stylist 3.png";


function SelectStylist() {
  const navigate = useNavigate();
  const [selectedStylist, setSelectedStylist] = useState("");

  const stylists = [
        {
            id:1,
            name: "Ava Harper",
            speciality:"Hair Coloring",
            image: img1,
        },
        {   
            id:2,
            name: "Ethan Bennett",
            speciality:"Hair Cutting",
            image: img2,
        },
        {   
            id:3,
            name: "Olivia Carter",
            speciality:"Hair Styling",
            image: img3,
        },
  ];





  return (
    <div className="bking-container">
      <h2>Select a Stylist</h2>
      <p className="theme-txt">Choose a stylist that best fits your needs and preferences.</p>

      {stylists.map((stylist) => (
            <div key={stylist.name} className="bking-stylist-card">

            <div className="bking-stylist-left">
                <h4>{stylist.name}</h4>
                <p className="theme-txt">{stylist.speciality}</p>

                <button
                className="bking-small-btn"
                onClick={() => setSelectedStylist(stylist.name)}
                >
                Select
                </button>
            </div>

            <div className="bking-stylist-image">
                <img src={stylist.image} alt={stylist.name} />
            </div>

            </div>
      ))}

      <button
        className="bking-btn"
        disabled={!selectedStylist}
        onClick={() =>
          navigate("/booking", { state: { stylist: selectedStylist } })
        }
      >
        Continue with Selected Stylist
      </button>
    </div>
  );
}

export default SelectStylist;