import { PageHeader, Spin } from "antd";
import React, { useEffect, useState } from "react";
import AppointmentComp from "../components/AppointmentComp";
import { Appointment } from "../interfaces/Appointment";
import AppointmentApi from "../services/apt_api";
import { LoadingOutlined } from '@ant-design/icons';

function ListAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
    <PageHeader
    className="site-page-header"
    title="List Appointments"
    />
      {myAppointments.length === 0 && <Spin indicator={antIcon} />}
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
