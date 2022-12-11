import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { LayoutContent } from "../layout/LayoutContent";
import { LayoutTodos } from "../layout/LayoutTodos";

export const Page2: FC = (): JSX.Element => {
  const { user } = useAuthStore();

  return (
    <LayoutTodos>
      <LayoutContent>
        <h1 className="text-neutral-800/70 dark:text-white">
          Welcome Back on Page 2 {user.name}
        </h1>
      </LayoutContent>
    </LayoutTodos>
  );
};
