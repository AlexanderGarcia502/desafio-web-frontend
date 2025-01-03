import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes/AppRouter";
import { NotificationProvider } from "./context/notification";

function App() {
  const queryClient = new QueryClient();

  return (
    <div style={{ height: "100vh" }}>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <AppRouter />
        </NotificationProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
