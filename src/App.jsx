import { Route, Routes } from "react-router-dom";

import IndexPage from "./pages/index";
import BlogPage from "./pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      {/*<Route element={<BlogPage />} path="/blog" />*/}
    </Routes>
  );
}

export default App;
