import axios from "axios";

// Logout user
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

// Find user
export const findUser = async () => {
  try {
    let response = await axios.get("http://localhost:8000/users/getuser", {
      withCredentials: true,
    });
    if (response.data) {
      return response.data;
    } else {
      return "My Account";
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch company details
export const fetchCompanyDetails = async () => {
  try {
    let response = await axios.get("http://localhost:8000/companyDetails");
    return response.data[0];
  } catch (err) {
    console.log(err.message);
  }
};

// User Signup
export const signUp = async (email, password, username, contact) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/users/register",
      {
        email,
        password,
        username,
        contact,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// User login
export const loginUser = async (email, password) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/users/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
    alert("An error occured during login")
  }
};

// Admin login
export const loginAdmin = async (email, password) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/admins/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
    alert("An error occured during login")
  }
};
