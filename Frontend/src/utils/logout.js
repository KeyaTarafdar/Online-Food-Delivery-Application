import axios from "axios";

export const logout = async () => {
  try {
    let response = await axios.get("http://localhost:8000/users/logout", {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
