import { Home, Listing } from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Listing />} />
    </>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
