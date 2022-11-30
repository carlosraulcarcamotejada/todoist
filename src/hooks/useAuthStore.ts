import { AppDispatch, RootState } from "../store/store";
import { onChecking, onCleanErrorMessage, onLogin, onLogout } from "../store";

import { todoistAPI } from "../api/todosAPI";
import { useDispatch, useSelector } from "react-redux";
import { SignInValues, SignUpValues } from "../auth/types";

export const useAuthStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const startSignIn = async ( SignInValues: SignInValues ): Promise<void> => {
    try {
      dispatch(onChecking());

      const {data:{_doc}} = await todoistAPI.post("/auth/signin",{...SignInValues});
      localStorage.setItem("todoist-token",_doc.token);
      localStorage.setItem(
        "todoist-token-init-date",
        new Date().getTime().toString()
      );

      console.log(_doc);

      dispatch(onLogin({
        _id: _doc._id,
        email: _doc.email,
        name: _doc.name,
        surname: _doc.surname,
        user: _doc.user,
      }));


    } catch (error: any) {
      const errorMessage: string = error?.response?.data?.message || "";
      dispatch(onLogout(errorMessage));
      console.log(error);
    }
  };

  const startSignUp = async (user: SignUpValues) => {
    try {
      dispatch(onChecking());
      const {
        data: { _doc },
      } = await todoistAPI.post("/auth/signup", { ...user });
      localStorage.setItem("todoist-token", _doc.token);
      localStorage.setItem(
        "todoist-token-init-date",
        new Date().getTime().toString()
      );

      dispatch(
        onLogin({
          _id: _doc._id,
          email: _doc.email,
          name: _doc.name,
          surname: _doc.surname,
          user: _doc.user,
        })
      );
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
    startSignUp,
    startLogout,
    startCleanErrorMessage,
  };
};
