import type { JSX } from "react";
import Login from "./components/pages/Login";
import AppLayout from "./components/ui/Layout/AppLayout";
import Home from "./components/pages/Home";
import { HomeIcon } from "lucide-react";

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
    element: <AppLayout>
      <Home />
    </AppLayout>,
    menu: true,
    name: "Dashboard",
    icon: <HomeIcon size={16} />,
  }
]