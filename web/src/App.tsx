import { AuthServiceProvider } from './features/auth/services/AuthServiceProvider';
import AuthContainer from './features/auth/components/AuthContainer';
import AuthCard from './features/auth/components/AuthCard';
import { LoginPage } from './features/auth/pages/LoginPage';
export function App() {
  return (
    <AuthContainer>
      <AuthServiceProvider>
        <AuthCard 
          title="Welcome Back" 
          subtitle="Sign in to continue to FinTrack" 
          footerText="Don't have an account?" 
          linkText="Register" 
          linkTo="/register"
        >
        <LoginPage />
        </AuthCard>
      </AuthServiceProvider>
    </AuthContainer>
  );
}