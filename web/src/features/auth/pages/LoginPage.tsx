import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import AuthContainer from "../components/AuthContainer";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";

export function LoginPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <AuthContainer>
      <AuthCard
       title="Welcome Back"
       subtitle="Sign in to continue to FinTrack"
       footerText="Don't have an account?"
       linkText="Register"
       linkTo="/register"
      >
        <LoginForm />
      </AuthCard>
    </AuthContainer>
  );
}