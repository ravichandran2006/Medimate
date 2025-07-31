import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Dummy navigation
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login to My MediMate</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
