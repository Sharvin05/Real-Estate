import { Box } from "@mui/system";
import React from "react";
import ActivityGrid from "./ActivityGrid";

function Activity() {
  return (
    <React.Fragment>
      <Box className="Activity">
        <Box className="ActivityDetails">
          <h1 className="activityHeading">
            Where Everything is Centered Around Vibrant Living
          </h1>
          <h2 className="activityContent">
            Enjoy one of the most fun community features and activities. Living
            at Damac Lagoons is like a vacation that never ends. Sandy beaches
            and tropical island vibes are perfect for kids and families to have
            a jolly time.
          </h2>
        </Box>
        <Box className="ActivityList">
          <Box className="roundImages">
            <ActivityGrid />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default Activity;
