import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Nav";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UserProvider } from "./lib/context/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Login/>} path="/login" />
            <Route element={<ProtectedRoutes />}>
              <Route element={<Home />} path="/" />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
