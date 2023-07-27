import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";
import { useState } from "react";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <div className="text-center mt-2">
      <h1 className="text-danger display-5">CANSU HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
};

export default Home;
