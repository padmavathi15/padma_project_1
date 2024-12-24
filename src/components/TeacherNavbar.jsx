import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const TeacherNavbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const items = [
    { id: '1', name: 'Classroom Overview' },
    { id: '2', name: 'Assignment Tracker' },
    { id: '3', name: 'Student Performance Overview' },
    { id: '4', name: 'Communication Panel' },
    { id: '5', name: 'Syllabus' },
    { id: '6', name: 'Leave' },
    { id: '7', name: 'Monthly Report' },
    { id: '8', name: 'Quarterly Report' },
    { id: '9', name: 'Final Exam Report' },
  ];

  const notifications = [
    { id: 'n1', sender: 'Admin', message: 'Staff meeting at 3 PM', unread: true },
    { id: 'n2', sender: 'Parent', message: 'Leave request for student John', unread: true },
    { id: 'n3', sender: 'Admin', message: 'Submit exam report by Friday', unread: false },
  ];

  const handleMouseEnter = () => setShowInfo(true);
  const handleMouseLeave = () => setShowInfo(false);
  const handleLogout = () => navigate('/');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark custom-navbar">
        <div className="container-fluid">
          {/* Logo and School Name */}
          <a className="navbar-brand text-white" href="#">
            <img
              src="/images/school_logo1.jpg"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-middle"
            />
            <span className="ms-2 text-light">ABC International Public School</span>
          </a>

          {/* Right Side Elements */}
          <div className="d-flex ms-auto align-items-center">
            {/* Notifications */}
            <div className="position-relative me-3">
              <FaBell
                style={{ color: 'white', width: '30px', height: '30px', cursor: 'pointer' }}
                onClick={toggleNotifications}
              />
              {notifications.filter((n) => n.unread).length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '0.2em 0.5em',
                    fontSize: '0.8em',
                  }}
                >
                  {notifications.filter((n) => n.unread).length}
                </span>
              )}

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div
                  className="notifications-dropdown bg-white p-3 shadow rounded"
                  style={{
                    position: 'absolute',
                    top: '40px', // Adjust to position below the bell icon
                    right: '0',
                    width: '300px',
                    zIndex: 1000,
                  }}
                >
                  <h6 className="mb-2">Notifications</h6>
                  {notifications.length > 0 ? (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`notification-item p-2 mb-2 ${n.unread ? 'bg-light' : ''}`}
                      >
                        <strong>{n.sender}:</strong> {n.message}
                      </div>
                    ))
                  ) : (
                    <div className="notification-item p-2">No notifications</div>
                  )}
                </div>
              )}
            </div>

            {/* Teacher Info */}
            <div
              className="d-flex align-items-center position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/images/Pp.jpg"
                alt="Teacher"
                width="50"
                height="50"
                className="rounded-circle"
                style={{ cursor: 'pointer' }}
              />
              {showInfo && (
                <div className="teacher-info position-absolute bg-light p-2 rounded shadow">
                  <span className="teacher-id">ID: 12345</span>
                  <span className="teacher-name">Teacher Name</span>
                </div>
              )}
            </div>

            {/* Logout */}
            <button className="btn custom-btn ms-3" onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TeacherNavbar;
