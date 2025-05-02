import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./containers/Error404";
import Home from "./containers/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
