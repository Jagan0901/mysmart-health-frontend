import back from "../assests/backbtn.svg";
import doctor from "../assests/doc.svg";
import rating from "../assests/rating.svg";
import consultation from "../assests/consultation.svg";
import clock from "../assests/timeclock.svg";
import search from "../assests/searchIcon.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OnlineConsultation = () => {
    const navigate = useNavigate();
    const doctorsData = [
      {
        name: "Dr. Vijayakumar",
        specialistIn: "General Physician",
        experience: 11,
        fee: 300,
        rating: 4.5,
      },

      {
        name: "Dr. Hardin",
        specialistIn: "General Physician",
        experience: 5,
        fee: 250,
        rating: 4.5,
      },

      {
        name: "Dr. Swetha",
        specialistIn: "General Physician",
        experience: 5,
        fee: 250,
        rating: 4.5,
      },

      {
        name: "Dr. Tessa",
        specialistIn: "General Physician",
        experience: 12,
        fee: 300,
        rating: 4.5,
      },

      {
        name: "Dr. Jessa",
        specialistIn: "General Physician",
        experience: 6,
        fee: 250,
        rating: 4.5,
      },
    ];

    const [doctors, setDoctors] = useState(doctorsData);
    const [searchResult,setSearchResult] = useState("");

     const getDoctorsBySearch = () => {
       const filteredDoctors = doctorsData.filter((doc) =>
         doc.name.toLowerCase().includes(searchResult.toLowerCase())
       );
       setDoctors(filteredDoctors);
     };

    useEffect(()=>{
        getDoctorsBySearch()
    },[searchResult])

    const handleSearch = (e)=> setSearchResult(e.target.value);

    const handleBooking = () => navigate("/bookingappointment");
  return (
    <div>
      <div className="bg-white shadow py-5">
        <div className="mx-3">
          <img src={back} className="me-3" alt="back" />
          <span className="text_dark3 fw_600">Online Consultation</span>
        </div>
      </div>

      <div className="my-3 input-group border-0 rounded-5 container ">
        <span
          class="input-group-text border-0 rounded-end rounded-5 bg-white"
          id="basic-addon1"
        >
          <img src={search} alt="search" />
        </span>
        <input
          type="text"
          aria-describedby="basic-addon1"
          class="form-control border-0 rounded-start rounded-5 py-3"
          placeholder="Search Specialities"
          onChange={handleSearch}
          value={searchResult}
        />
      </div>

      {doctors.map((doc) => (
        <div
          className="bg-white mt-5 container shadow py-5 pb-3"
          role="button"
          // onClick={handleOnline}
        >
          <div className="d-flex  mx-3 container-fluid">
            <div>
              <img src={doctor} className="me-4" alt="doc" />
              <div>
                <img src={rating} className="" alt="doc" />
                <span className="fs_12 text_dark2 fw_500">{doc.rating} ratings</span>
              </div>
            </div>
            <div>
              <p className="fw_600 fs_20 text_dark1 mb-0">{doc.name}</p>
              <p className="fs_15 fw_500 mb-0">{doc.specialistIn}</p>
              <span className="text_primary2 fw_600 fs_12">{doc.experience} years Exp </span>
              <div className="fw_500 fs_12 text_secondary1">
                <img src={consultation} className="me-2" alt="consultation" />
                <span>Consultation Fee ₹ {doc.fee}</span>
              </div>
              <div className="fw_500 fs_12 text_secondary1">
                <img src={clock} className="me-2" alt="clock" />
                <span>09.00 AM - 07.00 PM Today</span>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-between align-items-center mt-3 mb-0 py-4 bg-dange">
            <p className="fw_600 fs_15 text_primary2 d-flex pt-3 text-decoration-underline">
              View profile
            </p>
            <button
              className="py-3 px-5 rounded-5 bg_primary1 border-0 text_white1 fw_600"
              onClick={handleBooking}
            >
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
