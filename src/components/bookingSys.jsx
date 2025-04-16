import React, { useState } from "react"
import {
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Row,
  Divider,
} from "antd"

const { Option } = Select
const { TextArea } = Input

const BookingForm = ({ setSubmittable }) => {
  const [form] = Form.useForm()
  const [service, setService] = useState("")
  const [nameLength, setNameLength] = useState(0)
  const [addressVisible, setAddressVisible] = useState(false)
  const [formattedPhone, setFormattedPhone] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")

  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  const handleServiceChange = value => {
    setService(value)
    setAddressVisible(value === "Mobile")
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
    console.log("Received values from form: ", {
      ...values,
      phone: `+1${values.phone}`,
    })
  }

  const disabledDate = current => {
    return current && (current.day() === 0 || current.day() === 6)
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
                <Input onChange={handleNameChange} maxLength={50} />
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
              <Input />
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
                { required: true, message: "Please enter your car's model" },
              ]}
            >
              <Input
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
              <DatePicker disabledDate={disabledDate} />
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
              <Select>
                <Option value="09:00">9:00 AM</Option>
                <Option value="11:00">11:00 AM</Option>
                <Option value="13:00">1:00 PM</Option>
                <Option value="15:00">3:00 PM</Option>
                <Option value="17:00">5:00 PM</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="service"
              label="Select Services"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select onChange={handleServiceChange}>
                <Option value="Interior">Interior</Option>
                <Option value="Exterior">Exterior</Option>
                <Option value="Custom">Custom</Option>
              </Select>
            </Form.Item>
          </Col>

          {service === "Custom" && (
            <Col span={24}>
              <Form.Item name="Services">
                <Checkbox.Group>
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
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          {/* Additional Request Textbox */}
          <Col span={24} style={{ marginTop: "16px" }}>
            {" "}
            {/* Add margin-top for spacing */}
            <Form.Item
              name="additionalRequest"
              label="Additional Request"
              tooltip="If you have any special requests, please let us know."
            >
              <TextArea
                placeholder="Enter any additional requests or notes here..."
                rows={4}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default BookingForm
