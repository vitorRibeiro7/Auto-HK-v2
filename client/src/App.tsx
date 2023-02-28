import { HomePage, ListPage, CreatePage } from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import VehicleForm from "./components/VehicleForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<ListPage />} />
      <Route path="/vehicle/:id" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
