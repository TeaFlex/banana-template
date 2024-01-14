import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queries/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from "./routes";
import { UIProvider } from "./providers/UIProvider";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <UIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UIProvider>
  );
}

export default App;
