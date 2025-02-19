import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AuthLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
