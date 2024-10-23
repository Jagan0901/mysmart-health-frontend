import ellipse from "../assests/ellipse.svg";
import ellipseblue from "../assests/ellipseblue.svg";
import notification from "../assests/bell.svg";
import logo from "../assests/loginlogo.svg";
import chevronright from "../assests/chevronright.svg";
import medicalprescription from "../assests/medicalprescription.svg";
import doctor from "../assests/doctor.svg";
import calendar from "../assests/calendar.svg";
import reports from "../assests/reports.svg";
import home from "../assests/home.svg";
import records from "../assests/records.svg";
import device from "../assests/device.svg";
import profile from "../assests/profile.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleAppointment = () => navigate("/createapointment");
  return (
    <div>
      {/* Header starts here */}
      <div className="d-flex flex-row justify-content-between bg_primary1 py-5 px-4 semi-circle position-relative">
        <div className="">
          <p className="fw_600 fs_18 text_white1 pb-5">Hi Jagan! </p>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <img
            src={ellipse}
            className="position-absolute me_sm_10 me_md_7"
            style={{ top: "11%", right: "3%" }}
            alt="ellipse"
          />
          <img
            src={notification}
            className="position-absolute"
            alt="notification"
          />
        </div>
      </div>
      {/* Header ends here */}

      {/* Body starts here */}
      <div
        className="container position-absolute"
        style={{ top: "15%", left: "0%" }}
      >
        <div class="card shadow border-0" style={{ minWidth: "18rem" }}>
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <h5 class="card-title text_dark2 fw_600">Individual Plan</h5>
                <h6 class="card-subtitle text_secondary1 mb-2 fw_400 fs_12">
                  Book your health checkup
                </h6>
              </div>
              <img src={logo} alt="logo" />
            </div>
            <p className="fw_500 text_primary2 mt-3 mb-2">
              Know your Benefits{" "}
              <img className="ms-1" src={chevronright} alt="chevronright" />{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div class="card shadow border-0" style={{ minWidth: "18rem" }}>
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <h5 class="card-title text_dark1 fw_700">
                  Book Annual Health Checkups
                </h5>
                {/* <h6 class="card-subtitle text_secondary1 mb-2 fw_400 fs_12">
                  Book your health checkup
                </h6> */}
                <div className="d-flex justify-content-between mt-3 mb-0">
                  <div className="d-flex">
                    <img
                      src={ellipseblue}
                      className="mt-2 me-1"
                      style={{ height: "4px" }}
                    />
                    <p className="fw_600 fs_12 text_dark3">Diabetes</p>
                  </div>
                  <div className="d-flex">
                    <img
                      src={ellipseblue}
                      className="mt-2 me-1"
                      style={{ height: "4px" }}
                    />
                    <p className="fw_600 fs_12 text_dark3">Thyroid</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-0">
                  <div className="d-flex">
                    <img
                      src={ellipseblue}
                      className="mt-2 me-1"
                      style={{ height: "4px" }}
                    />
                    <p className="fw_600 fs_12 text_dark3">Heart</p>
                  </div>
                  <div className="d-flex">
                    <img
                      src={ellipseblue}
                      className="mt-2 me-1"
                      style={{ height: "4px" }}
                    />
                    <p className="fw_600 fs_12 text_dark3">Kidney</p>
                  </div>
                </div>
                <button
                  className="py-2 px-3 rounded-5 w-75 mt-3 bg_primary1 border-0 text_white1 fw_600"
                  // onClick={handleLogin}
                >
                  Book Now
                </button>
              </div>
              <img
                src={medicalprescription}
                className="w-25 p-md-5 pt-md-0 d-none d-md-block"
                alt="medicalprescription"
              />
              <img
                src={medicalprescription}
                className="w-100 p-md-5 pt-md-0 d-block d-md-none"
                alt="medicalprescription"
              />
            </div>
            {/* <p className="fw_500 text_primary2 mt-3 mb-2">
              Know your Benefits{" "}
              <img className="ms-1" src={chevronright} alt="chevronright" />{" "}
            </p> */}
          </div>
        </div>
      </div>
      <div className="container my-3">
        <p className="text_dark2 fw_600 fs_18">Quick Access</p>
        <div className="d-flex justify-content-between">
          <div
            className="text-center text_white2 px-2 px-md-5 py-3 pb-0 shadow rounded-2"
            role="button"
          >
            <img src={doctor} className="" alt="doctor" />
            <p className="fw_600 text_primary2 fs_sm_10">My Doctors</p>
          </div>

          <div
            className="text-center text_white2 px-2 px-md-5 py-3 pb-0 shadow rounded-2"
            role="button"
            onClick={handleAppointment}
          >
            <img src={calendar} className="" alt="calendar" />
            <p className="fw_600 text_primary2 fs_sm_10">Create Appointment</p>
          </div>

          <div
            className="text-center text_white2 px-2 px-md-5 py-3 pb-0 shadow rounded-2"
            role="button"
          >
            <img src={reports} className="" alt="reports" />
            <p className="fw_600 text_primary2 fs_sm_10">My Reports</p>
          </div>
        </div>
      </div>
      {/* Body ends here */}

      {/* Footer starts here */}
      <div
        className="shadow position-sticky bg-white"
        style={{ zIndex: "100", bottom: "0" }}
      >
        <div className="d-flex justify-content-between container text-center">
          <div className="py-2" role="button">
            <img src={home} alt="home" />
            <p className="text_primary2 fs_sm_10 fw_600">Home</p>
          </div>
          <div className="py-2" role="button">
            <img src={records} alt="records" />
            <p className="text_dark1 fs_sm_10 fw_600">Records</p>
          </div>
          <div className="py-2" role="button">
            <img src={device} alt="device" />
            <p className="text_dark1 fs_sm_10 fw_600">Device</p>
          </div>
          <div className="py-2" role="button">
            <img src={profile} alt="profile" />
            <p className="text_dark1 fs_sm_10 fw_600">Profile</p>
          </div>
        </div>
      </div>
      {/* Footer ends here */}
    </div>
  );
};
