import React, { useEffect, useState } from "react";
import AppointmentComp from "../components/AppointmentComp";
import { Appointment } from "../interfaces/Appointment";
import AppointmentApi from "../services/apt_api";

function ListAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    const api = new AppointmentApi();
    async function loadApt() {
      const apts = await api.getAppointmentList();
      setMyAppointments(apts);
    }
    loadApt();
  }, []);

  return (
    <>
      <h1 className="title">List Appointments</h1>
      {myAppointments.length === 0 && <h1>No appointments at the moment...</h1>}
      {myAppointments.map((apt: Appointment, index: number) => {
        return (
          <AppointmentComp
            key={index + apt.petName}
            apt={apt}
            setAppointments={setMyAppointments}
            myAppointments={myAppointments}
          ></AppointmentComp>
        );
      })}
    </>
  );
}

export default ListAppointments;
