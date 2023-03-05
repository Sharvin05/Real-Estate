import React from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import Hero from "./images/vacation.jpeg";
import { Box } from "@mui/system";
import Activity from "./Activities";
import Payments from "./Payments";
import villa from "./images/villa.png";
import Footer from "./Footer";
function LandingPage() {
  return (
    <React.Fragment>
      <NavBar />
      <img src={Hero} className="Hero" alt="" />

      <Box className="Par1">
        <Box className="par1Content">
          <h2 className="h3 heading">
            HOMES FROM AED 2 MILLION UAE GOLDEN VISA ASSISTANCE
          </h2>
          <h4 className="h5 content">
            When you buy property with DAMAC, you get more than just a home in
            Dubai. Expect all the assistance you need with securing your 10-year
            UAE Golden Visa.
          </h4>
          <h4 className="h5 content">
            {" "}
            Choose from apartments and villas in world-class master communities
            such as DAMAC Hills, DAMAC Hills 2 and Business Bay, and make Dubai
            your forever home.
          </h4>
        </Box>
      </Box>
      <img className="villa" src={villa} alt="" />
      <Activity />
      <Payments />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
