import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Rate, Select, Space } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function SkillsEducation() {
  return (
    <div>
      <h4>Education</h4>
      <hr />

      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      label="Qualification"
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing qualification",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="e.g Diploma"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                          {
                            value: "Sijil Pelajaran Malaysia",
                            label: "Sijil Pelajaran Malaysia",
                          },
                          {
                            value: "Sijil Vokasional",
                            label: "Sijil Vokasional",
                          },
                          {
                            value: "Foundation",
                            label: "Foundation",
                          },
                          {
                            value: "Diploma",
                            label: "Diploma",
                          },
                          {
                            value: "Bachelor's Degree",
                            label: "Bachelor's Degree",
                          },
                          {
                            value: "Master",
                            label: "Master",
                          },
                          {
                            value: "PhD",
                            label: "PhD",
                          },
                        ]}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      label="Field of Study"
                      {...restField}
                      name={[name, "fieldOfStudy"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing field of study",
                        },
                      ]}
                    >
                      <Input placeholder="Field of Study" />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      label="Institution"
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing institution name",
                        },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      label="Range of year"
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

      <h4>Skills</h4>
      <hr />

      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      label="Skills"
                      {...restField}
                      name={[name, "skills"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing skills",
                        },
                      ]}
                    >
                      <Input placeholder="Skills" />
                    </Form.Item>
                  </div>
                  <div className="col-md-4">
                    <Form.Item
                      label="Rate"
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing rating",
                        },
                      ]}
                    >
                      <Rate />
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEducation;
