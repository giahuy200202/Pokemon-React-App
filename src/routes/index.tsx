import { Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pokemon/:id" element={<Dashboard />} />
      </Route>
    </Routes>

  );
};

export default AppRoutes;
