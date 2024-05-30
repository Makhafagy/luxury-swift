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
} from "antd"
import moment from "moment"

const { Option } = Select
const { TextArea } = Input

const addon = [{ value: "" }]

const BookingForm = () => {
  const [form] = Form.useForm()
  const [service, setService] = useState("")
  const [addressVisible, setAddressVisible] = useState(false)

  const handleServiceChange = value => {
    setService(value)
    setAddressVisible(value === "Mobile" || value === "Valet")
  }

  const onFinish = values => {
    console.log("Received values from form: ", values)
  }

  const disabledDate = current => {
    // Disable weekends (Saturday and Sunday)
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
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="yearMakeModel"
              label="Year/Make/Model"
              rules={[
                { required: true, message: "Please enter your car details" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="package"
              label="Select a Package"
              rules={[{ required: true, message: "Please select a package" }]}
            >
              <Select>
                <Option value="none">None</Option>
                <Option value="basic">Basic</Option>
                <Option value="standard">Standard</Option>
                <Option value="premium">Premium</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="ceramicPackage"
              label="Select a Ceramic Package"
              rules={[
                { required: true, message: "Please select a ceramic package" },
              ]}
            >
              <Select>
                <Option value="none">None</Option>
                <Option value="silver">Silver</Option>
                <Option value="gold">Gold</Option>
                <Option value="platinum">Platinum</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="addOns" label="Add-ons">
              <Checkbox.Group>
                <Row>
                  <Col span={24}>
                    <Checkbox value="Wax">Wax</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Headlight Restoration">Headlight Restoration</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Odor Removal">Odor Removal</Checkbox>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Checkbox value="Paint Correction">Paint Correction</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Pet Hair">Pet Hair</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Engine Cleaning">Engine Cleaning</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="service"
              label="Select Services"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select onChange={handleServiceChange}>
                <Option value="InShop">In-Shop</Option>
                <Option value="Mobile">Mobile</Option>
                <Option value="Valet">Valet</Option>
              </Select>
            </Form.Item>
          </Col>

          {addressVisible && (
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          )}

          <Col span={12}>
            <Form.Item
              name="date"
              label="Select Date"
              rules={[{ required: true, message: "Please select a date" }]}
            >
              <DatePicker disabledDate={disabledDate} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="time"
              label="Select Time"
              rules={[{ required: true, message: "Please select a time" }]}
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
              name="notes"
              label="Notes"
              placeholder="Special Requests"
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              <Button type="default" htmlType="reset">
                Reset
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default BookingForm
