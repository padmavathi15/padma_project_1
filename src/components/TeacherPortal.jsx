import React, { useState } from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar'; // Import TeacherNavbar

import AssignmentTracker from '../section_components/AssignmentTracker';
import StudentPerformanceOverview from '../section_components/StudentPerformanceOverview';
import CommunicationPanel from '../section_components/CommunicationPanel';
import SyllabusDetails from '../section_components/SyllabusDetails';
import Leave from '../section_components/Leave';
import ClassTimetable from '../section_components/ClassTimeTable';
import MonthlyReport from '../section_components/MonthlyReports';
import QuarterlyReport from '../section_components/QuarterlyReport';
import FinalExamReport from '../section_components/FinalExamReport';
import MarksOverview from '../reusable_components/MarksOverview';
import AttendanceOverview from '../reusable_components/AttendanceOverview';
import { NavigationMenu } from './NavigationMenu';



const SECTIONS = {
  CLASSROOM_OVERVIEW: 'ClassroomOverview',
  ASSIGNMENT_TRACKER: 'AssignmentTracker',
  CLASS_TIMETABLE: 'ClassTimetable',
  STUDENT_PERFORMANCE: 'StudentPerformanceOverview',
  COMMUNICATION_PANEL: 'CommunicationPanel',
  SYLLABUS: 'Syllabus',
  LEAVE: 'Leaves',
  MONTHLY_REPORT: 'MonthlyReport',
  QUARTERLY_REPORT: 'QuarterlyReport',
  FINAL_EXAM_REPORT: 'FinalExamReport',
  MARKSOVERVIEW: 'MarksOverview',
  ATTENDANCEOVERVIEW: 'AttendanceOverview',
};


const TeacherPortal = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS.MARKSOVERVIEW);

  const renderSection = () => {
    switch (currentSection) {
      
      case SECTIONS.ASSIGNMENT_TRACKER:
        return <AssignmentTracker />;
      case SECTIONS.CLASS_TIMETABLE:
        return <ClassTimetable />;
      case SECTIONS.STUDENT_PERFORMANCE:
        return <StudentPerformanceOverview />;
      case SECTIONS.COMMUNICATION_PANEL:
        return <CommunicationPanel />;
      case SECTIONS.SYLLABUS:
        return <SyllabusDetails />;
      case SECTIONS.LEAVE:
        return <Leave />;
      case SECTIONS.MONTHLY_REPORT:
        return <MonthlyReport />;
      case SECTIONS.QUARTERLY_REPORT:
        return <QuarterlyReport />;
      case SECTIONS.FINAL_EXAM_REPORT:
        return <FinalExamReport />;
        case SECTIONS.MARKSOVERVIEW:
        return <MarksOverview/>
      case SECTIONS.ATTENDANCEOVERVIEW:
      return  <AttendanceOverview/>
      default:
        return <h1 className="text-center my-5">Welcome to the Teacher Portal</h1>;
    }
  };

  return (
    <div>
      {/* <TeacherNavbar /> {/* Include the Navbar here */}
      {/* <div className="d-flex">
        <TeacherSidebar setCurrentSection={setCurrentSection} />
        <div
          className="flex-grow-1 p-4"
          style={{ marginLeft: '250px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}
        >
          {renderSection()}
        </div>
      </div> */} 
      <NavigationMenu/>
    </div>
  );
};



export default TeacherPortal;
