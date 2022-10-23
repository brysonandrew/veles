import { Home } from "@components/home";
import { NotFound404 } from "@components/NotFound404";
import { Routes, Route } from "react-router";

export const Source = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound404 />} />
  </Routes>
);
