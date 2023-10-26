import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Tabs, Button, Spin, message,  } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import axios from "axios";

const { TabPane } = Tabs;

function Profile() {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("smart_resume-user"));
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("/api/user/update", { ...values, _id: user._id });
      localStorage.setItem('smart_resume-user', JSON.stringify(result.data))
      setLoading(false);
      message.success("Update successfully");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience and Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>

          <Button  htmlType="submit">Update Profile</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
