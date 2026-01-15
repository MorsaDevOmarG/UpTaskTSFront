import { Link, Outlet } from "react-router-dom";
// import Logo from "../components/Logo";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>

          <NavMenu />
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

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
};
