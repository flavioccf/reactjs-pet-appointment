import { Input, Select } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined, SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { SearchOptions } from "../interfaces/SearchOptions";
import AppointmentApi from "../services/apt_api";

const SearchAppointmentsComp = ({
    setMyAppointments
  }: {
    setMyAppointments: Function
  }) => {
    const initSearch: SearchOptions = {
        sort: "aptDate",
        order: "desc",
        filter: "",
      };
    const [searchParams, setSearchParam] = useState(initSearch);

    useEffect(() => {
        const api = new AppointmentApi();
        const loadApt = async () => {
            console.log(searchParams);
            const apts = await api.getAppointmentList(searchParams);
            console.log(apts);
            setMyAppointments(apts);
          }
        loadApt();
      }, [searchParams, setMyAppointments]);

    return(
        <>
        <Input
        prefix={<SearchOutlined />}
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
        </>
    );
};

export default SearchAppointmentsComp;
