import PublicIcon from "@mui/icons-material/Public";
import IconButton from "@mui/material/IconButton";

import { getSocialMediaHrefAndIcon } from "../utils";
import { colors } from "../constants";

const { deepBlue } = colors;

const SocialsContainer = ({
  channels,
  address,
  email,
  phone,
  website
}) => {
  return (
    <div
      style={{ display: "flex", width: "25%", flexDirection: "column" }}
      className="address-and-stuff-container"
    >
      <h3>Address: {address}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>
        <IconButton href={website} style={{ color: colors.deepBlue }}>
          <PublicIcon />
        </IconButton>

        {channels?.map((socialMediaObject) => {
          const { href, icon } = getSocialMediaHrefAndIcon(socialMediaObject);

          return (
            <IconButton href={href} style={{ color: deepBlue }}>
              {icon}
            </IconButton>
          );
        })}
      </h3>
    </div>
  );
};

export default SocialsContainer;
