import cn from "classnames";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-lg px-4 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
