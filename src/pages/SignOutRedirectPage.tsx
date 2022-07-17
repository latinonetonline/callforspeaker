import { useAuth } from "oidc-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOutRedirectPage = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  useEffect(() => {
    auth.userManager.signoutRedirectCallback().then((_) => {
      navigate("/");
    });
  }, []);

  return <>Loading...</>;
};
export default SignOutRedirectPage;
