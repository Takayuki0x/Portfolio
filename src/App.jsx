import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import IndexPage from "./pages/index";
import BlogPage from "./pages/blog";
import Blog1 from "./components/blogPages/blog1";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blogs" />
      <Route path="/blog/">
        <Route
          element={
            <DefaultLayout>
              <h1 className="text-3xl font-bold text-center mt-4">
                Blog Not Found
              </h1>
            </DefaultLayout>
          }
          path="*"
        />
        <Route element={<Blog1 />} path="1" />
      </Route>
    </Routes>
  );
}

export default App;
