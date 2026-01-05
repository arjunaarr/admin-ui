import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";

function signIn() {
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      console.log("Mencoba login dengan:", email, password);
      const response = await loginService(email, password);
      console.log("Response API:", response);
      
      // Coba berbagai nama field yang mungkin
      const token = response.token || response.accessToken || response.refreshToken;
      console.log("Token yang digunakan:", token);
      
      if (token) {
        login(token);
        console.log("Login berhasil, navigasi ke dashboard");
        navigate("/");
      } else {
        console.error("Token tidak ditemukan di response");
        alert("Login gagal: Token tidak diterima");
      }
    } catch (err) {
      console.error("Error login:", err);
      alert("Login gagal: " + (err.msg || err.message || "Unknown error"));
    }
  };
  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default signIn;