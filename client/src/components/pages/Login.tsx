import { useMutation } from "@tanstack/react-query"
import type { LoginRequestParams } from "../../types/zod"
import api from "../../lib/axios/axios"
import { API_ROUTES } from "../../lib/api"
import { useEffect, useState } from "react"
import { Eye, EyeClosed, Mail, Lock } from "lucide-react"
import type { Response } from "../../types"
import { userStore } from "../../state/global"
import { useNavigate } from "react-router-dom"

interface LoginResponse extends Response {
  data: {
    token: string;
  }
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const setToken = userStore(state => state.setToken);
  const getToken = userStore(state => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken) {
      navigate('/');
    }
  }, [])

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequestParams) => {
      const res = await api.post(API_ROUTES.AUTH.LOGIN, data);
      return res.data;
    },
    onSuccess: (data: LoginResponse) => {
      setToken(data.data.token);
      navigate('/');
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={20} className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <EyeClosed size={20} className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              <div className="mt-2 text-right">
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginMutation.isPending ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-4 px-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            By signing in, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}