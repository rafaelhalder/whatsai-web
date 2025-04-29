import { Navigate } from "react-router-dom";
import { useAuthService } from "../features/auth/services/AuthServiceProvider";
import { useState, useEffect } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const authService = useAuthService();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule uma checagem de autenticação (ajuste conforme sua lógica real)
    // Exemplo: checar se existe um token salvo
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}