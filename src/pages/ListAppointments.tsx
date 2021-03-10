import React, { useEffect, useState } from 'react';
import AppointmentComp from '../components/AppointmentComp';
import { Appointment } from '../interfaces/Appointment';

function ListAppointments() {
    const [myAppointments, setMyAppointments] = useState([]);

    useEffect(() => {
      async function loadApt() {
        await fetch('./data.json')
        .then(async res => {
          const result = await res.json();
          const apts = result.map((item: object, i: number) => {
            return item;
          });
          setMyAppointments(apts);
        })
        .catch(error => {
          throw new Error(error)
        });
      }
      loadApt();
    },[]);
  
    return (
      <>
        <h1 className="title">List Appointments</h1>
        { myAppointments.length === 0 && <h1>No appointments at the moment...</h1> }
        { myAppointments.map((apt: Appointment, index: number) => {
          return <AppointmentComp key={index+apt.petName} {...apt}></AppointmentComp>
        }) }
      </>
    );
}

export default ListAppointments;