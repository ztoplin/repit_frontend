import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import { fetchRepsAndComByAddress } from "./api";
import "./App.css";
import OfficeCardContainer from "./components/OfficeCardContainer";
import Login from "./components/Login";
import { colors, backgroundGradient, h1Styling } from "./constants";

function App() {
  const [addressSearchText, setAddressSearchText] = useState("");
  const [isAddressFound, setIsAddressFound] = useState(false);
  const [data, setData] = useState({});

  const [user, setUser] = useState(null);

  const handleChangeAddressSearchText = ({ target: { value } }) => {
    setAddressSearchText(value);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const searchForAddress = async (address) => {
    const data = await fetchRepsAndComByAddress(address);
    setData(data);
    setIsAddressFound(true);
  };

  const handleAddressSearch = () => {
    searchForAddress(addressSearchText);
  };

  const {
    googleCivicResponse = null,
    mergedCouncilMember,
    communityInfo
  } = data;

  const { deepBlue, midOrange } = colors;

  return (
    <div
      className="App"
      style={{
        backgroundImage: backgroundGradient,
        padding: "1%",
        minHeight: "100vh",
        height: "100%"
      }}
    >
      <h1 style={h1Styling}>Rep-it NYC!</h1>

      <Login user={user} setUser={setUser} />
      {user && (
        <Button
          variant="contained"
          style={{
            backgroundColor: midOrange,
            color: deepBlue,
            marginBottom: "1%"
          }}
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
        >
          Logout
        </Button>
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center"
        }}
      >
        <TextField
          type="text"
          onChange={handleChangeAddressSearchText}
          value={addressSearchText}
          placeholder="Enter address"
          style={{
            backgroundColor: "white",
            color: deepBlue
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MapsHomeWorkIcon />
              </InputAdornment>
            )
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: midOrange,
            color: deepBlue
          }}
          onClick={handleAddressSearch}
        >
          Search
        </Button>
      </div>
      {isAddressFound && (
        <OfficeCardContainer
          civicInfoResponseObject={googleCivicResponse}
          councilMember={mergedCouncilMember}
          user={user}
          communityInfo={communityInfo}
        />
      )}
    </div>
  );
}

export default App;
