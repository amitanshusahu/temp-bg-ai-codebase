import type { JSX } from "react";
import Login from "./components/pages/Login";
// import AppLayout from "./components/ui/Layout/AppLayout";
// import Home from "./components/pages/Home";
// import { HomeIcon } from "lucide-react";
import Landing from "./components/pages/Landing";
import Landing2 from "./components/pages/Landing2";
import Landing3 from "./components/pages/Landing3";

type Route = {
  path: string;
  element: JSX.Element;
  menu?: boolean;
  name?: string;
  icon?: JSX.Element;
  activeFor?: string[];
}[]

export const routes: Route = [
  {
    path: '*',
    element: <div>Sorry not found</div>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Landing2 />,
  },
  {
    path: "/2",
    element: <Landing />,
  },
  {
    path: "/3",
    element: <Landing3 />,
  }
]