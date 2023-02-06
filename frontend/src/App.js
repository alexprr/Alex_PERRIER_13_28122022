import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { Provider } from "react-redux";
import store from "./app/store";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<Profile />} path="/profile" />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
