import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OperatorPage from "./pages/Operator";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const queryClient = new QueryClient();

  return (
    <div style={{ height: "100vh" }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              element={
                <ProtectedRoute allowedRoles={["Cliente"]} redirectPath="/" />
              }
            >
              <Route path="/" element={<HomePage />} />
            </Route>

            <Route
              element={
                <ProtectedRoute
                  allowedRoles={["Administrador", "Operador"]}
                  redirectPath="/management"
                />
              }
            >
              <Route path="/management" element={<OperatorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
