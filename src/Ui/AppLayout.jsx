import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";

function AppLayout() {
  return (
    <div>
      <VerticalNavigation />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
