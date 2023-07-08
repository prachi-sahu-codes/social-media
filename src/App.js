import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import { Landing } from "./pages/landing/Landing";
import { Login } from "./pages/account/Login";
import { Signup } from "./pages/account/SignUp";
import { Feed } from "./pages/feed/Feed";
import { Loader } from "./components/loader/Loader";
import { usePost } from "./context/postContext/PostContext";
import { RequiresAuth } from "./auth/RequiresAuth";
import { Explore } from "./pages/explore/Explore";
import { Bookmark } from "./pages/bookmark/Bookmark";
import { Favourite } from "./pages/favourite/Favourite";
import { PostDetail } from "./pages/postDetail/PostDetail";
import { UserProfile } from "./pages/userProfile/UserProfile";
import { NotFound } from "./pages/notfound/NotFound.js";

function App() {
  const { loading } = usePost();
  return (
    <div className="App dark:bg-black dark:text-white">
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
          path="/feed"
          element={
            <RequiresAuth>
              <Feed />
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

        <Route
          path="/posts/:postId"
          element={
            <RequiresAuth>
              <PostDetail />
            </RequiresAuth>
          }
        />

        <Route
          path="/users/:username"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
