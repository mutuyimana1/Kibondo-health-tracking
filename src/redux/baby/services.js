import axios from "axios";
export const getAllBabiesService = async () => {
  try {
    const res = await axios.get("http://localhost:4040/baby/all");
    return res;
  } catch (error) {
    console.log("error from services", error);
  }
};
