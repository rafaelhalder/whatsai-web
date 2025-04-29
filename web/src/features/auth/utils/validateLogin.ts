import { LoginPayload } from "../types/authTypes";

export function validateLogin({email, password}: LoginPayload): string | null {
  if (!email) {
    return "Email is required";
  }
  if (!password) {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
  return null;
}