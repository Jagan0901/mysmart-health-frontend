import React from 'react'
import { useNavigate } from 'react-router-dom';
import booked from "../assests/bookedsuccessfully.svg";

export const BookedSuccessfully = () => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/");
    return (
      <div className="bg_primary1 full-height">
        <div
          className="d-flex flex-column justify-content-center align-items-center p-5"
          style={{ height: "100vh" }}
          // role="button"
          // onClick={handleNavigate}
        >
          <img className="w-25" src={booked} alt="booked" />
          <p className="text_white1 fw_600 fs_24 fs_sm_15">
            Booking Successful
          </p>
          <p className="text_white1 fw_500 fs_13 fs_sm_10 w_sm_100 w_md_50 w_lg_40 w-25 text-center">
            Appointment has been successfully scheduled. After receiving
            confirmation, please proceed to complete the payment process.
          </p>
        </div>
      </div>
    );
}
