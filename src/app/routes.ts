import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import GSSC from "./pages/GSSC";
import AICup from "./pages/AICup";
import Academy from "./pages/Academy";
import Ventures from "./pages/Ventures";
import Advisory from "./pages/Advisory";
import Team from "./pages/Team";
import Network from "./pages/Network";
import Governance from "./pages/Governance";
import ConflictOfInterest from "./pages/policies/ConflictOfInterest";
import UseOfFunds from "./pages/policies/UseOfFunds";
import ByLaws from "./pages/policies/ByLaws";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "gssc", Component: GSSC },
      { path: "ai-cup", Component: AICup },
      { path: "academy", Component: Academy },
      { path: "ventures", Component: Ventures },
      { path: "advisory", Component: Advisory },
      { path: "team", Component: Team },
      { path: "network", Component: Network },
      { path: "governance", Component: Governance },
      { path: "policies/conflict-of-interest", Component: ConflictOfInterest },
      { path: "policies/use-of-funds", Component: UseOfFunds },
      { path: "policies/by-laws", Component: ByLaws },
      { path: "policies/privacy-policy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);