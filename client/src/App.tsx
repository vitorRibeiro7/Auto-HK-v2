import { useState } from "react";
 
import { Home } from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
        <Route path='/home' element={<Home />} />
        {/* ... etc. */}
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
