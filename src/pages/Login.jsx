import { useState, useEffect, useRef } from "react";
import { useAuth } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const {user, login} = useAuth();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const loginForm = useRef(null)

  useEffect(()=> {
    if(user) {
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    login(email, password)
  }

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-gray-900 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} ref={loginForm}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full bg-gray-800 text-white border rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full bg-gray-800 border text-white rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
        />
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;