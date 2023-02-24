import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {useNavigate } from "react-router-dom";

const drawerWidth = 200;

const DrawerMUI = () => {
  const navigate = useNavigate();

  const list = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Create",
      to: "/create",
      bgColor: "#007fff"
    }
  ];

  return (
    <Drawer anchor="left" variant="permanent" sx={{ 
        width: drawerWidth,
       }}>
      {list.map((item, idx) => (
        <List sx={{ width: drawerWidth }} key={idx}>
          {/* <Link to={item.to}> */}
            <ListItemButton onClick={() => navigate(item.to)} sx={{
              backgroundColor: item.bgColor ? item.bgColor : "",
            }}>
              <ListItemIcon>{}</ListItemIcon>
              <ListItemText primary={item.title} style={{

              }}/>
            </ListItemButton>
          {/* </Link> */}
        </List>
      ))}
    </Drawer>
  );
};

export default DrawerMUI;