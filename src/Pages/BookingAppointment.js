import { useState } from "react";
import back from "../assests/backbtn.svg";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';  // Import calendar styles
import timeIcon from "../assests/timeclock.svg"; // Example icon for time slot
import { useNavigate } from "react-router-dom";

export const BookingAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [error, setError] = useState(""); 
    const handleSlotClick = (index) => {
      setSelectedSlot(index);
      setError("");
    };
    const [timeSlots, setTimeSlots] = useState([
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
    ]);

    const navigate = useNavigate();

    // Handle date change
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleContinue = ()=>{
        if(selectedSlot!==null) navigate("/patientdetails");
            else setError("Select The slot to continue")
    }
  return (
    <div>
      <div className="bg-white shadow py-5">
        <div className="mx-3">
          <img src={back} className="me-3" alt="back" />
          <span className="text_dark3 fw_600">Booking Appointment</span>
        </div>
      </div>

      {/* <div className="shadow bg-white container mt-5"> */}
      <div className="appointment-booking">
        {/* <h2 className="text-center">Book Your Appointment</h2> */}

        {/* Calendar Component */}
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            locale="en-US"
            showNeighboringMonth={false}
          />
        </div>

        {/* Display the selected date */}
        {/* <p className="text-center mt-4">
            Selected Date: {selectedDate.toDateString()}
          </p> */}
      </div>

      <div className="mt-5 container">
        <p className="my-3 fw_600 text_dark1">Available Slots</p>
        <>
          {/* Available Time Slots */}
          <div className="time-slots mt-4">
            <div className="d-flex justify-content-between flex-wrap">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className="time-slot-btn m-2 p-3 bg_primary1 text_white1 fw_500 rounded-3 border-0"
                  onClick={() => handleSlotClick(index)}
                  style={{
                    backgroundColor:
                      selectedSlot === index ? "#1F2587" : "#F3F4F9",
                    color: selectedSlot === index ? "white" : "#B4B4B4",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              className="d-none d-md-block py-3 px-5 rounded-5 bg_primary1 border-0 text_white1 w-25 fw_600"
              onClick={handleContinue}
            >
              Continue
            </button>

            <button
              className="d-block d-md-none py-3 px-5 rounded-5 bg_primary1 border-0 text_white1 w-100 w-md-25 fw_600"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
          <p className="text-danger text-center mt-2 fw-bolder">{error}</p>
        </>
      </div>
    </div>
  );
};
