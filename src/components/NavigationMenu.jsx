
import { NavLink } from "react-router-dom";
import MarksOverview from "../reusable_components/MarksOverview";
import AttendanceOverview from "../reusable_components/AttendanceOverview";
export const routes = [
    { path: "/teacher-portal", label: "Home", Component:MarksOverview },
    { path: "/teacher-portal/about", label: "About", Component: AttendanceOverview },
    // { path: "/services", label: "Services", Component: Services },
    // { path: "/contact", label: "Contact", Component: Contact },
  ];
  
 export const NavigationMenu = () => (
    <nav>
      <ul>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );