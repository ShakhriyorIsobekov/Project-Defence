import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <section>
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;
