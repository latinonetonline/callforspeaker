import { useAuth } from "oidc-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../components/SpinnerLoading";
import { useAppContext } from "../data/AppContext";
import { setIsAuthenticated } from "../data/call-for-speakers/callforspeakers.action";

const CallbackPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const auth = useAuth();
  useEffect(() => {
    auth.userManager.signinRedirectCallback().then((user) => {
      sessionStorage.setItem("access_token", user.access_token);
      dispatch(setIsAuthenticated(true));
      navigate("/");
    });
  }, []);

  return <SpinnerLoading />;
};
export default CallbackPage;
