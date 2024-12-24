import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const TeacherSidebar = ({ setCurrentSection }) => {
  const [showMarksDropdown, setShowMarksDropdown] = useState(false);
  const [showClassroomDropdown, setShowClassroomDropdown] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Track active button
  const navigate = useNavigate();

  const sections = [
    { id: 'AssignmentTracker', label: 'Assignment Tracker', icon: 'bi bi-journal-text' },
    { id: 'ClassTimetable', label: 'Class Timetable', icon: 'bi bi-calendar-event' },
    { id: 'StudentPerformanceOverview', label: 'Student Performance', icon: 'bi bi-bar-chart' },
    { id: 'CommunicationPanel', label: 'Communication Panel', icon: 'bi bi-chat-dots' },
    { id: 'Syllabus', label: 'Syllabus', icon: 'bi bi-people-fill' },
    { id: 'Leaves', label: 'Leaves', icon: 'bi bi-clipboard' },
  ];

  const marksReports = [
    { id: 'MonthlyReport', label: 'Monthly Report' },
    { id: 'QuarterlyReport', label: 'Quarterly Report' },
    { id: 'FinalExamReport', label: 'Final Exam Report' },
  ];

  const classroomOverviewOptions = [
    { id: 'MarksOverview', label: 'Marks Overview' },
    { id: 'AttendanceOverview', label: 'Attendance Overview' },
  ];

  const handleLogout = () => {
    navigate('/'); // Redirect to home page
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Set the clicked button as active
    setCurrentSection(buttonId); // Set the current section
  };

  return (
    <div
      className="bg-light border-end d-flex flex-column"
      style={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        marginTop: '0px',
      }}
    >
      <div className="p-4 text-center">
        <h5 className="text-primary fw-bold">Teacher Portal</h5>
      </div>
      <div className="list-group list-group-flush flex-grow-1">
        <h5 className="text-primary text-center fw-bold">Teacher Portal</h5>

        {/* Classroom Overview with Dropdown */}
        <button
          className={`list-group-item list-group-item-action mt-2 bg-light text-dark d-flex align-items-center border-0 sidebar-button ${activeButton === 'ClassroomOverview' ? 'active' : ''}`}
          onClick={() => {
            setShowClassroomDropdown((prev) => !prev);
            handleButtonClick('ClassroomOverview');
          }}
          style={{ cursor: 'pointer', transition: '0.3s' }}
        >
          <i className="bi bi-house-door me-2"></i>
          <span>Classroom Overview</span>
          <i
            className={`bi ${
              showClassroomDropdown ? 'bi-chevron-up' : 'bi-chevron-down'
            } ms-auto`}
          ></i>
        </button>
        {showClassroomDropdown &&
          classroomOverviewOptions.map((option) => (
            <button
              key={option.id}
              className={`list-group-item list-group-item-action bg-light text-dark ms-3 border-0 sidebar-button ${activeButton === option.id ? 'active' : ''}`}
              onClick={() => handleButtonClick(option.id)}
            >
              {option.label}
            </button>
          ))}

        {/* Other sections */}
        {sections.map((section) => (
          <button
            key={section.id}
            className={`list-group-item list-group-item-action mt-2 bg-light text-dark d-flex align-items-center border-0 sidebar-button ${activeButton === section.id ? 'active' : ''}`}
            onClick={() => handleButtonClick(section.id)}
            style={{
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            <i className={`${section.icon} me-2`}></i>
            <span>{section.label}</span>
          </button>
        ))}

        {/* Marks Reports Dropdown */}
        <button
          className={`list-group-item list-group-item-action mt-2 bg-light text-dark d-flex align-items-center border-0 sidebar-button ${activeButton === 'MarksReports' ? 'active' : ''}`}
          onClick={() => {
            setShowMarksDropdown((prev) => !prev);
            handleButtonClick('MarksReports');
          }}
          style={{ cursor: 'pointer', transition: '0.3s' }}
        >
          <i className="bi bi-clipboard me-2"></i>
          <span>Marks Reports</span>
          <i
            className={`bi ${
              showMarksDropdown ? 'bi-chevron-up' : 'bi-chevron-down'
            } ms-auto`}
          ></i>
        </button>
        {showMarksDropdown &&
          marksReports.map((report) => (
            <button
              key={report.id}
              className={`list-group-item list-group-item-action bg-light text-dark ms-3 border-0 sidebar-button ${activeButton === report.id ? 'active' : ''}`}
              onClick={() => handleButtonClick(report.id)}
            >
              {report.label}
            </button>
          ))}
      </div>

      {/* Logout Button */}
      <button
        className={`list-group-item list-group-item-action mt-2 bg-danger text-white d-flex align-items-center border-0 sidebar-button ${activeButton === 'Logout' ? 'active' : ''}`}
        onClick={handleLogout}
        style={{
          cursor: 'pointer',
          transition: '0.3s',
        }}
      >
        <i className="bi bi-box-arrow-right me-2"></i>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default TeacherSidebar;
