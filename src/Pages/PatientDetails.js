import { useState } from "react";
import back from "../assests/backbtn.svg";
import chevron from "../assests/chevrondown.svg";
import { useNavigate } from "react-router-dom";

export const PatientDetails = () => {
    const patients = [
      {
        name: "Vijay",
        age: 50,
        relation: "Self",
        dob: "05/06/1975",
        mail: "vijay@mail.com",
        sex: "male",
      },
      {
        name: "John",
        age: 48,
        relation: "Self",
        dob: "05/06/1976",
        mail: "john@mail.com",
        sex: "male",
      },
      {
        name: "Doe",
        age: 49,
        relation: "Self",
        dob: "05/06/1975",
        mail: "doe@mail.com",
        sex: "male",
      },
      {
        name: "Jessie",
        age: 40,
        relation: "Self",
        dob: "05/06/1985",
        mail: "jessie@mail.com",
        sex: "female",
      },
    ];

    const [selectedPatient, setSelectedPatient] = useState(patients[0].name);
    const [selectedPatientDetails, setSelectedPatientDetails] = useState(patients[0]);

    const navigate = useNavigate();

    const handleContinue = () => navigate("/bookedsuccessfully");
  return (
    <div>
      <div className="bg-white shadow py-5 ">
        <div className="mx-3">
          <img src={back} className="me-3" alt="back" />
          <span className="text_dark3 fw_600">Patient Details</span>
        </div>
      </div>

      <div className="container mt-5">
        <div>
          <p className="text_primary2 fw_600 fs_24 mb-0">Choose Patient</p>
          <p className="text_secondary1 fw_500 fs_15">
            Who’re you booking an appointment for?
          </p>
        </div>

        <div className="my-5">
          <div class="dropdown">
            <button
              class="d-flex d-md-none justify-content-between border-0 bg-white text-start ps-3 py-3 shadow w-100"
              //   href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{selectedPatient}</span>
              <img src={chevron} className="pt-2 pe-2" alt="chevron" />
            </button>

            <button
              class="d-none d-md-flex justify-content-between border-0 bg-white text-start ps-3 py-3 w-75 shadow"
              //   href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{selectedPatient}</span>
              <img src={chevron} className="pt-2 pe-2" alt="chevron" />
            </button>

            <ul class="dropdown-menu">
              {patients?.map((patient) => (
                <li>
                  <span
                    class="dropdown-item"
                    role="button"
                    onClick={() => {
                      setSelectedPatient(patient.name);
                      setSelectedPatientDetails(patient);
                    }}
                  >
                    {patient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-none d-md-block bg-white shadow w-75 py-3 px-3">
          <p className="text_primary2 fw_600 text-center">Patient Details</p>
          {
            <div className="">
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Patient Name</span>
                <span className="fw_600 text_dark1 "> :</span>
                <span className="fw_600 text_dark1 ">
                  {" "}
                  {selectedPatientDetails.name}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Relation</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.relation}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Date of Birth</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.dob}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Age</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.age} yrs
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Email</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark">
                  {" "}
                  {selectedPatientDetails.mail}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Sex</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.sex}
                </span>
              </p>
            </div>
          }
        </div>

        <div className="d-block d-md-none bg-white shadow w-100 py-3 px-3">
          <p className="text_primary2 fw_600 text-center">Patient Details</p>
          {
            <div className="">
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Patient Name</span>
                <span className="fw_600 text_dark1 "> :</span>
                <span className="fw_600 text_dark1 ">
                  {" "}
                  {selectedPatientDetails.name}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Relation</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.relation}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Date of Birth</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.dob}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3 ">Age</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.age} yrs
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Email</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark">
                  {" "}
                  {selectedPatientDetails.mail}
                </span>
              </p>
              <p className="text-center">
                <span className="fw_500 text_dark3">Sex</span>
                <span className="fw_600 text_dark1"> :</span>
                <span className="fw_600 text_dark1">
                  {" "}
                  {selectedPatientDetails.sex}
                </span>
              </p>
            </div>
          }
        </div>
      </div>

      <div className="container mt-5 shadow">
        <textarea
          id="w3review"
          className="d-none d-md-block w-75 form-control border-0"
          placeholder="Write your problem"
          name="w3review"
          rows="8"
          cols="50"
        ></textarea>

        <textarea
          id="w3review"
          className="d-block d-md-none w-100 form-control border-0"
          placeholder="Write your problem"
          name="w3review"
          rows="8"
          cols="50"
        ></textarea>
      </div>

      <div className="d-flex justify-content-center my-5">
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
    </div>
  );
};
