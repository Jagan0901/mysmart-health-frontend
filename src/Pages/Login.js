import logo from "../assests/loginlogo.svg";
import logoProfile from "../assests/loginprof.svg";
import chevron from "../assests/chevrondown.svg";
import security from "../assests/security.svg";
import passwordImg from "../assests/password-eye.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from './../config/api';

export const Login = () => {
  const [copName, setCopName] = useState("Test");
  const [username, setUsername] = useState("Jagan");
  const [password, setPassword] = useState("Password@123");
  const [loading,setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async() => {
    if (!username || !password) return setStatus("Please fill out the fields");
    setLoading(true);
    const user = {
      username: username,
      password: password,
    };

    try {
      const response  = await axios.post(`${API}/users/login`,user);
      if(response.data.message) setStatus(response.data.message)
        else if(response.data.error) setStatus(response.data.error)
      navigate("/home")
    } catch (error) {
      if (error.response.data.error) setStatus(error.response.data.error);
      else setStatus(error.message)
    }
  };

  const statusStyles = {
    textAlign: "center",
    fontWeight: "bold",
    color: status === "Login Successfully" ? "green" : "red",
    margin: "1% 30% 0% 27%",
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-3 my-md-5">
      <div>
        <img src={logo} alt="logo" />
        <p className="text_primary2 fs_16 fw_700">Health Desk</p>
      </div>

      <div className="d-flex flex-column">
        <p className="fs_20 fw_600 text_dark1 mb-0">Corporate Login</p>
        <span className="text_primary2 fw_500 fs_12 text-center mt-1">
          Hi, Welcome Back!
        </span>
      </div>

      {/* Input Fields */}
      <div className="my-3 my-md-5 w-75 w_md_25 w_lg_25 w_xl_25">
        <div>
          <p className="text_dark2 fw_500 fs_12 mb-0">Corporate Name</p>
          <div class="input-group flex-nowrap">
            <span class="input-group-text bg_white2" id="addon-wrapping">
              <img src={logoProfile} />
            </span>
            <input
              type="text"
              class="form-control border-end-0"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={copName}
            />
            <span class="input-group-text bg-white" id="addon-wrapping">
              <img src={chevron} />
            </span>
          </div>
          <p className="text_secondary1 fw_500 fs_10">
            Type 3 characters to search for Corporate
          </p>
        </div>
        <div className="mb-3">
          <p className="text_dark2 fw_500 fs_12 mb-0">UserName</p>
          <div class="input-group flex-nowrap">
            <span class="input-group-text bg_white2" id="addon-wrapping">
              <img src={logoProfile} />
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleUsername}
              value={username}
            />
          </div>
        </div>

        <div>
          <p className="text_dark2 fw_500 fs_12 mb-0">Password</p>
          <div class="input-group flex-nowrap">
            <span class="input-group-text bg_white2" id="addon-wrapping">
              <img src={security} />
            </span>
            <input
              type="password"
              class="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handlePassword}
              value={password}
            />
            <span class="input-group-text bg_white2" id="addon-wrapping">
              <img src={passwordImg} />
            </span>
          </div>
          <p className="text_secondary1 fw_500 fs_10">
            PASSWORD:  Password@123
          </p>
        </div>
        <button
          className="py-3 px-5 rounded-5 w-100 my-3 my-md-5 bg_primary1 border-0 text_white1 fw_600"
          onClick={handleLogin}
        >
          Login
        </button>
        <p style={statusStyles} className="fs_sm_13 fs_md_13">
          {status}
        </p>
      </div>

      {/* <div className="w-100"> */}

      {/* </div> */}
    </div>
  );
}
