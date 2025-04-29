import { useState } from "react";
import { useAuthService } from "../services/AuthServiceProvider";
import { LoginPayload,LoginResponse } from "../types/authTypes";

export function useLogin(){
  const authService = useAuthService();
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState<string | null>(null);

  async function handleLogin(payload: LoginPayload): Promise<LoginResponse | null>{
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(payload);
      return response;
    } catch (error: any) {
      setError(error.message || "An error occurred during login");
      return null;
    }finally{
      setLoading(false);  
    }
  }
  return {handleLogin, loading, error}
}