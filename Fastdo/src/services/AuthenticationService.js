import axios from "axios";

const apiUrlBase = "/access";
const defaultEndpoint = "https://api.fastdo.vn/api";
const versionApi = "/v1";

let uri = "http://apitest.fastdo.vn/api/v1/access/login";

export const PostLogin = async (signInForm, headers) => {
  try {
    const res = await axios.post(uri, signInForm, { headers });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
