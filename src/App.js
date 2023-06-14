import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import { Landing } from "./pages/landing/Landing";
import { Login } from "./pages/account/Login";
import { Signup } from "./pages/account/SignUp";
import { Home } from "./pages/home/Home";
import { Loader } from "./components/loader/Loader";
import { usePost } from "./context/postContext/PostContext";
import { RequiresAuth } from "./pages/auth/RequiresAuth";
import { Explore } from "./pages/explore/Explore";
import { Bookmark } from "./pages/bookmark/Bookmark";
import { Favourite } from "./pages/favourite/Favourite";

function App() {
  const { loading } = usePost();
  return (
    <div className="App">
      {loading && <Loader />}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />

        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />

        <Route
          path="/bookmark"
          element={
            <RequiresAuth>
              <Bookmark />
            </RequiresAuth>
          }
        />

        <Route
          path="/favourite"
          element={
            <RequiresAuth>
              <Favourite />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
