import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const boroughToShortCodeMapping = {
  MANHATTAN: "mn",
  BROOKLYN: "bk",
  "STATEN ISLAND": "si",
  "THE BRONX": "bx",
  QUEENS: "qs"
};

const getCommunityCardLinks = ({communityDistrictNumber, boroughName}) => {
  const districtNumber = parseInt(communityDistrictNumber);
  return {
    healthReportURL: `https://www.nyc.gov/assets/doh/downloads/pdf/data/2018chp-${boroughToShortCodeMapping[boroughName]}${districtNumber}.pdf`,
    communityBoardURL: `http://www.nyc.gov/${boroughName.toLowerCase()}cb${districtNumber}`,
    communityProfileURL: `https://communityprofiles.planning.nyc.gov/${boroughName.toLowerCase()}/${parseInt(
      districtNumber
    )}`
  };
};

const getSocialMediaHrefAndIcon = ({ type, id }) => {
    switch (type) {
      case "Facebook":
        return {
          href: `https://facebook.com/${id}`,
          icon: <FacebookIcon />
        };
      case "Twitter":
        return {
          href: `https://twitter.com/${id}`,
          icon: <TwitterIcon />
        };
      default:
        throw new Error("This social media type is not defined!");
    }
  };

export { getCommunityCardLinks, getSocialMediaHrefAndIcon };
