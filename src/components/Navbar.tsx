import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Home, Task, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#1f2937",
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" component="div" fontWeight="bold">
            <img alt="family-chores" src="/images/family-chores.png" width="100%" />
          </Typography>
            <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/family">
                <ListItemIcon sx={{ color: "#fff" }}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Family" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "#fff" }}>
                  <Task />
                </ListItemIcon>
                <ListItemText primary="Tasks" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/settings">
                <ListItemIcon sx={{ color: "#fff" }}>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Avatar
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            sx={{ mr: 2 }}
          />
          <Box>
            <Typography variant="body1">John Doe</Typography>
            <Typography variant="body2" color="gray">
              johndoe@example.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Navbar;
