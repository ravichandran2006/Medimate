import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { name, email, password });
    // Dummy redirect after signup
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Create Your Account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
