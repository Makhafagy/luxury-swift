import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import BookingForm from './bookingSys';


const ModalIndex = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} htmlType="submit">
        Book Now
      </Button>
      <Modal
        title="Book an Appointment"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Submit"
      >
        <BookingForm/>
      </Modal>
    </>
  );
};
export default ModalIndex;