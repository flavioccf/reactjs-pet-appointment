import React, { useContext, useEffect, useState } from 'react';
import AppointmentComp from '../components/AppointmentComp';
import { HeaderContext } from '../components/Header';
import { Appointment } from '../interfaces/Appointment';
import { AppContext } from './App';

function ListAppointments() {
    const [myAppointments, setMyAppointments] = useState([]);
    const { isActiveMenu, toggleMenu } = useContext(HeaderContext);
    const {test} = useContext(AppContext);
    console.log(test);

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
        { myAppointments.length === 0 && <h1>No appointments at the moment...</h1> }
        { myAppointments.map((apt: Appointment, index: number) => {
          return <AppointmentComp key={index+apt.petName} {...apt}></AppointmentComp>
        }) }
      </>
    );
}

export default ListAppointments;