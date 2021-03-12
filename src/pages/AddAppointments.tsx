import React, { useEffect, useState } from "react";
import { Appointment } from "../interfaces/Appointment";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import bulmaCalendar from 'bulma-calendar';
import "bulma-calendar/dist/css/bulma-calendar.min.css";

function AddAppointment() {
  const [date, setDate] = useState(DateTime.now().toISODate());
  const [time, setTime] = useState(DateTime.now().toFormat("HH:mm"));
  const initAppointment: Appointment = {
    id: uuidv4(),
    petName: "",
    ownerName: "",
    aptDate: `${date} ${time}`,
    aptNotes: "",
  };
  const [newAppointment, setNewAppointment] = useState(initAppointment);

  useEffect(() => {
    setNewAppointment(prevState => ({
      ...prevState,
      aptDate: date + time,
    }))
  },[date,time]);

  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {});
  }, []);

  return (
    <>
      <h1 className="title">Add Appointment</h1>
      <hr></hr>
      <section className="container">
      <div className="field">
      <label className="label">Pet Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input"></input>
        </div>
      </div>
      <div className="field">
      <label className="label">Owner Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input"></input>
        </div>
      </div>
      <div className="field">
      <label className="label">Appointment Notes</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
      <input id="aptDate" name="aptDate" type="date" value={date} onChange={e => console.log(e)}></input>
      </section>
    </>
  );
}

export default AddAppointment;
