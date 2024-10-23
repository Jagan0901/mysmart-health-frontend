import { useNavigate } from "react-router-dom";
import image from "../assests/checkup.svg";
import indicator from "../assests/indicator3.svg";
import button from "../assests/nextbtn.svg";

export const WalkThrough3 = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");
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
        <p className="fs_18 text_primary2 fw_700">Smart Health Checkup</p>
        <p className="text_dark1 text-center fs_15 w_sm_100 w_md_50 w_lg_40 w-25">
          Experience the future of healthcare with our smart checkup feature.
          Get instant health insights and personalized recommendations
        </p>
        <img src={indicator} />
      </div>
      <div className="d-flex justify-content-end align-items-end mt-5 me-1 me-md-5">
        <img src={button} onClick={handleNavigate} role="button" />
      </div>
    </>
  );
};
