import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Hairstyle from "./pages/HairStyle"
import Profile from "./pages/Profile";
import Booked from "./pages/Booked";
import HaircutDetails from "./pages/HaircutDetails";
import MembershipCheckout from "./pages/MembershipCheckout";
import BookingPage from "./pages/BookingPage";
import SelectStylist from "./pages/SelectStylist";
import BookingCheckout from "./pages/BookingCheckout";
import Membership from "./pages/Membership";

import Makeup from "./pages/Makeup";
import Services from "./pages/Services";
import Skincare from "./pages/Skincare";
import Spa from "./pages/Spa";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/hairstyle" element={<Hairstyle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booked" element={<Booked />} />
        <Route path="/haircut" element={<HaircutDetails />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membershipcheckout" element={<MembershipCheckout />} />
         <Route path="/booking" element={<BookingPage />} />
        <Route path="/select-stylist" element={<SelectStylist />} />
        <Route path="/bookingcheckout" element={<BookingCheckout />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/services" element={<Services />} />
        <Route path="/makeup" element={<Makeup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;