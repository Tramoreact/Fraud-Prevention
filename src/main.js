import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import FraudPreventionShield from "./App";
import Blocked from "./Blocked/Blocked"


const root = document.getElementById("root");
// createRoot(root).render(_jsx(FraudPreventionShield, {}));
createRoot(root).render(_jsx(Blocked, {}));
