import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthServiceProvider } from './features/auth/services/AuthServiceProvider';
import AuthContainer from './features/auth/components/AuthContainer';
import AuthCard from './features/auth/components/AuthCard';
import { LoginPage } from './features/auth/pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function RegisterPage() {
  return (
    <AuthContainer>
      <AuthCard
        title="Crie sua conta"
        subtitle="Comece a usar o Whats AI"
        footerText="Já tem uma conta?"
        linkText="Entrar"
        linkTo="/login"
      >
        {/* <RegisterForm /> */}
        <div>Formulário de cadastro aqui</div>
      </AuthCard>
    </AuthContainer>
  );
}

function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Bem-vindo ao painel do usuário!</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bem-vindo ao Whats AI</h1>
          <p className="py-6">Gerencie suas finanças de forma simples e segura.</p>
          <Link to="/login" className="btn btn-primary">Entrar</Link>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AuthServiceProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthServiceProvider>
    </BrowserRouter>
  );
}