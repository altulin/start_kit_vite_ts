import { FC, ReactNode } from "react";
import style from "./Form.module.scss";
import clsx from "clsx";

const Container: FC<{
  children: ReactNode;
  modifier?: string;
  className?: string;
}> = ({ children, ...props }) => {
  return (
    <div
      className={clsx(
        style.container,
        style[`container--${props.modifier}`] || "",
        props.className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
