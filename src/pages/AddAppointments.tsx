import React, { useEffect, useState } from "react";
import { Appointment } from "../interfaces/Appointment";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import bulmaCalendar from 'bulma-calendar';
import { DatePicker } from 'antd';
import "bulma-calendar/dist/css/bulma-calendar.min.css";
import moment from "moment";

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
      aptDate: `${date} ${time}`,
    }))
  },[date,time]);

  useEffect(() => {
    const calendars = bulmaCalendar.attach('[id="aptDate"]', {
      showHeader: false,
      displayMode: 'inline',
      type: 'date',
      dateFormat: 'YYYY-MM-DD',
      minDate: new Date(Date.now()),
      startDate: new Date(date)
    });
    for(var i = 0; i < calendars.length; i++) {
      // Add listener to select event
      calendars[i].on('select', date => {
        console.log(date);
      });
    }
    bulmaCalendar.attach('[type="time"]', {
      displayMode: 'inline',
      type: 'time',
      timeFormat: 'hh:mm',
      startTime: new Date(time)
    });
    const elementDate = document.querySelector('#aptDate') as any;
    
    if (elementDate.bulmaCalendar) {
      console.log(elementDate.bulmaCalendar);
      // bulmaCalendar instance is available as elementDate.bulmaCalendar
      elementDate.bulmaCalendar.on('select', function(datepicker: { data: { value: () => any; }; }) {
        console.log(elementDate);
        setDate(datepicker.data.value());
      });
    }
    const elementTime = document.querySelector('#aptTime') as any;
    if (elementTime.bulmaCalendar) {
      // bulmaCalendar instance is available as elementTime.bulmaCalendar
      elementTime.bulmaCalendar.on('select', function(datepicker: { data: { value: () => any; }; }) {
        setTime(datepicker.data.value());
      });
    }
  }, []);

  return (
    <>
      <h1 className="title">Add Appointment</h1>
      <hr></hr>
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
    <div className="columns">
    <div className="column is-half field">
    <label className="label">Date</label>
    <input id="aptDate" name="aptDate" type="date" ></input>
    </div>
    <div className="column is-half field">
    <label className="label">Time</label>
    <input id="aptTime" name="aptTime" type="time" value={time} onChange={(e) => { console.log(e) }}></input>
    </div>
    </div>
    <DatePicker defaultValue={moment(date, 'YYYY-MM-DD')} format="YYYY-MM-DD" onChange={(e) => {console.log(e)}}></DatePicker>
    </>
  );
}

export default AddAppointment;
