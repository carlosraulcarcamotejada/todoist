import { FC } from "react";
import {
  CalendarDaysIcon,
  PlusIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export const Navbar: FC = (): JSX.Element => {
  return (
    <div className="flex fixed w-full p-2 shadow-md bottom-0 h-20 bg-white dark:bg-gray-900 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex relative justify-around items-center w-full">
        <NavLink
          className="h-16 w-16 flex justify-center items-center "
          to="/home"
        >
          {({ isActive }) => {
            return isActive ? (
              <HomeIconSolid
                className={`h-16 w-16 p-4 text-teal-500  active:scale-90 active:text-teal-700 transition-all duration-200`}
              />
            ) : (
              <HomeIcon
                className={`h-16 w-16 p-4 text-neutral-700/70 dark:text-neutral-200/70 active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 transition-all duration-200`}
              />
            );
          }}
        </NavLink>

        <NavLink
          to="/page2"
          className="h-16 w-16 flex justify-center items-center "
        >
          {({ isActive }) => {
            return isActive ? (
              <CalendarDaysIconSolid
                className={`h-16 w-16 p-4 text-teal-500  active:scale-90 active:text-teal-700 transition-all duration-200`}
              />
            ) : (
              <CalendarDaysIcon
                className={`h-16 w-16 p-4 text-neutral-700/70 dark:text-neutral-200/70 active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 transition-all duration-200`}
              />
            );
          }}
        </NavLink>

        <div className="flex relative -top-10 justify-center items-center">
          <FloatinButton />
        </div>

        <NavLink
          to="/page3"
          className="h-16 w-16 flex justify-center items-center"
        >
          {({ isActive }) => {
            return isActive ? (
              <UserCircleIconSolid
                className={`h-16 w-16 p-4  text-teal-500  active:scale-90 active:text-teal-700 transition-all duration-200`}
              />
            ) : (
              <UserCircleIcon
                className={`h-16 w-16 p-4 text-neutral-700/70 dark:text-neutral-200/70 active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 transition-all duration-200`}
              />
            );
          }}
        </NavLink>

        <NavLink
          to="/page4"
          className="h-16 w-16 flex justify-center items-center "
        >
          {({ isActive }) => {
            return isActive ? (
              <Cog6ToothIconSolid
                className={`h-16 w-16 p-4 text-teal-500  active:scale-90 active:text-teal-700 transition-all duration-200`}
              />
            ) : (
              <Cog6ToothIcon
                className={`h-16 w-16 p-4 text-neutral-700/70 dark:text-neutral-200/70 active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 transition-all duration-200`}
              />
            );
          }}
        </NavLink>
      </div>
    </div>
  );
};

const FloatinButton: FC = (): JSX.Element => {
  return (
    <button
      className="h-16 w-16 p-2.5 shadow-md active:shadow-sm flex justify-center items-center font-extrabold 
      rounded-full text-neutral-100 transition-all duration-200 bg-teal-500 active:bg-teal-600 active:scale-90"
      type="button"
    >
      <PlusIcon className="h-8 w-8" />
    </button>
  );
};

// type NavItemProps = {
//   ActiveIcon: (<CalendarDaysIcon />) | ( <UserCircleIcon /> ) | ( <Cog6ToothIcon />)  |( <HomeIcon />)
//   InactiveIcon: JSX.Element;
//   path: string;
// };

// const NavItem: FC<NavItemProps> = ({
//   ActiveIcon,
//   InactiveIcon,
//   path,
// }): JSX.Element => {
//   return (
//     <NavLink className="h-16 w-16 flex justify-center items-center " to={path}>
//       {({ isActive }) => {
//         return isActive ? (
//           <ActiveIcon
//             className={`h-16 w-16 p-4 text-teal-500  active:scale-90 active:text-teal-700 transition-all duration-200`}
//           />
//         ) : (
//           <InactiveIcon
//             className={`h-16 w-16 p-4 text-neutral-700/70 dark:text-neutral-200/70 active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 transition-all duration-200`}
//           />
//         );
//       }}
//     </NavLink>
//   );
// };
