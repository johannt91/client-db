import { useAuth } from "../lib/context/user";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

function Navbar() {
  const {user, logout} = useAuth();

  return (
    <nav className="flex justify-between items-center bg-gray-900 py-4 px-6">
      <a href="/" className="text-white text-lg font-bold">Home</a>
      <div>
        {user ? (
          <>
            <span className="text-white mr-4">{user.email}</span>
            <button 
              type="button" 
              onClick={logout} 
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Navigate element={<Login/>} path='/login'/>
        )}
      </div>
    </nav>
  );
}

export default Navbar;