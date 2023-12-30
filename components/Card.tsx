import React from "react";
import cn from "@/libs/cn";

type Props = React.ComponentPropsWithRef<"div">;

const Card = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "bg-[#1c1c2b] text-white rounded-lg shadow-sm",
        props.className
      )}
    >
      {props.children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
