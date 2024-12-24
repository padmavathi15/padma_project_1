import React, { useState } from "react";

const ClassDropdown = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const classes = ["Class 1", "Class 2"];
  const sections = ["A", "B"];

  // Timetable data organized by day and time slots
  const timetable = {
    "Class 1": {
      A: {
        Monday: {
          "9:00 AM - 10:00 AM": "Mathematics",
          "10:00 AM - 11:00 AM": "English",
          "11:00 AM - 12:00 PM": "Science",
          "12:00 PM - 1:00 PM": "History",
        },
        Tuesday: {
          "9:00 AM - 10:00 AM": "Geography",
          "10:00 AM - 11:00 AM": "Physics",
          "11:00 AM - 12:00 PM": "Mathematics",
          "12:00 PM - 1:00 PM": "English",
        },
      },
      B: {
        Monday: {
          "9:00 AM - 10:00 AM": "English",
          "10:00 AM - 11:00 AM": "Mathematics",
          "11:00 AM - 12:00 PM": "Social Studies",
          "12:00 PM - 1:00 PM": "Physics",
        },
        Tuesday: {
          "9:00 AM - 10:00 AM": "Science",
          "10:00 AM - 11:00 AM": "Chemistry",
          "11:00 AM - 12:00 PM": "Biology",
          "12:00 PM - 1:00 PM": "History",
        },
      },
    },
    "Class 2": {
      A: {
        Wednesday: {
          "9:00 AM - 10:00 AM": "History",
          "10:00 AM - 11:00 AM": "Geography",
          "11:00 AM - 12:00 PM": "Mathematics",
          "12:00 PM - 1:00 PM": "English",
        },
        Thursday: {
          "9:00 AM - 10:00 AM": "Science",
          "10:00 AM - 11:00 AM": "Physics",
          "11:00 AM - 12:00 PM": "Chemistry",
          "12:00 PM - 1:00 PM": "Biology",
        },
      },
      B: {
        Wednesday: {
          "9:00 AM - 10:00 AM": "Physics",
          "10:00 AM - 11:00 AM": "Chemistry",
          "11:00 AM - 12:00 PM": "Biology",
          "12:00 PM - 1:00 PM": "History",
        },
        Thursday: {
          "9:00 AM - 10:00 AM": "Mathematics",
          "10:00 AM - 11:00 AM": "English",
          "11:00 AM - 12:00 PM": "Science",
          "12:00 PM - 1:00 PM": "Physics",
        },
      },
    },
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">School Management</h1>

      {/* Dropdown for class selection */}
      <div className="mb-3">
        <label className="form-label">Select Class:</label>
        <select
          className="form-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for section selection */}
      <div className="mb-3">
        <label className="form-label">Select Section:</label>
        <select
          className="form-select"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          disabled={!selectedClass}
        >
          <option value="">Select Section</option>
          {sections.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {/* Display timetable */}
      {selectedClass && selectedSection && (
        <div>
          <h5>
            Timetable for {selectedClass} - {selectedSection}
          </h5>
          <table className="table table-striped table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Day</th>
                {timeSlots.map((slot) => (
                  <th key={slot}>{slot}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(
                timetable[selectedClass]?.[selectedSection] || {}
              ).map(([day, slots]) => (
                <tr key={day}>
                  <td>{day}</td>
                  {timeSlots.map((slot) => (
                    <td key={slot}>{slots[slot] || "Free"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClassDropdown;
