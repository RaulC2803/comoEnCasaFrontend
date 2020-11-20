//const basename = "https://comoencasa-289703.rj.r.appspot.com";
const basename = "http://localhost:8080";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const url = basename + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export default callApi;
