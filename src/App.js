import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Settings from "./page/Settings";
import Chats from "./page/Chats";
import Dialog from "./page/Dialog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<Chats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/" element={<Navigate to="/chats" />} />
      </Routes>
    </BrowserRouter>
  );
}
