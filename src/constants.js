export const endpoints = {
  API: 'http://localhost:3001/api',
  LOGIN: 'http://localhost:3001/login',
  UPDATE_OFFICE: 'http://localhost:3001/offices' 
}

export const colors = {
  lightBlue: "#9CB0C3",
  midBlue: "#3D6C95",
  deepBlue: "#0F4B81",
  lightYellow: "#FEE48A",
  midYellow: "#E6C554",
  deepYellow: "#C79C0A",
  lightRed: "#FEAB8A",
  midRed: "#E67E54",
  deepRed: "#C7400A",
  lightOrange: "#FECE8A",
  midOrange: "#E6AA54",
  deepOrange: "#C7790A",
};

const { deepBlue, lightBlue, lightOrange, deepOrange} = colors;

export const backgroundGradient = `linear-gradient(to bottom right, ${deepBlue}, ${lightBlue}`;

export const h1Styling = {
    fontSize: "100px",
    background: `linear-gradient(to bottom right, ${deepOrange}, ${lightOrange}`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent"
  };