import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**   STYLES ** */
import "./assets/styles/global.css";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvidor from "./context/AuthContext.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvidor>
        <App />
      </AuthContextProvidor>
    </QueryClientProvider>
  </React.StrictMode>
);
