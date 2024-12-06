import axios from "axios";

const API_URL = process.env.REACT_APP_USER_API;

// Get all users
const getAllUsers = async (accessToken) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.get(`${API_URL}/all-users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response.data;
  }
};

// Sign up user
const signupUser = async (userData) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.post(`${API_URL}/signup`, userData);
    const { message, user, accessToken } = response.data;
    return { user, accessToken };
  } catch (error) {
    console.error("Error signing up:", error);
    throw error.response.data;
  }
};

// Login user
const loginUser = async (credentials) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { message, user, accessToken } = response.data;
    return { user, accessToken };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error.response.data;
  }
};

const updateUser = async (id, isAdmin, accessToken) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.patch(
      `${API_URL}/update-user/${id}`,
      { isAdmin },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Updating user:", error);
    throw error.response.data;
  }
};

const deleteUser = async (id, accessToken) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.delete(`${API_URL}/delete-user/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in deleting user!", error);
    throw error.response.data;
  }
};

export { getAllUsers, signupUser, loginUser, updateUser, deleteUser };
