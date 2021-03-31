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

const loginUser = async (email,password) => {
  const res = await request(`token`,{email,password}, 'post');
  console.log('api helper loginUser',res)
  res.token = '1234'
  console.log(res);
  return token
}

export { getUsers, getUser, addUser, loginUser};
