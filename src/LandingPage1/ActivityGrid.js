import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import kayak from "./images/kayak.jpg";
import { Tooltip } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <Tooltip title="kayak" placement="top">
            <img src={kayak} className="roundFrame" alt="" />
          </Tooltip>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {" "}
          <Tooltip title="lazy River" placement="top">
            <img src={kayak} className="roundFrame" alt="" />
          </Tooltip>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {" "}
          <Tooltip title="Lagoon" placement="top">
            <img src={kayak} className="roundFrame" alt="" />
          </Tooltip>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function ActivityGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
