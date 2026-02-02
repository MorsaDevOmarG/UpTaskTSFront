import Tabs from "@/components/profile/Tabs";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <>
      <div className="lg:mx-32 md:mx-32 sm:mx-32">
        <Tabs />

        <Outlet />
      </div>
    </>
  );
}
