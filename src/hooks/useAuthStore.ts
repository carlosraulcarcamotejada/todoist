import { useDispatch, useSelector } from "react-redux";
import { onChecking, onCleanErrorMessage, onLogin, onLogout } from "../store";
import { AppDispatch, RootState } from "../store/store";

export const useAuthStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const startSignIn = async (
    userOrEmail: string,
    password: string
  ): Promise<void> => {
    try {
      dispatch(onChecking());

      const userData = {
        _id: 1,
        email: userOrEmail,
        name: "Carlos Raúl",
        surname: "Cárcamo Tejada",
        user: userOrEmail,
      };

      setTimeout(() => {
        dispatch(onLogin(userData));
      }, 3000);
    } catch (error: any) {
      const errorMessage: string = error?.response?.data?.message || "";
      dispatch(onLogout(errorMessage));
      console.log(error);
    }
  };

  const startLogout = () => {
    localStorage.setItem("token-todoist", "");
    dispatch(onLogout());
  };

  const startCleanErrorMessage = () => {
    dispatch(onCleanErrorMessage());
  };

  return {
    //Properties
    ...auth,
    //Methods
    startSignIn,
    startLogout,
    startCleanErrorMessage,
  };
};
