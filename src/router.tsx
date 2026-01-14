import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppLayout from "./layouts/AppLayout";
import AppLayout from "@/layouts/AppLayout";
// import DashBoardView from "./views/DashBoardView";
import DashBoardView from "@/views/DashBoardView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashBoardView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};