import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../../pages/auth/Login";

interface Props {
  user: {
    email: string;
    name: string;
  };
}
const Protect = (props: Props) => {
  //   const [user, setUser] = useState(true);
  return props.user.email !== "" ? <Outlet /> : <Login />;
};

export default Protect;
