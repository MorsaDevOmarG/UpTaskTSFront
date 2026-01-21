import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="p-10 lg:py-20 mx-auto w-[450px]">
          <Logo />

          <div className="mt-10">
            {/* Esto va inyectar el contenido de cada uno de los COMPONENTES */}
            <Outlet />
          </div>
        </div>
      </div>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
