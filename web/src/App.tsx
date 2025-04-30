import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import AuthContainer from './features/auth/components/AuthContainer';
import AuthCard from './features/auth/components/AuthCard';
import { LoginPage } from './features/auth/pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { userAuthStore } from './features/auth/store/authStore';

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
const logout = userAuthStore((state) => state.logout);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Bem-vindo ao painel do usuário!</p>
      <button className="btn btn-secondary mt-4" onClick={() => logout()}>Sair</button>
      {/* Adicione mais conteúdo do painel aqui */}
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

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Background for dark and light modes - only shown on non-homepage routes */}
      {!isHomePage && (
        <>
        <div className="fixed inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </>
      )}

      {/* <Header /> */}
      <main className="flex-grow w-full">
        {/* Use Outlet instead of nested Routes */}
        {/* <Outlet /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};


export function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
          success: {
            style: {
              background: '#10b981',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: 'white',
            },
          },
        }}
      />
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
    </BrowserRouter>
  );
}