import "../pages/Styles.css";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import BiotechIcon from "@mui/icons-material/Biotech";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import registro from "../pages/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="menu">
      <Link to="/inicio">
        <img src={registro} alt="Logo" className="logo" />
      </Link>
      <Box>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/pacientes">
                <ListItemIcon>
                  <PeopleIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Pacientes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/expediente">
                <ListItemIcon>
                  <ArticleIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Expediente" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/laboratorio">
                <ListItemIcon>
                  <BiotechIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Laboratorio" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/receta">
                <ListItemIcon>
                  <AssignmentIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Recetas" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/cita">
                <ListItemIcon>
                  <EditCalendarIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Citas" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/calendario">
                <ListItemIcon>
                  <CalendarMonthIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Calendario" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
        <div>
          <Link to="/">
            <button type="submit" className="salir">Cerrar Sesión</button>
          </Link>
        </div>
    </div>
  );
}
