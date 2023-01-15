import axios from "axios";
export const registerService = async (data) => {
  try {
    const res = await axios.post("http://localhost:4040/auth/register", data);
    return res;
  } catch (error) {
    console.log("error from services", error);
  }
};

export const loginService = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:4040/auth/login",
      { email: data.emailLogin, password: data.passwordLogin },
      {
        header: { "Access-Control-Allow-Origin": "*" },
      }
    );
    return res;
  } catch (error) {
    console.log("error from services", error);
    throw error;
  }
};
