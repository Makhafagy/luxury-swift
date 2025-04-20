// import React, { useState, useRef } from "react"
// import { Button, Modal, Popover, ConfigProvider } from "antd"
// import BookingForm from "./bookingSys"
// import { TinyColor } from "@ctrl/tinycolor"

// const colors1 = ["#6253E1", "#04BEFE"]

// const getHoverColors = colors =>
//   colors.map(color => new TinyColor(color).lighten(5).toString())

// const getActiveColors = colors =>
//   colors.map(color => new TinyColor(color).darken(5).toString())

// const popoverContent = <div>Fill form to submit</div>

// const ModalIndex = () => {
//   const [open, setOpen] = useState(false)
//   const [confirmLoading, setConfirmLoading] = useState(false)
//   const [submittable, setSubmittable] = useState(false)

//   const formRef = useRef(null) // ✅ create the ref for the form

//   const showModal = () => {
//     setOpen(true)
//   }

//   const handleOk = () => {
//     setConfirmLoading(true)
//     if (formRef.current) {
//       formRef.current.submit() // ✅ triggers the form submission
//     }
//   }

//   const handleCancel = () => {
//     console.log("Clicked cancel button")
//     setOpen(false)
//   }

//   return (
//     <>
//       <ConfigProvider
//         theme={{
//           components: {
//             Button: {
//               colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
//               colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
//                 colors1
//               ).join(", ")})`,
//               colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
//                 colors1
//               ).join(", ")})`,
//               lineWidth: 0,
//             },
//           },
//         }}
//       >
//         <Popover content={popoverContent}>
//           <Button
//             type="primary"
//             style={{ width: "100px", height: "35px" }}
//             onClick={showModal}
//           >
//             Book Now
//           </Button>
//         </Popover>
//       </ConfigProvider>

//       {/* <Modal */}
//         title="Book an Appointment"
//         open={open}
//         onOk={handleOk} // This will now trigger the form submission
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//         okText="Submit"
//         okButtonProps={{ disabled: !submittable }} // Only enable the button when the form is ready
//       >
//         <BookingForm
//           setSubmittable={setSubmittable}
//           setOpen={setOpen}
//           formRef={formRef}
//           setConfirmLoading={setConfirmLoading}
//         />
//       </Modal>
//     </>
//   )
// }

// export default ModalIndex
