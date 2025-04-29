import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      {/* Título e ícone acima do card */}
      <div className="items-center mb-8">
        <h2 className="text-lg font-semibold">Login to your account</h2>
      </div>
      <div className="flex bg-base-100 rounded shadow-lg overflow-hidden max-w-3xl w-full">
        {/* Coluna da imagem */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="City"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Coluna do formulário */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}