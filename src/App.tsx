import { Routes } from "react-router";
import HomeLayouts from "./components/Layouts/HomeLayouts";
import { Route } from "react-router";
import Home from "./pages/Home";
import DocsLayout from "./components/Layouts/DocsLayout";
import GettingStarted from "./docs/getting-started.mdx";
function App() {
  return (
      <Routes>
        <Route path="hikma-docs">
          <Route element={<HomeLayouts />}>
            <Route index element={<Home />} />
            <Route element={<DocsLayout />}>
              <Route path="getting-started" element={<GettingStarted />} />
            </Route>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
