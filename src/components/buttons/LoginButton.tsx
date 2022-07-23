import { useAuth } from "oidc-react";
import React from "react";
import "./ButtonStyles.scss";

interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = () => {
  const auth = useAuth();

  return (
    <button type="button" onClick={() => auth.signIn()}>Inicie sesión para continuar</button>
  );
};

export default LoginButton;
