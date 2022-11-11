import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";

export const GetStartedPage: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <LayoutAuth typePage="getstarted" titlePage="Get Started">
      <div className="flex min-h-screen w-full flex-col justify-around items-center ">
        <div className="-mt-20">
          <img
            className="w-72"
            src="/person-working.png"
            alt="person-working"
          />
        </div>
        <div className="-mt-56 md:-mt-96">
          <h3 className="text-2xl mb-4 text-center font-semibold text-gray-600 dark:text-gray-300">
            Welcome to Todoist
          </h3>
          <p className="text-gray-400 font-semibold text-md dark:text-gray-500">
            Let this app help you organize your tasks.
          </p>
        </div>

        <div className="-mt-56 md:-mt-96">
          <button
            className="mt-8 bg-green-leaf  w-56 py-4 px-6 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-emerald-600 
           active:bg-emerald-600 active:scale-95"
            onClick={() => navigate("/auth/signin")}
          >
            Get Started
          </button>
        </div>
      </div>
    </LayoutAuth>
  );
};
