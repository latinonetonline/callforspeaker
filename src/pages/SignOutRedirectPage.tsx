import { useAuth } from "oidc-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../components/SpinnerLoading";
import { useAppContext } from "../data/AppContext";
import { setIsAuthenticated } from "../data/call-for-speakers/callforspeakers.action";

const SignOutRedirectPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const auth = useAuth();
  useEffect(() => {
    auth.userManager.signoutRedirectCallback().then((_) => {
      dispatch(setIsAuthenticated(false));

      navigate("/");
    });
  }, []);

  return <SpinnerLoading />;
};
export default SignOutRedirectPage;
