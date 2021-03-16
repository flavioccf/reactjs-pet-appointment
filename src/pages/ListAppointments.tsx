import { Input, PageHeader, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import AppointmentComp from "../components/AppointmentComp";
import { Appointment } from "../interfaces/Appointment";
import AppointmentApi from "../services/apt_api";
import { LoadingOutlined } from "@ant-design/icons";
import { SearchOptions } from "../interfaces/SearchOptions";

function ListAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const api = new AppointmentApi();
  const initSearch: SearchOptions = {
    sort: "aptDate",
    order: "desc",
    filter: "",
  };
  const [searchParams, setSearchParam] = useState(initSearch);

  useEffect(() => {
    const loadApt = async () => {
      const apts = await api.getAppointmentList(searchParams);
      setMyAppointments(apts);
    };
    loadApt();
  }, [searchParams]);

  return (
    <>
      <PageHeader className="site-page-header" title="List Appointments" />

      <Input
        addonAfter={
          <>
            <Select placeholder="Sort By" className="select-before">
              <Select.Option value="http://">http://</Select.Option>
              <Select.Option value="http://">http://</Select.Option>
              <Select.Option value="https://">https://</Select.Option>
            </Select>
            <Select defaultValue="asc" className="select-before">
              <Select.Option value="asc">asc</Select.Option>
              <Select.Option value="desc">desc</Select.Option>
            </Select>
          </>
        }
        placeholder="Search appointments"
        onChange={(e) =>
          setSearchParam((prevState) => ({
            ...prevState,
            filter: e.target.value,
          }))
        }
      />

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
    </>
  );
}

export default ListAppointments;
