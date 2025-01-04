import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes/AppRouter";
import { NotificationProvider } from "./context/notification";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <AppRouter />
      </NotificationProvider>
    </QueryClientProvider>
  );
}

export default App;
