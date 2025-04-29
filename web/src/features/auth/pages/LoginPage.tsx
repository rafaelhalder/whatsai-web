import AuthCard from "../components/AuthCard";
import AuthContainer from "../components/AuthContainer";
import LoginForm from "../components/LoginForm";

export function LoginPage() {
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