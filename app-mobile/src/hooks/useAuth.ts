import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../contexts/AuthContext";

export const useAuth = (): AuthContextDataProps => {
  const { user, signIn, isUserLoading } = useContext(AuthContext);
  return { user, signIn, isUserLoading };
};
