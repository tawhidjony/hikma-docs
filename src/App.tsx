import { Routes } from "react-router";
import HomeLayouts from "./components/Layouts/HomeLayouts";
import { Route } from "react-router";
import Home from "./pages/Home";
import DocsLayout from "./components/Layouts/DocsLayout";
import GettingStarted from "./docs/introduction/getting-started.mdx";
import WhatIsHikmaUi from "./docs/introduction/what-is-hikma-ui.mdx";
import Theme from "./docs/introduction/theme.mdx";


function App() {
  return (  
      <Routes>
        <Route path="hikma-docs">
          <Route element={<HomeLayouts />}>
            <Route index element={<Home />} />
            <Route element={<DocsLayout />}>
              <Route path="what-is-hikma-ui" element={<WhatIsHikmaUi />} />
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="theme" element={<Theme />} />
            </Route>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
