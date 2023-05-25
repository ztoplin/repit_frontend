import OfficeCard from "./OfficeCard";
import CommunityCard from "./CommunityCard";

function OfficeCardContainer({ civicInfoResponseObject, user, communityInfo }) {
  if (!civicInfoResponseObject) {
    return null;
  }

  const allOfficeCards = civicInfoResponseObject.offices
    .filter((office) => {
      if (!office?.levels) {
        return false;
      }
      const {
        levels: [firstLevel]
      } = office;
      return firstLevel === "administrativeArea2" || firstLevel === "locality";
    })
    .map((officeObject) => (
      <OfficeCard
        officeObject={officeObject}
        civicInfoResponseObject={civicInfoResponseObject}
        isUserSignedIn= {Boolean(user)}
      />
    ));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        overflow: "auto"
      }}
    >
      <CommunityCard communityInfo={communityInfo} />
      {allOfficeCards}
    </div>
  );
}

export default OfficeCardContainer;
