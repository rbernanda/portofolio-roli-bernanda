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
    <div className={cn("bg-black text-white rounded-lg shadow-sm", className)}>
      {children}
    </div>
  );
};

export default Card;
