import { AuthService } from "./AuthService";
import { LoginPayload, LoginResponse } from "../types/authTypes";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const authServiceImpl: AuthService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    try {
      const response = await axios.post<{token: string}>(
        `${API_URL}/authenticate`,
        payload,
        {
          headers:{
            "Content-Type": "application/json"
          }
        }
      );
      return {
        token: response.data.token,
        user: {
          id: "",
          name: "",
          email: payload.email,
        },
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      throw new Error(message);
    }
  }


}