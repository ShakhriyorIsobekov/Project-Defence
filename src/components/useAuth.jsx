import { useState, useEffect } from "react";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const getAuthHeader = () => {
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  };

  const setAuthToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearAuthToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { getAuthHeader, setAuthToken, clearAuthToken };
};

export default useAuth;
