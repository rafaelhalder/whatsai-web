import { create } from "zustand";
import { LoginPayload,LoginResponse } from "../types/authTypes";
import { authServiceImpl } from "../services/authServiceImpl";

type AuthState = {
  user: LoginResponse["user"] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (payload: LoginPayload) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

export const userAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  login: async (payload) => {
    set({ loading: true, error: null });
    try {
      const response = await authServiceImpl.login(payload);
      set({ user: response.user, token: response.token, loading: false });
      localStorage.setItem("token", response.token);
      return true;
    } catch (err: any) {
      set({ error: err.message || "Login failed", loading: false });
      return false;
    }
  },  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },

  checkAuth: () => {
    const token = localStorage.getItem("token");
    set({ token });
    // Se quiser, pode buscar o perfil do usuário aqui no futuro
  },
}));