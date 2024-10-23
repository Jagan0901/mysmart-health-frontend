import back from "../assests/backbtn.svg";
import onlineconsultation from "../assests/onlineconsult.svg";
import offlineconsultation from "../assests/offlineconsult.svg";
import { useNavigate } from "react-router-dom";

export const CreateApointment = () => {
    const navigate = useNavigate()
    const handleOnline = () => navigate("/onlineconsultation");
  return (
    <div>
      <div className="bg-white shadow py-5 ">
        <div className="mx-3">
          <img src={back} className="me-3" alt="back" />
          <span className="text_dark3 fw_600">Create Appointment</span>
        </div>
      </div>

      <div className="bg-white mt-5 container shadow py-5" role="button" onClick={handleOnline}>
        <div className="mx-3 container-fluid">
          <img
            src={onlineconsultation}
            className="me-4"
            alt="onlineconsultation"
          />
          <span className="text_primary2 fw_600">Online Consultation </span>
        </div>
      </div>

      <div className="bg-white mt-5 container shadow py-5 ">
        <div className="mx-3 container-fluid">
          <img
            src={offlineconsultation}
            className="me-4"
            alt="offlineconsultation"
          />
          <span className="text_primary2 fw_600">Offline Consultation </span>
        </div>
      </div>
    </div>
  );
};
