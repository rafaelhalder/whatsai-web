import { AuthService } from "./AuthService";
import { LoginPayload, LoginResponse } from "../types/authTypes";

export const authServiceImpl: AuthService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
        // Simulação de chamada à API
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (payload.email === 'admin@admin.com' && payload.password === '123456') {
              resolve({
                token: 'fake-jwt-token',
                user: {
                  id: '1',
                  name: 'Admin',
                  email: payload.email,
                },
              });
            } else {
              reject(new Error('Credenciais inválidas'));
            }
          }, 1000);
        });
    // const response = await fetch("localhost:3000/authenticate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });

    // if (!response.ok) {
    //   throw new Error("Login failed");
    // }

    // const data = await response.json();
    // return data;
  }


}