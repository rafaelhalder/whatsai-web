import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { validateLogin } from '../utils/validateLogin';
import { LoginPayload } from '../types/authTypes';
import { Mail, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
});

function LoginForm() {
  // const [form, setForm] = useState<LoginPayload>({ email: '', password: '' });
  // const [formError, setFormError] = useState<string | null>(null);
  // const { handleLogin, loading, error } = useLogin();

  // async function onSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   const validation = validateLogin(form);
  //   if (validation) {
  //     setFormError(validation);
  //     return;
  //   }
  //   setFormError(null);
  //   const result = await handleLogin(form);
  //   if (result) {
  //     alert('Login realizado com sucesso!');
  //   }
  // }

  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  // const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(schema)
  });

  //   const onSubmit = async (data: any) => {
  //     console.log(data);
  //     try {
  //         const result = {  success: true,error: 'asdf' }; // Simulate login success
  //         // const result = await login(data.email, data.password);
  //         // Check if login was actually successful
  //         if (result.success) {
  //             toast.success('Successfully LoggedIn!');
  //             reset();
  //             navigate("/"); // Redirect to dashboard or home page
  //         } else {
  //             // Handle auth failure based on returned error
  //             toast.error(result.error || "Login failed");
  //             setError("root", {
  //                 message: result.error || "Login failed"
  //             });
  //         } 
  //     } catch (error : any) {
  //         // Error handling remains the same
  //         if (error.response) {
  //             const { status, data } = error.response;

  //             if (status === 401) {
  //                 setError("password", {
  //                     message: "Invalid email or password"
  //                 });
  //             } else if (status === 404) {
  //                 setError("email", {
  //                     message: "Email not registered"
  //                 });
  //             } else if (data?.message) {
  //                 setError("root", {
  //                     message: data.message
  //                 });
  //             } else {
  //                 setError("root", {
  //                     message: "An unexpected error occurred"
  //                 });
  //             }
  //         toast.error(data.message || "An unexpected error occurred");
  //         } else {
  //             setError("root", {
  //                 message: "Network error. Please try again."
  //             });
  //         }
  //     }
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-full'>
      <form className='space-y-4 md:space-y-6'>
        {/* Show general form errors */}
        {errors.root && (
          <div className={`p-3 rounded text-sm md:text-base bg-red-50 border border-red-400 text-red-700`}>
            {errors.root.message}
          </div>
        )}

        <div>
          <label htmlFor="email" className='block text-sm font-medium mb-1 text-gray-700'>
            Email
          </label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className='h-4 w-4 md:h-5 md:w-5  text-gray-400' />
            </div>
            <input
              id='email'
              {...register("email")}
              type='email'
              placeholder='Digite seu e-mail'
              className='w-full pl-10 pr-3 py-2 text-sm md:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white border-gray-300 text-gray-900'
            />
          </div>
          {errors.email && (
            <p className={`mt-1 text-xs md:text-sm "text-red-600"`}>
              {errors.email.message}
            </p>
          )}
        </div>
        {/* Password Field */}
        <div>
          <label htmlFor="password" className='block text-sm font-medium mb-1 text-gray-700'>
            Password
          </label>
          <div className='relative'>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KeyRound className='h-4 w-4 md:h-5 md:w-5 text-gray-400' />
            </div>
            <input
              id="password"
              {...register("password")}
              type={showPassword == true ? "text" : "password"}
              placeholder="••••••"
              className='w-full pl-10 pr-10 py-2 text-sm md:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white border-gray-300 text-gray-900'
            />
            <button
              type='button'
              className='absolute inset-y-0 right-0 pr-3 flex items-center'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className='h-4 w-4 md:h-5 md:w-5 text-gray-500 hover:text-gray-700' />
              ) : (
                <Eye className='h-4 w-4 md:h-5 md:w-5 text-gray-500 hover:text-gray-700' />
              )}
            </button>
          </div>
          {errors.password && (
            <p className={`mt-1 text-xs md:text-sm "text-red-600"`}>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='flex items-center justify-end'>
          <a href="#" className='text-xs md:text-sm text-emerald-600 hover:text-emerald-700'>
            Forget your password?
          </a>
        </div>
        <button type='submit'
        disabled={isSubmitting}
        className='w-full py-2 px-4 text-sm md:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-700 focus:ring-offset-2'
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className='loading loading-infinity loading-lg'>
                Logging in...
              </span>
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>

      <div className='relative my-4 md:my-6'>
        <div className="absolute inset-0 flex items-center">
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <div className='relative flex justify-center text-xs md:text-sm'>
          <span className='px-2 bg-white text-gray-500'>
            Don't have an account?
          </span>
        </div>
      </div>
        <button
          type='button'
          onClick={()=> window.location.href = '/register'}
          className='w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md transition-colors text-sm md:text-base bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
        >
          <span className='ml-1'>Cadastrar-se</span>
        </button>
      </div>
  );
}
export default LoginForm;
function useAuthStore(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}
