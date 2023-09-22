import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import React from "react";
import Chat, { loader as chatLoader} from "./pages/chat";

const location = new ReactLocation();
export const AppRouter = () => {
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <Chat />,
          loader:async () => await chatLoader(),
        },
      ]}
    >
      <Outlet />
    </Router>
  );
};
