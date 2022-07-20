import { useAuth } from "oidc-react";
import React from "react";
import { useAppContext } from "../../data/AppContext";
import {
  setIsAuthenticated,
} from "../../data/call-for-speakers/callforspeakers.action";
import "./ButtonStyles.scss";

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const { dispatch } = useAppContext();
  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut().then((_) => dispatch(setIsAuthenticated(false)));
  };

  return (
    <div onClick={handleLogout} className="prev-button">
      Logout
    </div>
  );
};

export default LogoutButton;
