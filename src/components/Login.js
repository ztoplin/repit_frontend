import { useState } from "react";
import { colors } from "../constants";
import Button from "@mui/material/Button";

import { sendUserData } from "../api";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleChangeUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await sendUserData(username, password);
    const { username: savedUsername, errors } = data;
    if (savedUsername) {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } else if (errors) {
      setError(errors);
    }
  };

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <form>
      <p style={{ color: colors.midOrange }}>
        {" "}
        {user ? "Welcome, Admin!" : "Are you an Admin?"}
      </p>

      <TextField
        type="text"
        onChange={handleChangeUsername}
        value={username}
        style={{
          backgroundColor: "white",
          color: colors.deepBlue
        }}
        placeholder="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
        variant="outlined"
      />

      <TextField
        type="password"
        onChange={handleChangePassword}
        value={password}
        placeholder="Password"
        style={{
          backgroundColor: "white",
          color: colors.deepBlue
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: colors.midOrange,
          color: colors.deepBlue
        }}
        onClick={handleLogin}
      >
        {" "}
        Login{" "}
      </Button>
    </form>
  );
}
export default Login;
