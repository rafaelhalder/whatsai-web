import { LoginPayload,LoginResponse } from "../types/authTypes";

export interface AuthService {
  login(payload: LoginPayload): Promise<LoginResponse>;
}