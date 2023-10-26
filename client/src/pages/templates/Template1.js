import React from "react";
import "../../resources/templates.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("smart_resume-user"));
  return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.phoneNumber}</p>
        </div>
      </div>
      <div className="divider mt-3"></div>

      <div className="objective mt-5">
        <h3>Objective</h3>
        <hr />
        <p>{user.careerObjective}</p>
      </div>

      <div className="divider mt-3"></div>

      <div className="education mt-5">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{education.rangeyear} :</b>
              </h6>
              <p>
                <b>
                  {education.qualification} of {education.fieldOfStudy} , {" "}
                  {education.institution}{" "}
                </b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-5">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{exp.rangeyear} :</b>
              </h6>
              <p>
                <b>
                  {exp.position} at {exp.company} , {exp.location}{" "}
                </b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-5">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((pro) => {
          return (
            <div className="d-flex flex-column">
              <h6 >
                <b>
                  {pro.title} [{pro.duration}] {" "} :
                </b>
              </h6>
              <p>{pro.description}</p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="skills mt-5">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((ski) => {
          return (
            <div className="d-flex flex-column">
              <p>{ski.skills} {ski.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template1;
