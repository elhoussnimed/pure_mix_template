import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "../src/components/home_page_components/Footer";
import Navbar from "../src/components/navbar_components/Navbar";
import Contact from "./pages/Contact";
import SingleProject from "./pages/SingleProject";
import SingleBlogArticle from "./pages/SingleBlogArticle";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":projectId" element={<SingleProject />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":blogId" element={<SingleBlogArticle />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
