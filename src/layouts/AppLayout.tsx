import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div>Layout</div>

      {/* OUTLET: muestra la vista hija, ejemplo:
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashBoardView />} index />
        </Route>
        En este ejemplo, la vista hija es DASHBOARD
      */}
      <Outlet />
    </>
  );
};
