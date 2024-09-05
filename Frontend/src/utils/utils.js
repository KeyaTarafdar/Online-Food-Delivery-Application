// *utils.js*
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

// Fetch all food items
export const fetchAllFoods = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8000/foods/getallfooditems",
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch single food item
export const fetchSingleFood = async (id) => {
  try {
    let response = await axios.get(
      "http://localhost:8000/foods/getsinglefooditem",
      { foodId: id },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Delete food item
export const deleteFoodItem = async (id) => {
  try {
    let response = await axios.delete(
      "http://localhost:8000/foods/deletefooditem",
      {
        params: {
          id,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update food item
export const updateFoodItem = async (formData) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/foods/updatefooditem",
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

// Add new restaurent
export const addNewRestaurent = async (formData) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/admins/addnewrestaurent",
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

// Fetch all restaurents
export const fetchAllRestaurent = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8000/admins/fetchallrestaurent",
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch a particular restaurent(extra)
export const fetchSingleRestaurent = async (id) => {
  console.log(id);
  try {
    let response = await axios.get(
      "http://localhost:8000/admins/fetchsinglerestaurent",
      { id },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Delete restaurent
export const deleteRestaurent = async (id) => {
  try {
    let response = await axios.delete(
      "http://localhost:8000/admins/deleterestaurent",
      {
        params: {
          id,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update Restautrent
export const updateRestaurent = async (formData) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/admins/updaterestaurent",
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

// Add new category
export const addNewCategory = async (formData) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/admins/addnewcategory",
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

// Fetch all categories
export const fetchAllCategory = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8000/admins/getallcategory",
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Delete category
export const deleteCategory = async (id) => {
  try {
    let response = await axios.delete(
      "http://localhost:8000/admins/deletecategory",
      {
        params: {
          id,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Update Category
export const updateCategory = async (formData) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/admins/updatecategory",
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

// Add to cart
export const addToCart = async (id) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/users/addtocart",
      { foodId: id },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
// Delete cart item
export const deleteCartItem = async (id) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/users/deleteitemfromcart",
      { foodId: id },
      { withCredentials: true }
    );
    alert(response.data)
  } catch (err) {
    console.log(err.message);
  }
};
