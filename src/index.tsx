import AppProvider from "providers/AppProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import "helpers/initFA";
import BreakpointsProvider from "providers/BreakpointsProvider";
import SettingsPanelProvider from "providers/SettingsPanelProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "Routes";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { configureStore } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <Provider store={configureStore({})}>
      <SettingsPanelProvider>
        <BreakpointsProvider>
          <RouterProvider router={router} />
        </BreakpointsProvider>
      </SettingsPanelProvider>
    </Provider>
  </AppProvider>
);
