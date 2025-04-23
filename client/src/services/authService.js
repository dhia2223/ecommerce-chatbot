import api from "../api";

export const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  const { access_token: token, user } = res.data;

  console.log("login() response:", res.data);                    //   testing 


  return res.data;
};

