import { AuthServiceProvider } from './features/auth/services/AuthServiceProvider';
import { LoginPage } from './features/auth/pages/LoginPage';

export function App() {
  return (
    <AuthServiceProvider>
      <LoginPage />
    </AuthServiceProvider>
  );
}