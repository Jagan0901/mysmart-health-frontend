import { useNavigate } from "react-router-dom";
import splash from "../assests/splash.svg";

export const Splash = () => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/walkthrough1");
  return (
    <div className="bg_primary1 full-height">
      <div
        className="d-flex flex-column justify-content-center align-items-center p-5"
        style={{ height: "100vh" }}
        role="button"
        onClick={handleNavigate}
      >
        <img className="w-25" src={splash} />
        <p className="text_white1 fw_700 fs_24 fs_sm_10">Health Desk</p>
      </div>
    </div>
  );
}
