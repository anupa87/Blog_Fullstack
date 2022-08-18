import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BlogCreate from "./pages/BlogCreate";
import BlogShow from "./pages/BlogShow";
import BlogEdit from "./pages/BlogEdit";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/blogs" element={<BlogList.js />} />
        <Route exact path="/blog/:title" element={<BlogList />} />
        <Route path="/create" element={<BlogCreate />} />
        <Route path="/edit/:id" element={<BlogEdit />} />
        <Route path="/show/:id" element={<BlogShow />} />
        <Route path="/collab" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
