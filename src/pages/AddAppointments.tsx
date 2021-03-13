import React, { useEffect, useState } from "react";
import { Appointment } from "../interfaces/Appointment";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import { Button, Checkbox, Col, DatePicker, Form, Input, PageHeader, Row, TimePicker } from 'antd';
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
    console.log('Success:', newAppointment);
  };
  const colLayout = {
    padding: "0.5rem"
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewAppointment(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

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
      initialValues={{
        aptDate: moment(date,'YYYY-MM-DD'),
        aptTime: moment(time,'HH:mm')
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
      <Col style={colLayout} flex={2}>
      <Form.Item
        label="Pet Name"
        name="petName"
        rules={[{ required: true, message: 'Please input your pet name!' }]}
      >
        <Input name="petName" onChange={e => handleChange(e)}/>
      </Form.Item>
      </Col>
      <Col style={colLayout} flex={2}>
      <Form.Item
        label="Owner Name"
        name="ownerName"
        rules={[{ required: true, message: 'Please input the owner name!' }]}
      >
        <Input name="ownerName" onChange={e => handleChange(e)} />
      </Form.Item>
      </Col>
      <Col style={colLayout} span={24}>
      <Form.Item
        label="Additional Notes"
        name="aptNotes"
      >
        <Input.TextArea name="aptNotes" onChange={e => handleChange(e)} />
      </Form.Item>
      </Col>
      </Row>
      <Row>
      <Col style={colLayout}>
      <Form.Item 
        label="Appointment Date"
        name="aptDate"
        rules={[{ required: true, message: 'Please select a date!' }]}
      >
        <DatePicker name="aptDate" value={moment(date, 'YYYY-MM-DD')} format="YYYY-MM-DD" onChange={(e) => { e ? setDate(e.format('YYYY-MM-DD')) : setDate(date) }}></DatePicker>
      </Form.Item>
      </Col>
      <Col style={colLayout}>      
      <Form.Item 
        label="Appointment Time"
        name="aptTime"
        rules={[{ required: true, message: 'Please select the time!' }]}
      >
        <TimePicker name="aptTime" value={moment(time, 'HH:mm')} format="HH:mm" onChange={(e) => { e ? setTime(e.format('HH:mm')) : setTime(time) }}></TimePicker>
      </Form.Item>
      </Col>
      <Col style={colLayout} span={24}>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Col>
      </Row>
      
    </Form>
     </>
  );
}

export default AddAppointment;
