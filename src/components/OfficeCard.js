import { React } from "react";

import Card from "@mui/material/Card";

import { colors } from "../constants";
import DescriptionContainer from "./DescriptionContainer";
import SocialsContainer from "./SocialsContainer";

function OfficeCard({ officeObject, civicInfoResponseObject, isUserSignedIn }) {
  const { officials } = civicInfoResponseObject;
  const {
    officialIndices: [firstOfficialIndex],
    name: officeName
  } = officeObject;
  const official = officials[firstOfficialIndex];
  const { name: officialName } = official;

  const {
    channels,
    address: officialAddress,
    party,
    emails: [email] = ["Email not available"],
    phones: [phone] = ["Phone not available"],
    urls: [website] = ["URL not available"]
  } = official;

  const [{ line1, city, state }] = officialAddress ?? [
    { line1: "", city: "", state: "" }
  ];

  const address = officialAddress
    ? `${line1} ${city}, ${state}`
    : "Address not available";

  return (
    <Card
      sx={{
        borderStyle: "solid  solid double",
        backgroundImage: "linear-gradient(to bottom right, #C7790A, #FECE8A)",
        borderColor: colors.lightOrange,
        width: "99%",
        display: "flex",
        flexDirection: "row",
        margin: "1%",
        height: "10%"
      }}
    >
      <DescriptionContainer
        officeObject={officeObject}
        officeName={officeName}
        isUserSignedIn={isUserSignedIn}
        officialName={officialName}
        party={party}
      />
      <SocialsContainer
        channels={channels}
        address={address}
        email={email}
        phone={phone}
        website={website}
      />
    </Card>
  );
}

export default OfficeCard;
