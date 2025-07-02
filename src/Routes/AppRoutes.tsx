import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Blocked from "../Blocked/Blocked";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}

        {/* Protected Routes */}
        {/* <Route element={<PrivateRoute />}> */}
          {/* <Route element={<MainLayout />}> */}
            <Route path="/" element={<Navigate to="/blocked" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blocked" element={<Blocked />} />
          {/* </Route> */}
        {/* </Route> */}

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
