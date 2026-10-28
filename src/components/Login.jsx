import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    dispatch(
      login({
        email: email,
      })
    );

    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="card login-card shadow">
        <div className="card-body p-4">
          <h2 className="text-center mb-2">
            Welcome to <span>Beya</span>
          </h2>

          <p className="text-center text-muted mb-4">
            Login to continue shopping
          </p>

          {isLoggedIn && (
            <p className="text-success text-center">
              You are logged in!
            </p>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            New to Beya? <a href="/login">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
