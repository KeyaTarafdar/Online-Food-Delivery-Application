import axios from "axios";

// USER FUNCTIONS-------------------------------------------------------------------------------
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
    alert("An error occured during login");
  }
};

// ADMIN FUNCTIONS-------------------------------------------------------------------------------
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
    alert("An error occured during login");
  }
};

// Admin logout
export const logoutAdmin = async () => {
  try {
    let response = await axios.post(
      "http://localhost:8000/admins/logout",
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch Admin
export const fetchAdmin = async () => {
  try {
    let response = await axios.get("http://localhost:8000/admins/getadmin", {
      withCredentials: true,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update company name
export const updateCompanyName = async (name) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/admins/updatecompanyname",
      { name },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update company email
export const updateCompanyEmail = async (email) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/admins/updatecompanyemail",
      { email },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update company phone
export const updateCompanyPhone = async (phone) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/admins/updatecompanyphone",
      { phone },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Add delivery boy
export const addDeliveryBoy = async (username, contact, address) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/admins/createdeliveryboy",
      { username, contact, address },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch all delivery boy
export const fetchAllDeliveryBoy = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8000/admins/getdeliveryboy",
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Delete delivery boy
export const deleteDeliveryBoy = async (id) => {
  let response = await axios.delete(
    "http://localhost:8000/admins/deletedeliveryboy",
    {
      params: {
        deliveryBoyId: id,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

// Fetch all users
export const fetchAllUsers = async () => {
  try {
    let response = await axios.get("http://localhost:8000/admins/getallusers", {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Add new food item
export const addNewFoodItem = async (formData) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/foods/createfooditem",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
