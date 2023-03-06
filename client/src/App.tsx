import { HomePage, ListPage, CreatePage } from './pages';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import './index.css';
import VehicleForm from './components/VehicleForm';
import CarViewPage from './pages/CarViewPage';
import { EditPage } from './pages/EditPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<ListPage />} />
            <Route path="/vehicle/:id" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/carView/:id" element={<CarViewPage />} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
