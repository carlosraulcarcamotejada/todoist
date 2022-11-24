import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

type messageLink = {
  displayedMessage: string;
  path: string;
};

type props = {
  displayedMessagesLinks: messageLink[];
};

export const LinkPage: FC<props> = ({
  displayedMessagesLinks,
}): JSX.Element => {

  const {status} = useAuthStore();

  return (
    <div
      className={`mt-6 flex justify-center ${
        displayedMessagesLinks.length > 1 ? "flex-col items-center" : ""
      }`}
    >
      {displayedMessagesLinks.map(({ displayedMessage, path }) => (
        <Link
          key={displayedMessage}
          className={`${status === 'checking'?'pointer-events-none text-gray-500/50':''} font-semibold text-blue-500 mb-2`}
          to={path}
        >
          {displayedMessage}
        </Link>
      ))}
    </div>
  );
};
