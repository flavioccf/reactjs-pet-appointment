import React, { useEffect, useState } from "react";
import { Appointment } from "../interfaces/Appointment";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import { Button, Checkbox, DatePicker, Form, Input, PageHeader, TimePicker } from 'antd';
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
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    setNewAppointment(prevState => ({
      ...prevState,
      aptDate: `${date} ${time}`,
    }))
  },[date,time]);

  return (
    <>
    <PageHeader
    className="site-page-header"
    title="Add Appointment"
    />
    <Form
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item 
        label="Appointment Date"
        name="aptDate"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <DatePicker defaultValue={moment(date, 'YYYY-MM-DD')} format="YYYY-MM-DD" onChange={(e) => {console.log(e)}}></DatePicker>
      </Form.Item>
      <Form.Item 
        label="Appointment Time"
        name="aptTime"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <TimePicker defaultValue={moment(time, 'HH:mm')} format="HH:mm" onChange={(e) => {console.log(e)}}></TimePicker>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     </>
  );
}

export default AddAppointment;
