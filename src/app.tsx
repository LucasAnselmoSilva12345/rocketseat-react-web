import { Toaster } from 'sonner';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/room';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom />,
  },
  {
    path: '/room/:roomId',
    element: <Room />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster invert richColors />
    </>
  );
}
