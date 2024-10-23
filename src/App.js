import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./color.css";
import "./font.css";
import { Splash } from './Pages/Splash';
import { WalkThrough1 } from './Pages/WalkThrough1';
import { WalkThrough2 } from './Pages/WalkThrough2';
import { WalkThrough3 } from './Pages/WalkThrough3';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { CreateApointment } from './Pages/CreateApointment';
import { OnlineConsultation } from './Pages/OnlineConsultation';
import { BookingAppointment } from './Pages/BookingAppointment';
import { PatientDetails } from './Pages/PatientDetails';
import { BookedSuccessfully } from './Pages/BookedSuccessfully';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/walkthrough1" element={<WalkThrough1 />} />
        <Route path="/walkthrough2" element={<WalkThrough2 />} />
        <Route path="/walkthrough3" element={<WalkThrough3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createapointment" element={<CreateApointment />} />
        <Route path="/onlineconsultation" element={<OnlineConsultation />} />
        <Route path="/bookingappointment" element={<BookingAppointment />} />
        <Route path="/patientdetails" element={<PatientDetails />} />
        <Route path="/bookedsuccessfully" element={<BookedSuccessfully />} />
      </Routes>
    </div>
  );
}

export default App;
