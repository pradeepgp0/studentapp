import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [active, setActive] = useState();
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      subject: "Physics",
    },
    {
      id: 2,
      subject: "Social",
    },
    {
      id: 3,
      subject: "English",
    },
  ]);
  useEffect(() => {}, []);


  const rendersubjects = () => {
    return subjects.map((data: any, index: any) => {
      return (
        <div className="studentsubject" key={data.id}>
          <div  className="subjectname" >{subjects[index].subject}</div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="bodybackground"></div>
      <div  className="content">
   
      <div  className="welcometext">
        Welcome, Pradeep

      </div>
      <div className="subjects">
     {rendersubjects()}
      </div>
           
      </div>
    </>
  );
}

export default App;
