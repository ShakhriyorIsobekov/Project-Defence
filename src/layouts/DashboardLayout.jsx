import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

function DashboardLayout() {
  return (
    <section>
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default DashboardLayout;
