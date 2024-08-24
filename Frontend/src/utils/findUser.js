import axios from "axios";

export const findUser = async () => {
  try {
    let response = await axios.get("http://localhost:8000/users/getuser", {
      withCredentials: true,
    });
    if (response.data.username) {
      return response.data.username;
    } else {
      return "My Account";
    }
  } catch (err) {
    console.log(err.message);
  }
};
