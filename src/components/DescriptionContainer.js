import { useState } from "react";

import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { submitOfficeDescription } from "../api";
import { colors } from "../constants";

const ExpandMore = styled(({ expand, ...other }) => <IconButton {...other} />)(
  ({ theme, expand }) => ({
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  })
);

const DescriptionContainer = ({
  officeObject,
  officeName,
  isUserSignedIn,
  officialName,
  party
}) => {
  const [officeDescriptionText, setOfficeDescriptionText] = useState(
    officeObject.description
  );

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  const handleChangeOfficeDescriptionText = (e) => {
    setOfficeDescriptionText(e.target.value);
  };

  const handleOfficeDescriptionSubmission = (e) => {
    e.preventDefault();
    submitOfficeDescription({ officeObject, officeDescriptionText });
  };

  return (
    <div
      className="main-info-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        alignItems: "space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center ",
            width: "50%"
          }}
          className="official-name-row"
        >
          <CardHeader
            title={`Office: ${officeName} `}
            style={{
              fontWeight: "bold"
            }}
          />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {isUserSignedIn ? (
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                multiline={true}
                fullWidth={true}
                onChange={handleChangeOfficeDescriptionText}
                value={officeDescriptionText}
                style={{
                  backgroundColor: colors.lightBlue,
                  color: colors.lightBlue
                }}
              />
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: colors.lightRed,
                  color: colors.deepBlue
                }}
                onClick={handleOfficeDescriptionSubmission}
              >
                Submit
              </Button>
            </div>
          ) : (
            <div>{officeDescriptionText}</div>
          )}
        </Collapse>
      </div>
      <h2>{officialName}</h2>
      <h3>Party: {party} </h3>
    </div>
  );
};

export default DescriptionContainer;
