import { endpoints } from "./constants";

export const fetchRepsAndComByAddress = (address) =>
  fetch(endpoints.API, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ address })
  }).then((response) => response.json());

export const sendUserData = (username, password) =>
  fetch(endpoints.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then((response) => response.json());

export const submitOfficeDescription = ({
  officeObject: { name: title },
  officeDescriptionText: description
}) =>
  fetch(endpoints.UPDATE_OFFICE, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      description
    })
  });
