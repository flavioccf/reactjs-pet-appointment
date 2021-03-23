import { Modal } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Appointment } from '../interfaces/Appointment';

const UpdateModalComp = forwardRef((props,ref) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const initAppointmentInfo = {
    id: "",
    petName: "",
    ownerName: "",
    aptDate: "",
    aptNotes: "",
  }
  const [appointmentInfo, setAppointmentInfo] = useState<Appointment>(initAppointmentInfo);

  const showModal = () => {
    setVisible(true);
  };

  const setAppointmentModal = (appointment: Appointment) => {
    console.log(appointment);
  }

  useImperativeHandle(ref,() => {
      return {
        openModal: showModal,
        setAppointmentModal: setAppointmentModal
      };
  })

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  useEffect(() => {
  },[appointmentInfo]);

  return (
    <>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
});

export default UpdateModalComp;