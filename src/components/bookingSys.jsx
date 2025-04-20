import React, { useState, useRef } from "react"
import dayjs from "dayjs"
import emailjs from "@emailjs/browser"
import { TinyColor } from "@ctrl/tinycolor"
import {
  Form,
  ConfigProvider,
  Popover,
  Modal,
  Input,
  Button,
  message,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Row,
  Divider,
  TimePicker,
} from "antd"

const { Option } = Select
const { TextArea } = Input

const colors1 = ["#6253E1", "#04BEFE"]
const getHoverColors = colors =>
  colors.map(color => new TinyColor(color).lighten(5).toString())
const getActiveColors = colors =>
  colors.map(color => new TinyColor(color).darken(5).toString())

const popoverContent = <div>Fill form to submit</div>

const BookingModal = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [submittable, setSubmittable] = useState(false)
  const [service, setService] = useState("")
  const [nameLength, setNameLength] = useState(0)
  const [addressVisible, setAddressVisible] = useState(false)
  const [formattedPhone, setFormattedPhone] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [customServices, setCustomServices] = useState([])
  const [year, setYear] = useState("")
  const [form] = Form.useForm()
  const formRef = useRef(null)

  const values = Form.useWatch([], form)

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    console.log("❌ Cancel clicked")
    setOpen(false)
  }

  const handleServiceChange = value => {
    setService(value)
    setAddressVisible(value === "Mobile")
    // Reset custom_services when selecting a service that doesn't have add-ons
    if (
      value === "Interior" ||
      value === "Exterior" ||
      value === "Interior-Exterior"
    ) {
      setCustomServices([])
    }
  }

  const handleCheckboxChange = checkedValues => {
    setCustomServices(checkedValues)
  }

  const handleNameChange = e => {
    const inputValue = e.target.value
    setNameLength(inputValue.length) // Update the character count
    form.setFieldValue("name", inputValue)
  }

  const handlePhoneChange = e => {
    // Strip all non-digits and take first 10 only
    let raw = e.target.value.replace(/\D/g, "").slice(0, 10)

    // Format: (123) 456-7890
    let formatted = raw
    if (raw.length > 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`
    } else if (raw.length > 3) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`
    } else if (raw.length > 0) {
      formatted = `(${raw}`
    }

    // Set the formatted phone number in the input field
    setFormattedPhone(formatted)
    form.setFieldValue("phone", raw) // Update the raw value (just digits) for submission
  }

  const handleMakeChange = e => {
    let value = e.target.value.replace(/[^A-Za-z0-9\s]/g, "") // Allow only alphanumeric characters and spaces
    setMake(value)
  }

  const handleModelChange = e => {
    let value = e.target.value.replace(/[^A-Za-z0-9\s]/g, "") // Allow only alphanumeric characters and spaces
    setModel(value)
  }

  const handleYearChange = e => {
    let value = e.target.value.replace(/[^0-9]/g, "") // Allow only numeric characters for year
    if (value.length > 4) value = value.slice(0, 4) // Limit to 4 digits for the year
    setYear(value)
  }

  const onFinish = values => {
    console.log("📤 Form values:", values)

    // Make sure the formRef is correctly attached
    console.log("FormRef element:", formRef.current)

    if (!formRef.current) {
      console.error("❌ formRef is not attached properly")
      return
    }
    const {
      name,
      email,
      phone,
      make,
      model,
      year,
      date,
      time,
      service,
      custom_services,
      additional_requests,
      address,
    } = values

    const formattedDate = dayjs(date).format("MMMM D, YYYY") // May 10, 2025
    const formattedTime = dayjs(time).format("h:mm A") // 3:00 PM

    console.log(formattedDate, formattedTime)

    // Prepare email template parameters
    const templateParams = {
      name,
      email,
      phone,
      make,
      model,
      year,
      date: formattedDate,
      time: formattedTime,
      service,
      additional_requests: additional_requests || "None",
      address,
      ...(service?.toLowerCase() === "custom" && {
        custom_services:
          Array.isArray(custom_services) && custom_services.length > 0
            ? custom_services.join(", ")
            : "None",
      }),
    }

    console.log("✅ templateParams being sent:", templateParams)

    emailjs
      .send(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_BOOKING_ID,
        templateParams,
        process.env.GATSBY_PUBLIC_KEY
      )
      .then(
        result => {
          console.log("✅ Email successfully sent!", result)

          // Reset form fields after successful email send
          form.resetFields()

          // Close modal and show success message
          setOpen(false)
          message.success("Booking successfully sent!")
        },
        error => {
          console.error("❌ Email send failed:", error)
          console.error("Error details:", error.text || error)

          // Show error message if email sending fails
          message.error(
            `Something went wrong: ${error.text || "Unknown error"}`
          )
        }
      )
      .finally(() => {
        // Reset loading state
        setConfirmLoading(false)
      })
  }

  const disabledDate = current => {
    // Disable dates before today
    return current && current < dayjs().startOf("day")
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Popover content={popoverContent}>
          <Button
            type="primary"
            style={{ width: "100px", height: "35px" }}
            onClick={showModal}
          >
            Book Now
          </Button>
        </Popover>
      </ConfigProvider>

      <Modal
        title="Book an Appointment"
        open={open}
        onOk={() => form.submit()}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Submit"
        okButtonProps={{ disabled: !submittable }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          ref={formRef}
          onValuesChange={() => {
            form
              .validateFields({ validateOnly: true })
              .then(() => setSubmittable(true))
              .catch(() => setSubmittable(false))
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please enter your name" },
                  {
                    // Ensure no numbers in the name
                    pattern: /^[A-Za-z\s]+$/,
                    message: "Name cannot contain numbers",
                  },
                ]}
              >
                <div style={{ position: "relative" }}>
                  <Input
                    name="name"
                    onChange={handleNameChange}
                    maxLength={50}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 50, // adjust this to pull the counter up
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    {nameLength}/50
                  </div>
                </div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                  {
                    validator: (_, value) => {
                      // Validate only if the value is exactly 10 digits long
                      if (!value || value.length === 10 || value.length > 10)
                        return Promise.resolve()
                      return Promise.reject(
                        "Phone number must be exactly 10 digits"
                      )
                    },
                  },
                ]}
              >
                <Input
                  name="phone"
                  addonBefore="+1"
                  value={formattedPhone}
                  onChange={handlePhoneChange}
                  placeholder="(123) 456-7890"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input name="email" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="make"
                label="Make"
                rules={[
                  { required: true, message: "Please enter your car's make" },
                ]}
              >
                <Input
                  name="make"
                  value={make}
                  onChange={handleMakeChange}
                  placeholder="e.g., Toyota"
                />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="model"
                label="Model"
                rules={[
                  {
                    required: true,
                    message: "Please enter your car's model",
                  },
                ]}
              >
                <Input
                  name="model"
                  value={model}
                  onChange={handleModelChange}
                  placeholder="e.g., Camry"
                />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="year"
                label="Year"
                rules={[
                  { required: true, message: "Please enter your car's year" },
                  {
                    pattern: /^\d{4}$/,
                    message: "Please enter a valid 4-digit year",
                  },
                ]}
              >
                <Input
                  name="year"
                  value={year}
                  onChange={handleYearChange}
                  placeholder="e.g., 2020"
                  maxLength={4}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="date"
                label="Desired Date"
                rules={[{ required: true, message: "Please select a date" }]}
                extra="We’ll contact you to confirm availability."
              >
                <DatePicker name="date" disabledDate={disabledDate} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="time"
                label="Desired Time"
                rules={[
                  { required: true, message: "Please select a desired time" },
                ]}
              >
                <TimePicker
                  name="time"
                  format="h:mm A"
                  use12Hours
                  minuteStep={15}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="service"
                label="Select Services"
                rules={[{ required: true, message: "Please select a service" }]}
              >
                <Select name="service" onChange={handleServiceChange}>
                  <Option value="Interior">Interior</Option>
                  <Option value="Exterior">Exterior</Option>
                  <Option value="Interior-Exterior">Interior & Exterior</Option>
                  <Option value="Custom">Custom</Option>
                </Select>
              </Form.Item>
            </Col>

            {service === "Custom" && (
              <Col span={24}>
                <Form.Item name="custom_services">
                  <Checkbox.Group
                    name="custom_services"
                    value={customServices}
                    onChange={handleCheckboxChange}
                  >
                    <Row>
                      {/* Interior Services */}
                      <Col span={24}>
                        <Divider orientation="left">Interior Services</Divider>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Full Interior & Trunk Vacuum">
                          Full Interior & Trunk Vacuum
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Full Seat and Carpet Shampoo">
                          Full Seat and Carpet Shampoo
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Windows clean">Windows clean</Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Fabric Mat Shampoo">
                          Fabric Mat Shampoo
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Rubber Mats Clean">
                          Rubber Mats Clean
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Carpet Salt Stain Removal">
                          Carpet Salt Stain Removal
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Full Interior Protectant">
                          Full Interior Protectant
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Full Wipe Down & Detail Brush Treatment">
                          Full Wipe Down & Detail Brush Treatment
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Air Freshener">Air Freshener</Checkbox>
                      </Col>

                      {/* Exterior Services */}
                      <Col span={24}>
                        <Divider orientation="left">Exterior Services</Divider>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="5 Stage Foam Cannon Wash">
                          5 Stage Foam Cannon Wash
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Wheel, Rim & Tire Clean">
                          Wheel, Rim & Tire Clean
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Premium Towel Dry">
                          Premium Towel Dry
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Wax">Wax</Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value="Premium Wax">Premium Wax</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            )}
            {/* Address */}
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input name="address" />
              </Form.Item>
            </Col>
            {/* Additional Request Textbox */}
            <Col span={24} style={{ marginTop: "16px" }}>
              {" "}
              {/* Add margin-top for spacing */}
              <Form.Item
                name="additional_requests"
                label="Additional Requests"
                tooltip="If you have any special requests, please let us know."
              >
                <TextArea
                  name="additional_requests"
                  placeholder="Enter any additional requests or notes here..."
                  rows={4}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default BookingModal
