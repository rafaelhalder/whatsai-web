import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { validateLogin } from '../utils/validateLogin';
import { LoginPayload } from '../types/authTypes';

export function LoginForm() {
  const [form, setForm] = useState<LoginPayload>({ email: '', password: '' });
  const [formError, setFormError] = useState<string | null>(null);
  const { handleLogin, loading, error } = useLogin();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateLogin(form);
    if (validation) {
      setFormError(validation);
      return;
    }
    setFormError(null);
    const result = await handleLogin(form);
    if (result) {
      alert('Login realizado com sucesso!');
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Email</legend>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            autoComplete="username"
            required
          />
        </label>
        <div className={`validator-hint ${formError && formError.toLowerCase().includes('email') ? '' : 'hidden'}`}>
          {formError && formError.toLowerCase().includes('email') ? formError : 'Digite um e-mail válido'}
        </div> 
        </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Email</legend>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            autoComplete="current-password"
            required
          />
        </label>
        <div className={`validator-hint ${formError && formError.toLowerCase().includes('password') ? '' : 'hidden'}`}>
          {formError && formError.toLowerCase().includes('password') ? formError : 'Digite sua senha'}
        </div>
      </fieldset>
      {error && (
        <div className="alert alert-error mt-2">{error}</div>
      )}

      <button type="submit" className="btn btn-neutral" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}