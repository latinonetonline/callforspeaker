import { useAuth } from "oidc-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  useEffect(() => {
    auth.userManager.signinRedirectCallback().then((user) => {
      navigate("/");
    });
  }, []);

  return <>Loading...</>;
};
export default CallbackPage;
