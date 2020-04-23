import React from "react";
import { render } from "react-dom";

import "./index.scss";

import Application from "./components/Application";
import PostsProvider from "./providers/PostsProvider";
import AuthProvider from "./providers/AuthProvider";

render(
  <AuthProvider>
    <PostsProvider>
      <Application />
    </PostsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
