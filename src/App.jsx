import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import IndexPage from "./pages/index";
import BlogsPage from "./pages/blog";
import BlogPage from "./components/blogPage";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogsPage />} path="/blogs" />
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
        <Route
          element={
            <BlogPage
              articleContent={
                <div>
                  <p>
                    As part of improving my personal portfolio, I recently added
                    a blog section along with a full responsive design overhaul.
                    This update ensures that the site looks great and works
                    smoothly on all devices—from mobile phones to large
                    desktops.
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="why-responsive-design"
                  >
                    Why Responsive Design?
                  </h2>
                  <p>
                    In today&apos;s web, responsive design isn&apos;t optional.
                    Users interact with websites on all kinds of screen sizes. I
                    implemented Tailwind CSS utility classes to create layouts
                    that adjust dynamically based on viewport size. This ensures
                    consistency in design and accessibility across devices.
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="implementing-the-blog"
                  >
                    Implementing the Blog
                  </h2>
                  <p>
                    I created a blog system in React. Each blog post is a
                    component, making it easy to scale the blog with future
                    entries.
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="technical-highlights"
                  >
                    Technical Highlights
                  </h2>
                  <ul>
                    <li>
                      📱 Fully responsive layout using Tailwind&apos;s grid and
                      flex utilities
                    </li>
                    <li>🧩 Component-based blog system with reusable layout</li>
                    <li>⚡ Fast and SEO-friendly performance</li>
                  </ul>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="next-steps"
                  >
                    Next Steps
                  </h2>
                  <p>
                    I plan to add more tags, search functionality, and post
                    weekly updates. This will make it easier to find content and
                    keep the blog fresh and engaging.
                  </p>

                  <p>
                    This blog is more than a feature — it&apos;s a new way to
                    document and share everything I learn along the way.
                  </p>
                </div>
              }
              currentBlogNumber={1}
              imageSrc="/Blogs/1.png"
              postDate="June 26, 2025"
              tableOfContents={[
                {
                  id: "why-responsive-design",
                  title: "Why Responsive Design?",
                },
                {
                  id: "implementing-the-blog",
                  title: "Implementing the Blog",
                },
                {
                  id: "technical-highlights",
                  title: "Technical Highlights",
                },
                {
                  id: "next-steps",
                  title: "Next Steps",
                },
              ]}
              title="Responsive Design and Blogs"
            />
          }
          path="1"
        />
        <Route
          element={
            <BlogPage
              articleContent={
                <div>
                  <p>
                    This is the first entry in a new series called &quot;What I
                    Learned This Week&quot; — a weekly recap where I document
                    the concepts, challenges, and discoveries I&apos;ve made in
                    tech, game dev, and beyond.
                    <br />
                    <br />
                    The goal is simple: stay curious, keep building, and reflect
                    on progress in a way that&apos;s useful both to me and
                    anyone else walking a similar path.
                    <br />
                    <br />
                    Let&apos;s dive into what I explored this week!
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="a-pathfinding-in-unreal-engine-5-with-grid-cells"
                  >
                    A* Pathfinding in Unreal Engine 5 with Grid Cells
                  </h2>
                  <p>
                    This week, I explored implementing the A* (A-Star)
                    pathfinding algorithm within Unreal Engine 5 using a
                    grid-based system. Each tile in the world is represented by
                    a BP_GridCell actor, allowing for fine-grained control over
                    traversable paths.
                    <br />
                    <br />I learned how to assign costs (G, H, and F scores),
                    track open and closed sets, and build paths dynamically
                    between start and end points. A key insight was
                    understanding how to efficiently store neighbor references
                    and manage updates visually with Blueprints.
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="image-preprocessing-with-opencv"
                  >
                    Image Preprocessing with OpenCV
                  </h2>
                  <p>
                    I dove into image preprocessing using OpenCV to prepare
                    images for better OCR accuracy. This included grayscale
                    conversion, thresholding, noise reduction with morphological
                    operations, and contrast enhancement. <br /> <br />
                    One thing I learned is that even small preprocessing tweaks
                    (like choosing between adaptive thresholding vs. binary
                    thresholding) can significantly affect text recognition
                    results. It was also important to ensure that OpenCV
                    operations were applied to valid NumPy arrays to avoid
                    runtime errors.
                  </p>

                  <h2
                    className="text-4xl font-extrabold mt-10 mb-4"
                    id="optical-character-recognition-with-tesseract"
                  >
                    Optical Character Recognition with Tesseract
                  </h2>
                  <p>
                    After preprocessing, I integrated Tesseract for OCR (Optical
                    Character Recognition). Tesseract is powerful but highly
                    sensitive to input quality, so I learned to tweak OCR engine
                    modes (--oem) and page segmentation modes (--psm) to get
                    better results depending on the layout of the input image.
                    <br />
                    <br />
                    It also became clear that multilingual support and custom
                    configuration files can greatly improve recognition in more
                    complex or mixed-language texts.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p>
                    That&apos;s it for this week&apos;s learnings! From
                    pathfinding logic to OCR workflows, each challenge pushed me
                    to think a bit deeper and code a bit smarter. I&apos;m
                    looking forward to building on this knowledge and sharing
                    even more insights next week. <br /> <br />
                    Until next time — keep learning, keep building. 🚀
                  </p>
                </div>
              }
              currentBlogNumber={2}
              imageSrc="/Blogs/WILTW.png"
              postDate="July 18, 2025"
              tableOfContents={[
                {
                  id: "a-pathfinding-in-unreal-engine-5-with-grid-cells",
                  title: "A* Pathfinding in Unreal Engine 5 with Grid Cells",
                },
                {
                  id: "image-preprocessing-with-opencv",
                  title: "Image Preprocessing with OpenCV",
                },
                {
                  id: "optical-character-recognition-with-tesseract",
                  title: "Optical Character Recognition with Tesseract",
                },
              ]}
              title="Responsive Design and Blogs"
            />
          }
          path="2"
        />
      </Route>
    </Routes>
  );
}

export default App;
