import { ReactNode } from "react";
import cn from "classnames";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("bg-[#1c1c2b] text-white rounded-lg shadow-sm", className)}
    >
      {children}
    </div>
  );
};

export default Card;
