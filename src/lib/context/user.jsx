import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";
import { ID } from "appwrite";

const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  async function login(email, password) {
    setLoading(true)
    console.log(email, password)

    let loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
    setLoading(false)
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  async function checkUserStatus() {
    try {
      let loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    checkUserStatus();
  }, []);

  const contextData = {
    user,
    login,
    logout,
    register
  }

  return (
    <UserContext.Provider value={contextData}>
      {loading ? <p>Loading... </p> : children}
    </UserContext.Provider>
  );
}
