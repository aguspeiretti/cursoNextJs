"use client";
import { useAuthContext } from "@/components/context/AuthContext";

const Adminlayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return <>{user.logged ? children : login}</>;
};

export default Adminlayout;
