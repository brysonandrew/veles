import { NotFound404 } from "@components/not-found-404";
import { Routes, Route } from "react-router";
import { Index } from "src/pages";

export const Source = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound404 />} />
  </Routes>
);
