import "./App.css";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ManageItems from "./Pages/ManageItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/manageItems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
