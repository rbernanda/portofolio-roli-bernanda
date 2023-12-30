import React from "react";
import cn from "@/libs/cn";

type Props = React.ComponentPropsWithRef<"div">;

const MaxWidthWrapper = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "mx-auto w-full max-w-screen-lg px-4 md:px-20",
          props.className
        )}
      >
        {props.children}
      </div>
    );
  }
);

MaxWidthWrapper.displayName = "MaxWidthWrapper";

export default MaxWidthWrapper;
