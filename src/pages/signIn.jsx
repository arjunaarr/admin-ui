import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn({ onToggle }) {
  return (
    <AuthLayout>
      <FormSignIn onToggle={onToggle} />
    </AuthLayout>
  );
}

export default SignIn;