import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationProvider } from "./context/notification";
import { CartProvider } from "./context/cart";
import AppRouter from "./routes/AppRouter";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </NotificationProvider>
    </QueryClientProvider>
  );
}

export default App;
