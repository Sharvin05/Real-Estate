import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import damac from "./images/damaclogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="appBar"
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <img src={damac} className="damaclogo" alt="" />
          <Button
            className="demo"
            variant="contained"
            style={{ borderRadius: "2rem", backgroundColor: "#48C1EF" }}
          >
            Register Your Interest
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
