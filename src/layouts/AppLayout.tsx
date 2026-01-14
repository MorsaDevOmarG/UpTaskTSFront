import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>

          <nav></nav>
        </div>
      </header>

      {/* OUTLET: muestra la vista hija, ejemplo:
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashBoardView />} index />
        </Route>
        En este ejemplo, la vista hija es DASHBOARD
      */}
      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </section>

      <footer className="py-5">
        <p className="text-center">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};
