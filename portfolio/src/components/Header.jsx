import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ toggleTheme, theme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}>
        <Toolbar>
          {/* Titre */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mon Portfolio
          </Typography>

          {/* Menu Desktop */}
          <nav className="desktop-menu" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Link to="/">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Bouton pour changer le thème */}
          <Button
            onClick={toggleTheme}
            variant="outlined"
            color="inherit"
            style={{ marginLeft: "15px", borderColor: "var(--text-color)", color: "var(--text-color)" }}
          >
            {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
          </Button>

          {/* Menu Hamburger (mobile) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            className="menu-icon"
            style={{ marginLeft: "10px" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer pour le menu mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250, backgroundColor: "var(--background-color)", color: "var(--text-color)" }}>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/skills" onClick={handleDrawerToggle}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/certifications" onClick={handleDrawerToggle}>
            <ListItemText primary="Certifications" />
          </ListItem>
          <ListItem button component={Link} to="/testimonials" onClick={handleDrawerToggle}>
            <ListItemText primary="Testimonials" />
          </ListItem>
          <ListItem button component={Link} to="/statistics" onClick={handleDrawerToggle}>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
