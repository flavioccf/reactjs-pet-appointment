import React from 'react';
import { Appointment } from '../interfaces/Appointment';
import { FcFullTrash } from 'react-icons/fc';
import { FaDog, FaUserAlt, FaCalendarDay } from 'react-icons/fa';
import { DateTime } from 'luxon';
import AppointmentApi from '../services/apt_api';

const api = new AppointmentApi();

const AppointmentComp = ({apt, setAppointments, myAppointments} : {apt: Appointment, setAppointments: Function, myAppointments: Array<Appointment>})  => {
    let scheduledDate = DateTime.fromFormat(apt.aptDate,'yyyy-MM-dd hh:mm');
    return (
        <>
            <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-three-quarters">
                    <ul>
                        <li>
                            <h3 className="title is-3"><FaDog/> { apt.petName }</h3>
                            <hr></hr>
                        </li>
                        <li><FaUserAlt/> Owner: { apt.ownerName }</li>
                        <li><FaCalendarDay/> Date: {scheduledDate.toLocaleString(DateTime.DATETIME_SHORT)}</li>
                    </ul>
                </div>
                <div className="column">
                    <button className="button is-danger is-light is-medium is-pulled-right"
                    onClick={() => api.deleteAppointment(apt.id)
                        .then(setAppointments(myAppointments.filter((o: Appointment) => o.id !== apt.id )))
                    }
                    >
                    <span className="icon">
                        <FcFullTrash/>
                    </span>
                    </button>
                </div>
            </div>
            </div>
        </>
    )
}

export default AppointmentComp;