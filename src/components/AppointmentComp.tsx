import { Appointment } from "../interfaces/Appointment";
import {
  CalendarTwoTone,
  UserOutlined,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import { DateTime } from "luxon";
import AppointmentApi from "../services/apt_api";
import { Avatar, Divider, List, Skeleton, Tooltip } from "antd";

const api = new AppointmentApi();

const AppointmentComp = ({
  apt,
  setAppointments,
  myAppointments,
}: {
  apt: Appointment;
  setAppointments: Function;
  myAppointments: Array<Appointment>;
}) => {
  let scheduledDate = DateTime.fromFormat(apt.aptDate, "yyyy-MM-dd hh:mm");
  return (
    <>
      <List.Item
        actions={[
          <Tooltip title="Edit appointment">
            <EditTwoTone />
          </Tooltip>,
          <Tooltip title="Delete appointment">
            <DeleteTwoTone
              twoToneColor="red"
              onClick={() =>
                api
                  .deleteAppointment(apt.id)
                  .then(
                    setAppointments(
                      myAppointments.filter((o: Appointment) => o.id !== apt.id)
                    )
                  )
              }
            ></DeleteTwoTone>
          </Tooltip>,
        ]}
      >
        <Skeleton avatar title={false} loading={false} active>
          <List.Item.Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={
              <>
                Pet: {apt.petName}
                <br></br>
                Owner: {apt.ownerName}
                <br></br>
                <CalendarTwoTone /> Date:{" "}
                {scheduledDate.toLocaleString(DateTime.DATETIME_SHORT)}
              </>
            }
            description={apt.aptNotes}
          />
        </Skeleton>
      </List.Item>
      <Divider />
    </>
  );
};

export default AppointmentComp;
