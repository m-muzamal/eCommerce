import axios from "axios";

const API_URL = process.env.REACT_APP_USER_API;

// Get all users
const getAllUsers = async (accessToken) => {
  try {
    if (!API_URL) throw new Error("API_URL is not defined");
    const response = await axios.get(`${API_URL}/all-users`, accessToken);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
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

export { getAllUsers, signupUser, loginUser };
