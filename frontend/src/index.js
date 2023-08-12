import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pj8oyt3uhbknwwtt.us.auth0.com"
      clientId="UtYvru2SQ2ykT3wh5tuqQIYiavWV0rOC"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
