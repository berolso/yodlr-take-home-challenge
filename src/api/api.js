import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

const token = null;

const request = async (endpoint, data = {}, method = "get") => {
  const url = `${BASE_URL}/${endpoint}`;
  const headers = { Authorization: `Bearer ${token}` } || null;
  const params = method === "get" ? data : {};

  try {
    return (await axios({ url, method, data, params, headers })).data;
  } catch (err) {
    console.error("API Error:", err.response);
    let message = err.response.data.error.message;
    console.log(message);
  }
};

const getUsers = async () => {
  const res = await request(`users`);
  return res;
};

const getUser = async (user) => {
  const res = await request(`users/${user}`);
  return res;
};

const addUser = async (data) =>{
  const res = await request(`users`,data,'post')
  return res
}

const loginUser = async (username,password) => {
  const res = await request(`auth/token`,{username,password}, 'post');
  console.log(res)
  res.token = '1234'
  return res.token
}

export { getUsers, getUser, addUser, loginUser};
