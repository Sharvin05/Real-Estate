import { Box } from "@mui/system";
import React, { useState } from "react";
import crypto from "./images/crypto.png";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress, MenuItem } from "@mui/material";
import axios from "axios";
import done from "./images/done.png";
function Payments() {
  const [response, setResponse] = useState("empty");
  const List = [
    { label: "Mr.", value: "Mr." },
    {
      label: "Mrs.",
      value: "Mrs.",
    },
    { label: "Ms", value: "Ms" },
    { label: "Miss", value: "Miss" },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    setResponse("loading");
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const title = data.get("title");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const phoneNumber = data.get("phoneNumber");
    try {
      await axios
        .post("http://localhost:3011/contact", {
          title,
          email,
          phoneNumber,
          firstName,
          lastName,
        })
        .then((response) => {
          console.log(response.data);
          setResponse("successful");
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <Box className="payments">
        <Box className="paymentContent">
          <h1 className="paymentHeading">
            Cryptocurrency payments are now accepted as mode of payment
          </h1>
          <img src={crypto} className="crypto" alt="" />
        </Box>
        <Box className="getDemo">
          <h3 className="smallHeading">READY FOR YOUR NEXT NEW HOME?</h3>
          <h2 className="smallInfo">
            Get in touch now before all our units gets sold out! Our property
            specialists are more than happy to assist you.
          </h2>
        </Box>

        {response === "successful" && (
          <Box className="message">
            <h3 className="smallHeading">
              {" "}
              WE WILL GET BACK TO AS SOON AS POSSIBLE!
              <br />
              Thank you for showing your Interest!
            </h3>
            <img src={done} alt="" className="spinner" />
          </Box>
        )}
        {response === "loading" && (
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "3rem",
              marginTop: "2rem",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {response === "empty" && (
          <Box
            className="demoForm"
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              className="titleInput"
              name="title"
              id="standard-select-currency"
              select
              label="Title"
              helperText="Please select your Title"
              variant="standard"
            >
              {List.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>{" "}
            &nbsp; &nbsp; &nbsp;
            <TextField
              className="fisrtName"
              name="firstName"
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <br />
            <TextField
              className="demoInput"
              name="lastName"
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
            <br />
            <TextField
              className="demoInput"
              name="phoneNumber"
              id="standard-basic"
              label="(+971) Phone Number"
              variant="standard"
            />
            <br />
            <TextField
              className="demoInput"
              name="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <Button
              className="demo button"
              type="submit"
              variant="contained"
              style={{
                borderRadius: "2rem",
                backgroundColor: "#48C1EF",
                marginTop: "2rem",
              }}
            >
              ENQUIRE NOW
            </Button>
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Payments;
