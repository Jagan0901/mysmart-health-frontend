import { useNavigate } from "react-router-dom";
import image from "../assests/dose.svg";
import indicator from "../assests/indicator2.svg";
import button from "../assests/nextbtn.svg";

export const WalkThrough2 = () => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/walkthrough3");
  return (
    <>
      <p
        className="text-end me-3 me-md-5 mt-5 fs_12 text_primary1 fw_600"
        role="button"
        onClick={handleNavigate}
      >
        Skip
      </p>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        // style={{ height: "100vh" }}
      >
        {/* <p className="text-start">Skip</p> */}
        <img src={image} className="p-5" alt="" />
        <p className="fs_18 text_primary2 fw_700">Never Miss a Dose</p>
        <p className="text_dark1 text-center fs_15 w_sm_100 w_md_50 w_lg_40 w-25">
          Set up personalized medicine reminders to ensure you never miss a
          dose. Stay on top of your treatment plan with timely notifications.
        </p>
        <img src={indicator} />
      </div>
      <div className="d-flex justify-content-end align-items-end mt-5 me-1 me-md-5">
        <img src={button} role="button" onClick={handleNavigate} />
      </div>
    </>
  );
};
