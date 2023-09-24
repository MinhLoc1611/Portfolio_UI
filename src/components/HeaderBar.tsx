import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
  styled,
  Typography,
  Toolbar,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Divider,
  Box,
  AppBar,
  Drawer,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 375;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const MyTypography = styled(Typography)({
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "29px",
    letterSpacing: "0px",
    textAlign: "right",
    padding: 10,
    display: "inline-block",
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              color: isActive ? "#FF6464" : "#000000" ,
            };
          }}
        >
          Portfolio
        </NavLink>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/blog" sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to={"/blog"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Blog
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/works" sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to={"/works"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Works
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/contact" sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to={"/contact"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Contact
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{ boxShadow: "none", backgroundColor: "white"}}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "grey" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <MyTypography>
              <NavLink
                to={"/"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Portfolio
              </NavLink>
            </MyTypography>
            <MyTypography>
              <NavLink
                to={"/blog"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Blog
              </NavLink>
            </MyTypography>
            <MyTypography>
              <NavLink
                to={"/works"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000",
                  };
                }}
              >
                Works
              </NavLink>
            </MyTypography>
            <MyTypography>
              <NavLink
                to={"/contact"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FF6464" : "#000000" ,
                  };
                }}
              >
                Contact
              </NavLink>
            </MyTypography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
