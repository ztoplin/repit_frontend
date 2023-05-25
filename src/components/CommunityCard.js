import Card from "@mui/material/Card";

import { getCommunityCardLinks } from "../utils";

const CommunityCard = ({
  communityInfo: { firstBoroughName: boroughName = "", communityDistrictNumber }
}) => {
  const { healthReportURL, communityBoardURL, communityProfileURL } =
    getCommunityCardLinks({ communityDistrictNumber, boroughName });

  return (
    <Card
      sx={{
        borderStyle: "solid  solid double",
        backgroundImage: "linear-gradient(to bottom right, #C79C0A, #FECE8A)",
        width: "99%",
        display: "flex",
        flexDirection: "row",
        margin: "1%",
        height: "10%",
        justifyContent: "center"
      }}
    >
      <box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center ",
            width: "50%"
          }}
        >
          <h2>
            Community District: {boroughName} {communityDistrictNumber}
          </h2>
          <h4>
            {" "}
            <a href={communityBoardURL}> Community Board Website </a>{" "}
          </h4>
          <h4>
            {" "}
            <a href={healthReportURL}> Community Health Report </a>{" "}
          </h4>
          <h4>
            {" "}
            <a href={communityProfileURL}> Community Demographics </a>{" "}
          </h4>
        </box>
      </box>
    </Card>
  );
};

export default CommunityCard;
