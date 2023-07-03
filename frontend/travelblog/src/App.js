import Diaries from "./diaries/Diaries";
import Header from "./header/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Auth from "./auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import Add from "./diaries/Add";
import DiaryUpdate from "./diaries/DiaryUpdate";
import { useEffect } from "react";
import { authActions } from "./store";
import Logout from "./diaries/Logout";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />

          {isLoggedIn && (
            <>
              {" "}
              <Route path="/add" element={<Add />} />
              <Route path="/post/:id" element={<DiaryUpdate />} />
              <Route path="/Logout" element={<Logout />} />
            </>
          )}
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
