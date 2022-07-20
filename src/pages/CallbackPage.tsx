import { useAuth } from "oidc-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../data/AppContext";
import { setIsAuthenticated } from "../data/call-for-speakers/callforspeakers.action";

const CallbackPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const auth = useAuth();
  useEffect(() => {
    auth.userManager.signinRedirectCallback().then((user) => {
      dispatch(setIsAuthenticated(true));
      navigate("/");
    });
  }, []);

  return <>Loading...</>;
};
export default CallbackPage;
