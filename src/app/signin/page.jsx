'use client';
import React, { useState } from "react";
import { SiApostrophe } from "react-icons/si";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-gray-950">
        <div className="min-h-screen flex items-center justify-center bg-navy-blue">
        <div className="w-full max-w-md p-8 bg-black text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-orange mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-orange text-black font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-orange hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      </div>
    );
  }

export default SignIn;
