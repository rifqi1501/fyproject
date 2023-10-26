import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";

const { RangePicker } = DatePicker;


function ExperienceProjects() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h4>Experience</h4>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item label="Company"
                      {...restField}
                      name={[name, "company"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing company",
                        },
                      ]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item label="Position"
                      {...restField}
                      name={[name, "position"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing position",
                        },
                      ]}
                    >
                      <Input placeholder="Position" />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item label="Location"
                      {...restField}
                      name={[name, "location"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing location",
                        },
                      ]}
                    >
                      <Input placeholder="Location" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item label="Range of year"
                      {...restField}
                      name={[name, "rangeyear"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing range of year",
                        },
                      ]}
                    >
                      <Input placeholder="Range of year" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h4>Projects</h4>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item label="Title"
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing title",
                        },
                      ]}
                    >
                      <Input placeholder="Name of your project" />
                    </Form.Item>
                  </div>
                  <div className="col-md-4">
                    <Form.Item label="Description"
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing description",
                        },
                      ]}
                    >
                      <TextArea 
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Describe your project"
                      autoSize={{ minRows: 3, maxRows: 6 }}/>
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item label="Duration of project"
                      {...restField}
                      name={[name, "duration"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing duration",
                        },
                      ]}
                    >
                      <Input placeholder="Duration of project"/>
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ExperienceProjects;
