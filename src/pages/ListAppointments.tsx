import { PageHeader, Spin } from "antd";
import { createRef, useEffect, useRef, useState } from "react";
import AppointmentComp from "../components/AppointmentComp";
import { Appointment } from "../interfaces/Appointment";
import AppointmentApi from "../services/apt_api";
import { LoadingOutlined } from "@ant-design/icons";
import UpdateModalComp from "../components/UpdateModalComp";
import SearchAppointmentsComp from "../components/SearchAppointmentsComp";
import { SearchOptions } from "../interfaces/SearchOptions";

function ListAppointments() {
  const childRef = useRef();
  const [myAppointments, setMyAppointments] = useState<Array<Appointment>>([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <PageHeader className="site-page-header" title="List Appointments" />

      <SearchAppointmentsComp setMyAppointments={setMyAppointments}></SearchAppointmentsComp>

      {myAppointments.length === 0 && (
        <Spin
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          indicator={antIcon}
        />
      )}
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

      <UpdateModalComp ref={childRef}/>
    </>
  );
}

export default ListAppointments;
