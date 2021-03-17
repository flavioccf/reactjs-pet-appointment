import { Input, PageHeader, Select, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import AppointmentComp from "../components/AppointmentComp";
import { Appointment } from "../interfaces/Appointment";
import AppointmentApi from "../services/apt_api";
import { LoadingOutlined, SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { SearchOptions } from "../interfaces/SearchOptions";
import UpdateModalComp from "../components/UpdateModalComp";

function ListAppointments() {
  const childRef = useRef();
  const [myAppointments, setMyAppointments] = useState([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const initSearch: SearchOptions = {
    sort: "aptDate",
    order: "desc",
    filter: "",
  };

  console.log(childRef.current);

  const [searchParams, setSearchParam] = useState(initSearch);

  useEffect(() => {
    const api = new AppointmentApi();
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
            <Select placeholder="Sort By" className="select-before"
              onSelect={(e) => {
                setSearchParam((prevState) => ({
                  ...prevState,
                  sort: e.toString(),
                }))
              }}
            >
              <Select.Option value="petName">Pet</Select.Option>
              <Select.Option value="ownerName">Owner</Select.Option>
              <Select.Option value="aptDate">Date</Select.Option>
            </Select>
            <Select defaultValue="desc" className="select-before"
              onSelect={(e) => {
                setSearchParam((prevState) => ({
                  ...prevState,
                  order: e.toString(),
                }))
              }}
            >
              <Select.Option value="asc">Asc <SortAscendingOutlined /></Select.Option>
              <Select.Option value="desc">Desc <SortDescendingOutlined /></Select.Option>
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

      <UpdateModalComp ref={childRef}/>
    </>
  );
}

export default ListAppointments;
