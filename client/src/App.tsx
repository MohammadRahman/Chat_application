import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Registration";
import Protect from "./components/private/Protect";
import Product from "./pages/product/Product";
import Navbar from "./components/navbar/Navbar.component";
import Unknown from "./components/Unknown";

function App() {
  const user = {
    email: "mail@mail.com",
    name: "name",
  };
  const homeNav = [
    {
      id: 1,
      name: "cart",
      navigate: "cart",
    },
    {
      id: 2,
      name: "profile",
      navigate: "profile",
    },
    {
      id: 3,
      name: "wishList",
      navigate: "wishlist",
    },
  ];
  const navitems = {
    name: "home",
    navigate: "unknown",
  };

  return (
    <>
      <Navbar
        children={
          homeNav
          //   .map((i) => (
          //   <Link to={`/${i.navigate}`}>{i.name}</Link>
          // ))
        }
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="unknown" element={<Unknown />} />

          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Register />} />
          <Route element={<Protect user={user} />}>
            <Route path="private" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
